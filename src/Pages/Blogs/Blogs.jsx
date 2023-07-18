import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='my-4'>
            <h3 className='text-center font-semibold text-3xl'>Welcome Blog Sharing</h3>
            <div>
                {
                    blogs.map(b => <>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={b.img} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{b.title}</h2>
                                <p>{b.blog}</p>
                                
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Blogs;