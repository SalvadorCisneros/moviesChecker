import React, { useState, useEffect} from 'react';
import './movies.css';
import { useNavigate } from 'react-router-dom';



export default function Movies({ url }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const movieDetails = (media,id) => {
    navigate(`/${media}/${id}`);
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_AUT_TKN
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(response => setData(response.results)) // Asumiendo que los datos que quieres están en "results"
      .catch(err => console.error(err));
  }, [url]);  // Agrega url como dependencia



  return ( 
    <div className='main_container'>
      <div className='movie_container'>
      {data && data.map((item, index) => (
        <div key={index} className='movie_cast'>
          {item.poster_path ? (
            
            <img className='movie' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} onClick={() => movieDetails(item.media_type,item.id)} alt={item.title || item.name}/>
          ) : (
            null
          )}
        </div>
      ))}

      </div>
    </div>
  );
}
