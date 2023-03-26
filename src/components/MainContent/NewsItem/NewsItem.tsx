import React, { FC } from 'react'
import noimg from '../../../assets/img/no-img.png'
import { getTime, getDate } from '../../../utils/dateManager'
import './NewsItem.scss'

interface IProps {
  title: string,
  date: string,
  author: string,
  urlToImage: string,
  viewMode: string,
}

const NewsItem: FC<IProps> = ({ title, date, author, urlToImage, viewMode }: IProps) => {
  
  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return `${getDate(newDate)} ${getTime(newDate)}`
  }
  
  return (
    <div className={`news news${viewMode === "list" ? '--list' : '--tile'}`}>
      {viewMode === "tiles" && <img className='news__img' src={urlToImage ? urlToImage : noimg} alt='here will be img' />}
      <div className={`news-content news-content${viewMode === "list" ? '--list' : '--tile'}`}>
        <h1 className='news-content__title'>{title}</h1>
        <div className='news-content__details'>
          <p className='news-content__author'>{author}</p>
          <p className='news-content__date'>{formatDate(date)}</p>
        </div>
      </div>
      {viewMode === "tiles" && <p className='news__see-more'>Zobacz więcej</p>}
    </div>
  )
}

export default NewsItem