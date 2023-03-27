import { Dialog } from '@mui/material'
import React, { FC, useState } from 'react'
import noimg from '../../../assets/img/no-img.png'
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../../app/hooks';
import { useTranslation } from 'react-i18next'
import './NewsItem.scss'

interface IProps {
  title: string,
  date: string,
  author: string,
  description: string,
  url: string,
  urlToImage: string,
  viewMode: string,
}

const NewsItem: FC<IProps> = ({ title, date, author, urlToImage, url, description, viewMode }: IProps) => {
  const [open, setOpen] = useState(false)
  const lightMode = useAppSelector((state) => state.lightMode.mode)
  const {t, i18n} = useTranslation()
  
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
      {urlToImage && <img className='modal-img' src={urlToImage}/>}
        <div className={`news-modal ${lightMode === 'dark' && 'news-modal--dark'}`}>
          <div className='news-modal__header'>
            <h1 className='news-modal__title'>{title}</h1>
            <CloseIcon className='news-modal__icon' onClick={() => setOpen(false)}/>
          </div>
          <p className='news-modal__details'>{author} • {date}</p>
          <p className='news-modal__description'>{description}</p>
          <a className='news-modal__url' href={url} target='_blank'>{url}</a>
        </div>
      </Dialog>
      <div className={`news news${viewMode === "list" ? '--list' : '--tile'}`} onClick={() => setOpen(true)}>
        {viewMode === "tiles" && <img className='news__img' src={urlToImage ? urlToImage : noimg} alt='here will be img' />}
        <div className={`news-content news-content${viewMode === "list" ? '--list' : '--tile'}`}>
          <h1 className='news-content__title'>{title}</h1>
          <div className='news-content__details'>
            <p className='news-content__author'>{author}</p>
            <p className='news-content__date'>{date}</p>
          </div>
        </div>
        {viewMode === "tiles" && <p className='news__see-more'>{t('seeMore')}</p>}
      </div>
    </>
  )
}

export default NewsItem