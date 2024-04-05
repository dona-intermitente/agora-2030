import { FormDataType } from '@/types/form'

export function sendEmail(data: FormDataType) {
  const apiEndpoint = '/api/email'

  const body = {
    message: JSON.stringify(data),
    name: data.first_name,
    email: data.email
  }

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message)
    })
    .catch((err) => {
      console.log(err)
    })
}
