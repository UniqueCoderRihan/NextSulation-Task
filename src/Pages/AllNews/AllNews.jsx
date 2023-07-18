import React, { useState } from 'react';
import News from '../../Components/news/News';

const AllNews = () => {
    const [allNews,setAllNews] = useState([]);
    fetch('news.json')
    .then(res=>res.json())
    .then(data=>setAllNews(data))

    return (
        <div>
            {
                allNews.map(n=> <News key={n.id} latestNews={n}></News>)
            }
        </div>
    );
};

export default AllNews;