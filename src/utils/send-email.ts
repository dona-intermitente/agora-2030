import { FormDataType } from '@/types/form'

export function sendEmail(data: FormDataType) {
  const apiEndpoint = '/api/email'

  const body = {
    message: JSON.stringify(data),
    name: data.first_name,
    email: data.email
  }

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(body)
  }).then((res) => res.json())
}
