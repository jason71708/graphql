import React from 'react'
import AnimeList from './AnimeList'
import aniApi from './service/aniList'
import querySamples from './queryTutorials'

const variables = {
    page: 5,
    perPage: 10,
    seasonYear: 2021
};

function App() {
  const [animes, setAnimes] = React.useState<any[]>([])
  const query = querySamples.aliaseQuery // Change this parameter to experience various situations

  // React.useEffect(() => {
  //   aniApi(query, variables)
  //   .then(({ data }) => {
  //     console.log(data)
  //     setAnimes(data.Page.media)
  //   })
  // }, [])

  return (
    <div>
      {animes.map(anime => (
        <AnimeList key={anime.id} anime={anime} />
      ))}
    </div>
  )
}

export default App
