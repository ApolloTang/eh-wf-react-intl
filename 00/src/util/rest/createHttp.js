import fetch from 'isomorphic-fetch'

const get = (url /* params = {} */) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  const init = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default',
  }

  return fetch(url, init).then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
}

const post = (url, payload /* opts */) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  const requestBody = JSON.stringify(payload)

  const init = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: requestBody,
  }

  return fetch(url, init).then(response => response.json())
}

const put = (url, payload /* opts */) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  const requestBody = JSON.stringify(payload)

  const init = {
    method: 'PUT',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: requestBody,
  }

  return fetch(url, init).then(response => response.json())
}

const del = url => {
  const headers = {
    'Content-Type': 'application/json',
  }

  const init = {
    method: 'DELETE',
    headers: headers,
    mode: 'cors',
    cache: 'default',
  }

  return fetch(url, init).then(response => response.json())
}

export default {get, post, put, del}
