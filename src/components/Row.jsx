import React, { useEffect, useState } from 'react'
import './Row.css';
import tmbdAxiosInstance from '../instance'

export default function Row({ title, fetchUrl, isPoster }) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([])
    // console.log(fetchUrl);
    const fetchData = async () => {
        const { data } = await tmbdAxiosInstance.get(fetchUrl)
        // console.log(data.results);
        setMovies(data.results)
    }
    // console.log(movies);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="movie-row">
                {
                    movies?.map(item => (
                        <img width={"100px"} className={`${isPoster && 'movie_Large'} movie `}
                            src={`${base_url}/${isPoster ? item.poster_path : item?.backdrop_path}`} alt="no image" />
                        // console.log(item);
                    ))
                }
            </div>
        </div>
    )
}
