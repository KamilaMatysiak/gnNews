import React, {useState, useEffect} from 'react'
import './Footer.scss'

const Footer = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000)
  
    return function cleanup() {
      clearInterval(timer);
    }
  })
  
  const getTime = () => {
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    return `${hour}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  return (
    <div className='footer'>
      <p className='footer__time'>{getTime()}</p>
      <p className='footer__articles'>Liczba artykułów: </p>
    </div>
  )
}

export default Footer