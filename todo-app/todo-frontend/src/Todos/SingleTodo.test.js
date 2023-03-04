import SingleTodo from './SingleTodo'
import { render, screen } from '@testing-library/react'

describe('Single todo test', () => {
  it('simple test', () => {
    const todo = { text: 'learn FSO', done: false }
    render(<SingleTodo todo={todo} />)
    const content = screen.getByText("learn FSO")
    // console.log(content)
    expect(content).toBeInTheDocument()
  })
})
