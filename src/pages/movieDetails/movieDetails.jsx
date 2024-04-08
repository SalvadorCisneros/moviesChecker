import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import './movieDetails.css';
import playButton from '../../img/play.png';
import Movies from '../../components/movies/movies';
import TitleFS from '../../components/titleForSection/titleFS';
import { SearchContext } from '../../components/alt/searchContext';

export default function MovieDetails() {
  const { searchValue } = useContext(SearchContext);
  const { media, id } = useParams();
  const [contentDetails, setContentDetails] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_AUT_TKN
        }
      };

      await fetch(`https://api.themoviedb.org/3/${media}/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response =>  setContentDetails(response));

    };

    fetchData();
  }, [media, id]);

  const ratingColor = (rate) => {
    if (rate <= 4) {
      return '#F04F1E';
    } else if (rate > 4 && rate <= 7.5) {
      return '#D8DF4D';
    } else {
      return '#5DCF41';
    }
  };

  return (
    <div>
      {searchValue === '' && contentDetails ? (
        <div className='contentDetails_container'>
          <div className='movie_header' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${contentDetails.poster_path})`}}>
      
          </div>

          <div className='middle_container'>
            <div className='title_container'>
               <h1>{contentDetails.title || contentDetails.name}</h1>
               <h1 style={{backgroundColor: ratingColor(contentDetails.vote_average)}} className='rate'>{contentDetails.vote_average.toFixed(1)}</h1>
            </div>
               
            <div className='genres_container'>
              {contentDetails.genres.map((item, index) => (
                <p className='genres' key={index}>{item.name}</p>
              ))}
            </div>

         

              <div className='overview_container'>
                <h2>Overview</h2>
                <p>{contentDetails.overview}</p>
              </div>

              <div className='video_container' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${contentDetails.backdrop_path}`}}>
             
                <img className='playButton' src={playButton} alt="" />
              </div>
            
          </div>


          
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
