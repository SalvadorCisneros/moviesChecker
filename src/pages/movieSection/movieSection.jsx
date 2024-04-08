import React, { useContext } from 'react';
import "./movieSection.css";
import Movies from '../../components/movies/movies'; 
import TitleFS from '../../components/titleForSection/titleFS';
import { SearchContext } from '../../components/alt/searchContext';

export default function MovieSection() {

    const { searchValue } = useContext(SearchContext);
    const moviesPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const moviesPopularURL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const moviesTopRatedURL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const moviesUpcomingURL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

    
  return (
    <div className='mainContainer'>
      {searchValue === '' ? (
        <div>
          
            <TitleFS title={"Now Playing"}/>
            <Movies url={moviesPlayingURL}/>
        
            <TitleFS title={"Top Rated Movies"}/>
            <Movies url={moviesTopRatedURL}/>

            <TitleFS title={"Upcoming Movies"}/>
            <Movies url={moviesUpcomingURL}/>

            <TitleFS title={"Popular Movies"}/>
            <Movies url={moviesPopularURL}/>

        </div>
    ) :
    (
      <div >
        <TitleFS title={searchValue}/>
        <Movies url={`https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`} />
      
      </div>
    )}

    </div>
    
  )
}
