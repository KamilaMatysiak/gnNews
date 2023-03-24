import React, {useEffect} from 'react'
import './MainContent.scss'
import NewsItem from './NewsItem/NewsItem';
import {useAppSelector, useAppDispatch } from '../../app/hooks'
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import { useParams } from 'react-router';
import { fetchNews, ArticleType } from '../../features/newsSlice';
import CircularProgress from '@mui/material/CircularProgress';

const MainContent = () => {
  const newsView = useAppSelector(state => state.newsView.mode)
  const { country } = useParams();
  const news = useAppSelector((state) => state.news)
  const noNews = news.news.articles.length > 0 ? false : true
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!country) dispatch(fetchNews("pl"))
    if(country) dispatch(fetchNews(country))  
  }, [country])

  return (
    <div className="content">
      <FeedbackModal/>
      <div className={`news-container news-container${newsView === "list" ? '--list' : '--tile'}`}>
        {news.news.isLoading 
        ? <CircularProgress className='news-container__info' />
        : <>
          {noNews 
          ? <div className='news-container__info'>No news found</div> 
          : <>
              {news.news.articles.map((article : ArticleType, i) => (
                <NewsItem key={i} title={article.title} author={article.author} date={article.publishedAt} urlToImage={article.urlToImage} viewMode={newsView}/>
              ))}
           </>}
         </>} 
      </div> 
    </div>
  )
}

export default MainContent