import React, { useState, useEffect, useRef} from 'react';
import './movies.css';
import { useNavigate } from 'react-router-dom';
import next from "../../img/next.png";
import back from "../../img/back.png";



export default function Movies({ url, mediaType }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const mainContainerRef = useRef(null); 
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const movieDetails = (item) => {
    navigate(`/${item.media_type || mediaType}/${item.id}`);
  }
   

  const checkScrollPosition = () => {
    if (!mainContainerRef.current) return;
    setIsAtStart(mainContainerRef.current.scrollLeft === 0);
    setIsAtEnd(mainContainerRef.current.scrollLeft >= (mainContainerRef.current.scrollWidth - mainContainerRef.current.offsetWidth));
  }

  useEffect(() => {
    const container = mainContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const scrollRight = () => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollLeft += 500;
    }
  }
  const scrollLeft = () => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollLeft += -500; 
    }
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
      .then(response => setData(response.results)) 
      .catch(err => console.error(err));
  }, [url]);



  return ( 
    <div className='main_container' ref={mainContainerRef}>
      {!isAtStart && <button className='left_button' onClick={scrollLeft}> <img src={back} alt="" />  </button>}
      
      <div className='movie_container'>
      {data && data.map((item, index) => (
        <div key={index} className='movie_cast'>
          {item.poster_path ? (
            <img className='movie' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} onClick={() => movieDetails(item)} alt={item.title || item.name}/>
          ) : (
            null
          )}
        </div>
))}
      </div>
      {!isAtEnd && <button className='right_button' onClick={scrollRight}> <img src={next} alt="" />  </button>}
    </div>
  );
}