import React, { useEffect, useState } from 'react';
import News from '../news/News';
import { Link, Navigate } from 'react-router-dom';

const LatestNews = () => {
    const [news, setNews] = useState([])

   

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
    }, [])
    return (
        <div className=''>
            <div className='divider text-3xl font-semibold'>All the Latest News about our product.</div>
            <div className=' '>
                {
                    news.map(N => <News key={N.id} latestNews={N}></News>).slice(0, 4)
                }
            </div>
            <button className='btn btn-primary ml-[45%]'> <Link to='/all-news'>See All News</Link> </button>
        </div>
    );
};

export default LatestNews;