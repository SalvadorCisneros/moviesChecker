import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './movieDetails.css';

export default function MovieDetails() {
  const { media, id } = useParams();
  const [contentDetails, setContentDetails] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_AUT_TKN
        }
      };

      const response1 = await fetch(`https://api.themoviedb.org/3/${media}/${id}?language=en-US`, options);
      const data1 = await response1.json();
      setContentDetails(data1);

      const response2 = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
      const data2 = await response2.json();
      setCredits(data2);
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
      {contentDetails && credits && (
        <div className='contentDetails_container'>
          <div className='movie_header' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${contentDetails.backdrop_path})`}}>
            <div className='overlay'>
              <h1>{contentDetails.title || contentDetails.name}</h1>
              <h1 style={{backgroundColor: ratingColor(contentDetails.vote_average)}} className='rate'>{contentDetails.vote_average.toFixed(1)}</h1>
            </div>
          </div>

          <div className='right_container'>
            <div className='genres_container'>
              {contentDetails.genres.map((item, index) => (
                <p className='genres' key={index}>{item.name}</p>
              ))}
            </div>

            <div className='bottom_container'>
              <div className='info_container'>
                <h2>Release Date</h2>
                <p>{contentDetails.release_date}</p>
                <h2>Cast</h2>
                {credits.cast.slice(0, 5).map((item, index) => (
                  <p key={index}>{item.name}</p>
                ))}
              </div>

              <div className='overview_container'>
                <h2>Overview</h2>
                <p>{contentDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
