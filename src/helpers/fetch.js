const baseUrl = process.env.REACT_APP_API_URL

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`

	const options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}

	if (method === 'GET') {
		return fetch(url)
	} else {
		return fetch(url, options)
	}
}

export { fetchWithoutToken }
