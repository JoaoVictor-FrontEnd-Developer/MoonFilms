import FilmsCarrosel from '../components/FilmsCarrosel';
import HomeBanner from '../components/HomeBanner';
import './Home.css'

function Home() {

   

    return (
        <>
            <HomeBanner/>
            <FilmsCarrosel title="Melhores Filmes" category="top_rated" /> 
            <FilmsCarrosel title="Em Breve" category="upcoming" /> 
        </>
  )
}

export default Home