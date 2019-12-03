import React from 'react'
import MovieList from "./MovieList";
import axios from 'axios';
import Swiper from './Swiper';
import store from '../../store'

export default class Comming extends React.Component{
    constructor(){
        super();
        this.state={
            movieList:[],
            ToUrl:"/moviedetail/"
        }
    }
    render() {
        return (
            <>
            <Swiper></Swiper>
            <MovieList movieList={this.state.movieList} ToUrl={this.state.ToUrl}></MovieList>
            </>
        )
    }


    async componentDidMount() {
        const {data} = await axios.get("/ajax/comingList"+{
            params:{
                ci:store.getState().cinema.presentCityId,
                limit:10
            }

        })
        console.log(store.getState().cinema.presentCityId)
        this.setState({
            movieList:data.coming,
        })
    }
}