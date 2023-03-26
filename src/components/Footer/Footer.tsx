import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../app/hooks'
import { getTime } from '../../utils/dateManager'
import './Footer.scss'

const Footer = () => {
  const [time, setTime] = useState(new Date())
  const news = useAppSelector((state) => state.news)
  const {t, i18n} = useTranslation()

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000)
  
    return function cleanup() {
      clearInterval(timer);
    }
  })


  return (
    <div className='footer'>
      <p className='footer__time'>{getTime(time, true)}</p>
      <p className='footer__articles'>{t('articlesNumber')} <>{news.news.totalResults}</></p>
    </div>
  )
}

export default Footer