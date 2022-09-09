import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import BlogsList from '../pages/posts/index'
import '@testing-library/jest-dom'

describe('Home', () => {

  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })
    expect(heading).toBeInTheDocument()
  })
  
  it('Has back and forth buttons', () => {
    render(<BlogsList />)
    const card = screen.getByRole('card', {
      name: /card\.js!/i,
    })
    expect(card).toBeInTheDocument()
  })

})