import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsData = async() => {

    const gifsData = await getGifs( category );
    setGifs( gifsData );
    setIsLoading( false );
    // console.log(isLoading);
  }

  useEffect( () => {
    getGifsData();
  }, [] );

  return {
    gifs,
    isLoading,
  }

}
