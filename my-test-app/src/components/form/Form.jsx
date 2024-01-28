import { useState } from 'react'

export const Form = () => {
  const [showLastName, setShowLastName] = useState(true);
  const [nameValue, setNameValue] = useState('')

  return (
    <>
      <input 
        value={nameValue}
        placeholder='Введите имя' 
        type='text'
        data-testid='inputTest'
        onChange={(e) => setNameValue(e.target.value)}
        >
        </input>
      {
        showLastName && <input 
          placeholder='Введите отчество'
          data-testid="inputElement"
          type="text" />
      }
      <button 
        onClick={() => setShowLastName(!showLastName)}
        data-testid="btnElement">
        {
          showLastName ? "У меня нет отчества" : "Ввести отчество"
        }
      </button>
      <button>Отправить</button>
    </>
  )
}