import { useState } from "react"

export const AddCategory = ({ onSentCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {    
    setInputValue( e.target.value );
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onSentCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form 
      onSubmit={ onSubmit }
    >
      <input 
        type="text" 
        placeholder="Buscar gifs"
        onChange={ onInputChange }
        value={ inputValue }
      />
    </form>
  )
}
