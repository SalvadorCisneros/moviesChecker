import React, {useContext} from 'react';
import "./seriesSection.css";
import { SearchContext } from '../../components/alt/searchContext';
import TitleFS from '../../components/titleForSection/titleFS';
import Movies from '../../components/movies/movies';


export default function SeriesSection() {
  const { searchValue } = useContext(SearchContext);
  
  const seriesOnAirURL = "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}";
  const seriesPopularURL = "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc";
  const seriesTopRatedURL = "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200";

  
return (
  <div className='mainContainer'>
    {searchValue === '' ? (
      <div>
        
          <TitleFS title={"On Air"}/>
          <Movies url={seriesOnAirURL}/>
      
          <TitleFS title={"Top Rated Series"}/>
          <Movies url={seriesTopRatedURL}/>

          <TitleFS title={"Popular Series"}/>
          <Movies url={seriesPopularURL}/>


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


