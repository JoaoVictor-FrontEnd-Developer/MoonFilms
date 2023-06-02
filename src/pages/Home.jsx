import FilmsCarrosel from '../components/FilmsCarrosel';

import './Home.css'


function Home() {

    

    return (
        <>
            <FilmsCarrosel title="Melhores Filmes" category="top_rated" /> 
            <FilmsCarrosel title="Em Breve" category="upcoming" /> 
        </>
  )
}

export default Home