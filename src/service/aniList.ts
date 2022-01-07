type GraphqlVariable = {
  [key: string]: string | number
}

const url = 'https://graphql.anilist.co'

export default (query: string, variables: GraphqlVariable) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  }).then(response => response.json())
}
