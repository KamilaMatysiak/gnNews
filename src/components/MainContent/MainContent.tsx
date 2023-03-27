import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import NewsItem from './NewsItem/NewsItem';
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import { fetchNews, ArticleType } from '../../features/newsSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next'

import { formatDate } from '../../utils/dateManager'
import './MainContent.scss'

const MainContent = () => {
  const newsView = useAppSelector(state => state.newsView.mode)
  const { country } = useParams();
  const news = useAppSelector((state) => state.news)
  const noNews = news.news.articles.length > 0 ? false : true
  const {t, i18n} = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!country) dispatch(fetchNews("pl"))
    if (country) dispatch(fetchNews(country))
  }, [country])



  return (
    <div className="content">
      <FeedbackModal />
      <div className={`news-container news-container${newsView === "list" ? '--list' : '--tile'}`}>
        {news.news.isLoading
          ? <CircularProgress className='news-container__info' />
          : <>
            {noNews
              ? <div className='news-container__info'>{t('noNews')}</div>
              : <>
                {news.news.articles.map((article: ArticleType, i) => (
                  <NewsItem 
                      key={i} 
                      title={article.title} 
                      author={article.author} 
                      date={formatDate(article.publishedAt)} 
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage} 
                      viewMode={newsView} />
                ))}
              </>}
          </>}
      </div>
    </div>
  )
}

export default MainContent