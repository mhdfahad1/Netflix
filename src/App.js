import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';
import Nav from './components/Nav';



function App() {
  return (
    <div >
      <Nav />
      {/* <Banner fetchUrl={requests.fetchNetflixOriginals} /> */}
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending In India' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
