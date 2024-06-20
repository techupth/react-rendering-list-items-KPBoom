import "./App.css";
import movies from "./data/movies.jsx"

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <div className="main-page">
          <h1>Movie List Section</h1>
          {
            movies.map((movie,index)=>{
              return  (
              <div className="movie-card" key={index}>
                <img src={movie.image} alt="image" className="movie-image" />
                <div className="movie-detail">
                   <p>Title: {movie.title}</p>
                   <p>Year: {movie.year}</p>
                   <p>Runtime: {movie.runtime}</p>
                   <p>Genres:<span className="hi-light"> {movie.genres} </span></p>
                   <p>IMDB Ratings: {movie.imdbRating}</p>
                   <p>IMDB Votes: {movie.imdbVotes}</p>
                </div>
              </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
}

export default App;
