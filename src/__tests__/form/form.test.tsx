import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from '@/components/organisms/form'
import { formData, fetchSendEmailData } from '@/__mocks__/fetchMock'
import { sendEmail } from '@/utils/send-email'
import fetch from 'jest-fetch-mock'

describe('Form', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('renders a heading', () => {
    render(<Form />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('renders inputs', () => {
    const mock = fetch.mockResponseOnce(JSON.stringify(fetchSendEmailData))
    sendEmail(formData)
    expect(mock).toHaveBeenCalledWith('/api/email', {
      body: '{"message":"{\\"first_name\\":\\"Sindi\\",\\"last_name\\":\\"Polanco\\",\\"email\\":\\"sindi@gmail.com\\",\\"business_trade\\":\\"Software\\",\\"company\\":\\"Agora\\",\\"country\\":\\"Dominican Republic\\"}","name":"Sindi","email":"sindi@gmail.com"}',
      method: 'POST'
    })

    render(<Form />)

    const inputFirstName = screen.getByLabelText('First Name')
    const inputLastName = screen.getByLabelText('Last Name')
    const inputEmail = screen.getByLabelText('Email')
    const inputBusinessTrade = screen.getByLabelText('Business/Trade')
    const inputCompany = screen.getByLabelText('Company')
    const inputCountry = screen.getByLabelText('Country')

    const submitButton = screen.getByRole('button', { name: 'Submit' })

    fireEvent.change(inputFirstName, { target: { value: formData.first_name } })
    fireEvent.change(inputLastName, { target: { value: formData.last_name } })
    fireEvent.change(inputEmail, { target: { value: formData.email } })
    fireEvent.change(inputBusinessTrade, {
      target: { value: formData.business_trade }
    })
    fireEvent.change(inputCompany, { target: { value: formData.company } })
    fireEvent.change(inputCountry, { target: { value: formData.country } })

    expect(inputFirstName).toHaveValue(formData.first_name)
    expect(inputLastName).toHaveValue(formData.last_name)
    expect(inputEmail).toHaveValue(formData.email)
    expect(inputBusinessTrade).toHaveValue(formData.business_trade)
    expect(inputCompany).toHaveValue(formData.company)
    expect(inputCountry).toHaveValue(formData.country)

    fireEvent.click(submitButton)
  })
})
