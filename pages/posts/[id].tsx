import { useRouter } from "next/router"

export default function Blog() {

    const router = useRouter()
    const { id } = router.query

    return(
         <h1>Hello {id}</h1>
    )

}

// export async function getStaticProps(params:string) {
//     const res = await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts/${params}`)
//     const data = await res.json();

//     return {
//         props: {blog: data}
//     }
// }

// export async function getStaticPaths(params:string) {
    
//     const res = await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts/${params}`)
//     const data = await res.json();

//     const paths = data.map((post: any) => {
//         return {params: {id: post} }
//     })

//     return{
//         paths,
//         fallback:false
//     }
// }
