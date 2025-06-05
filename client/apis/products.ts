import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getProducts() {
  const response = await request.get(`${rootURL}/products`)
  return response.body
}

export async function getUsers() {
  const response = await request.get(`${rootURL}/users`)
  return response.body
}

export async function getReviews() {
  const response = await request.get(`${rootURL}/reviews`)
  return response.body
}
