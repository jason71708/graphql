
const AnimeList = ({ anime }: { anime: any }) => {
  console.log(anime)
  return (
    <div>
      <h1>{anime.title?.native}</h1>
      <h4>{anime.title?.english}</h4>
      <img src={anime.coverImage?.medium} />
      <p>{anime.description}</p>
      <span>{anime.episodes}</span><br />
      <span>{anime.seasonYear}</span>/
      <span>{anime.season}</span><br />
      <span>{anime.episodes}</span>
    </div>
  )
}

export default AnimeList