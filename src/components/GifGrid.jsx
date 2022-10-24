import PropTypes from 'react';
import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { Ring } from '@uiball/loaders';

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3> {category} </h3>

      {
        isLoading && (
          <Ring 
          size={40}
          lineWeight={5}
          speed={2} 
          color="black" 
          />
        )
      }

      <div className="card-grid">
        {
          gifs.map( gif => (
            <GifItem 
              key={ gif.id }
              { ...gif }
            />
           )
          )
        }
      </div>
    </>
  )
}