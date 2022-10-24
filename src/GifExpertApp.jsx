import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Pokemon', 'Ghost of Tsushima' ]);

  const onAddCategory = ( valueIncoming ) => {

    if ( categories.includes(valueIncoming) ) return;
    setCategories( [valueIncoming, ...categories] );
    
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onSentCategory={ (valueIncoming) => onAddCategory(valueIncoming) }  />

      { 
        categories.map( category =>
          (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          )
        ) 
      }
    </>
  )
}
