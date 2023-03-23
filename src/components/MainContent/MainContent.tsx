import React, {useState} from 'react'
import './MainContent.scss'
import NewsItem from './NewsItem/NewsItem';
import {useAppSelector } from '../../app/hooks'

const MainContent = () => {
  const newsView = useAppSelector(state => state.newsView.mode)
  const testData = [
    {title: "Poznańscy leśnicy odtwarzają mokradła",
     date: "22/03/2023",
     author: "ePoznań.pl",
    },
    
    {title: "Biedronka wypłaci pracownikom nagrody. Oto kwoty",
     date: "22/03/2023",
     author: "money.pl",
    },
    {title: "Poznańscy leśnicy odtwarzają mokradła",
     date: "22/03/2023",
     author: "ePoznań.pl",
    },
    
    {title: "Biedronka wypłaci pracownikom nagrody. Oto kwoty",
     date: "22/03/2023",
     author: "money.pl",
    },
    {title: "Poznańscy leśnicy odtwarzają mokradła",
     date: "22/03/2023",
     author: "ePoznań.pl",
    },
    
    {title: "Biedronka wypłaci pracownikom nagrody. Oto kwoty",
     date: "22/03/2023",
     author: "money.pl",
    },
    {title: "Poznańscy leśnicy odtwarzają mokradła",
     date: "22/03/2023",
     author: "ePoznań.pl",
    },
    
    {title: "Biedronka wypłaci pracownikom nagrody. Oto kwoty",
     date: "22/03/2023",
     author: "money.pl",
    },
    {title: "Poznańscy leśnicy odtwarzają mokradła",
     date: "22/03/2023",
     author: "ePoznań.pl",
    },
    
    {title: "Biedronka wypłaci pracownikom nagrody. Oto kwoty",
     date: "22/03/2023",
     author: "money.pl",
    },
  ]

  return (
    <div className="content">
      <div className={`news-container news-container${newsView === "list" ? '--list' : '--tile'}`}>
      {testData.map((news, i) => (
        <NewsItem key={i} title={news.title} date={news.date} author={news.author} viewMode={newsView}/>
      ))} 
      </div> 
    </div>
  )
}

export default MainContent