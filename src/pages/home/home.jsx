import React, {useContext } from 'react'
import Movies from '../../components/movies/movies';
import './home.css';
import TitleFS from '../../components/titleForSection/titleFS';

import { SearchContext } from '../../components/alt/searchContext';

export default function Home() {
  const { searchValue } = useContext(SearchContext);

  const trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const movieUrl = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const seriesUrl = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';

  return (
    <div className='home_container'>
      {searchValue === '' ? (
        <div className='home_container'>
         
          <TitleFS title={"Trending"}/>
          <Movies url={trendingUrl} />
          <TitleFS title={"Movies we recommend"}/>
          <Movies url={movieUrl} />
          <TitleFS title={"Series we recommend"}/>
          <Movies url={seriesUrl}  />
        </div>
      ) : (
        <div >
          <TitleFS title={searchValue}/>
          <Movies url={`https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`} />
        
        </div>
      )}
    </div>
  );
}
