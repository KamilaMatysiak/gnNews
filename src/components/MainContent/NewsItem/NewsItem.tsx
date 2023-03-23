import React, { FC } from 'react'
import noimg from '../../../assets/img/no-img.png'
import './NewsItem.scss'

interface IProps {
  title: string,
  date: string,
  author: string,
  isList: boolean,
}

const NewsItem: FC<IProps> = ({title, date, author, isList}: IProps) => {
  return (
    <div className={`news news${isList ? '--list' : '--tile'}`}>
      {!isList && <img className='news__img' src={noimg} alt='here will be img' />}
      <div className={`news-content news-content${isList ? '--list' : '--tile'}`}>
        <h1 className='news-content__title'>{title}</h1>
        <div className='news-content__details'>
          <p className='news-content__author'>{author}</p>
          <p className='news-content__date'>{date}</p>
        </div>
      </div>
      {!isList && <p className='news__see-more'>Zobacz więcej</p>}
    </div>
  )
}

export default NewsItem