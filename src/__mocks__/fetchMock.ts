export const formData = {
  first_name: 'Sindi',
  last_name: 'Polanco',
  email: 'sindi@gmail.com',
  business_trade: 'Software',
  company: 'Agora',
  country: 'Dominican Republic'
}

export const fetchSendEmailData = {
  message: JSON.stringify(formData),
  name: formData.first_name,
  email: formData.email
}
