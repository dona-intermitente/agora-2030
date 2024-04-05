import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from '@/components/organisms/navbar'
import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

describe('Navbar', () => {
  it('blog navigation', () => {
    mockRouter.push('/')
    render(<Navbar />, { wrapper: MemoryRouterProvider })

    const navbar = screen.getByRole('link', { name: 'Blog' })
    expect(navbar).toHaveAttribute('href', '/blog')

    fireEvent.click(navbar)

    expect(mockRouter.asPath).toEqual('/blog')
  })
})
