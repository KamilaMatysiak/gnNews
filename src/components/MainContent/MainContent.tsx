import React, {useState} from 'react'
import './MainContent.scss'
import NewsItem from './NewsItem/NewsItem';

const MainContent = () => {
  const [isList, setIsList] = useState(true);
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
      <div className={`news-container news-container${isList ? '--list' : '--tile'}`}>
      {testData.map((news) => (
        <NewsItem title={news.title} date={news.date} author={news.author} isList={isList}/>
      ))} 
      </div> 
    </div>
  )
}

export default MainContent