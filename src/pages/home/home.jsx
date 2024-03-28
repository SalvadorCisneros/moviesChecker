import React, {useContext } from 'react'
import Movies from '../../components/movies/movies';
import './home.css';

import { SearchContext } from '../../components/alt/searchContext';

export default function Home() {
  const { searchValue } = useContext(SearchContext);

  const trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const movieUrl = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const seriesUrl = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';

  return (
    <div className='home_container'>
      {searchValue === '' ? (
        <div>
          {/* Renderiza estos datos si searchValue está vacío */}
          <h1 className='title_section'>Trending</h1>
          <Movies url={trendingUrl} />
          <h1 className='title_section'>Movies we recommend</h1>
          <Movies url={movieUrl} />
          <h1 className='title_section'>Series we recommend</h1>
          <Movies url={seriesUrl}  />
        </div>
      ) : (
        <div className='home_container'>
          <h1>Results from '{searchValue}'</h1>
          <Movies url={`https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`} />
        </div>
      )}
    </div>
  );
}
