import React from 'react'
import MovieList from "./MovieList";
import axios from 'axios';

import Swiper from './Swiper';

export default class Comming extends React.Component{
    constructor(){
        super();
        this.state={
            movieList:[],
        }
    }
    render() {
        return (
            <>
            <Swiper></Swiper>
            <MovieList movieList={this.state.movieList}></MovieList>
            </>
        )
    }


    async componentDidMount() {
        const {data} = await axios.get("/ajax/comingList?ci=238&token=&limit=10s")
        console.log(data.comming)
        this.setState({
            movieList:data.coming,
        })
    }
}