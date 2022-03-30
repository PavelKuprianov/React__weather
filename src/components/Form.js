import React from 'react'
import "../App.css"

const Form = (props) => {
  return (
    <form onSubmit={props.weatherMethod}>
      <input className="input" type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  )
}

export default Form
