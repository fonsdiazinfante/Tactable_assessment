import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from "../../hooks/pagination";
import NavBar from "../../hooks/navbar";
import Stack from 'react-bootstrap/Stack';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export default function BlogsList() {

const [posts, setPosts] =  useState<any[]>([])
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(3);
const currentPaginationData = posts.slice((page-1)*5, ((page-1)*5)+5); //The 5 is the number of posts that we want to show

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

async function fetchBlog() {
  const res = await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')
  const data = await res.json();
  setTotalPages(Math.ceil(data.length/5))
  console.log(data)
  setPosts(data)
}

function dateConversion(timestamp:string){
 var date = new Date(timestamp)
 return date.toLocaleDateString()
}


  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <>
    <NavBar/>
    <div style={{padding: "4em"}}>
    <Stack gap={5} className="col-md-5 mx-auto">
      {currentPaginationData.map((post) => (
        <Card key={post.id} style={{ width: 'auto', margin: 'auto' }}>
            <Card.Img variant="top" src='books.jpeg' alt="Picture of the author"/>
            <Card.Body>
                <Card.Title>{post.title.charAt(0).toUpperCase()+ post.title.slice(1)}</Card.Title>
                <Card.Text>
                    {post.description}
                </Card.Text>
                <OverlayTrigger
                    trigger="click"
                    key={"right"}
                    placement={"right"}
                    overlay={
                        <Popover id={`popover-positioned-right`}>
                        <Popover.Header as="h3">Details</Popover.Header>
                        <Popover.Body>
                            <strong>Created on:</strong> {dateConversion(post.createdAt)}
                                <br/>
                            <strong>Updated on:</strong> {dateConversion(post.updatedAt)}
                                <br/>
                            <strong>By:</strong> {post.authors[0].name}
                        </Popover.Body>
                        </Popover>
                    }
                    >
                    <Button variant="primary">{post.title.charAt(0).toUpperCase()+ post.title.slice(1)} Details</Button>
                    </OverlayTrigger>
            </Card.Body>
        </Card>
      ))}
    </Stack>
      <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
    </div>
    </>
    )
}