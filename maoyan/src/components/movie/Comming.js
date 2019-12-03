import React from 'react'
import MovieList from "./MovieList";
import axios from 'axios';
import ReactPullLoad,{STATS} from 'react-pullload';
import Swiper from './Swiper';

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
        const {data} = await axios.get("/ajax/comingList?ci=238&token=&limit=10")
        console.log(data.comming)
        this.setState({
            movieList:data.coming,
        })
    }
}