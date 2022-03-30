import React from 'react'

const Weather = (props) => {
  return (
    <div className="infoWeath">
      {props.city &&
        <div>
          <p>Страна: {props.country}</p>
          <p>Населённый пункт: {props.city}</p>
          <p>Температура: {props.temp}</p>
          <p>Атмосферное давление: {props.pressure}</p>
          <p>Заход солнца: {props.sunset}</p>
        </div>
      }
      <p>{props.error}</p>
    </div>
  )

}
export default Weather