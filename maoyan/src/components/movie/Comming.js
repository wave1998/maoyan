import React from 'react';
import MovieList from "./MovieList";
import axios from 'axios'
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
        const coming = await axios.get("/ajax/comingList")
        
        this.setState({
            movieList:coming.coming,
        })
    }
}