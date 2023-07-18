import React from 'react';

const News = ({ latestNews }) => {
    const { title, article } = latestNews;
    return (
        <div className="card w-full bg-base-200 my-3 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{article.slice(0, 200)}....</p>
                <div className="card-actions justify-end">
                    <a href="#my_modal_8"><button  className="btn btn-primary">See More About News </button></a>
                </div>
            </div>
            <div className="modal" id="my_modal_8">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">More ABout {title}</h3>
                    <div className='divider'></div>
                    <p className="py-4">{article}</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Reading Done!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;