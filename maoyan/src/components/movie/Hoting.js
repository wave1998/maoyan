import React from 'react';
import MovieList from "./MovieList";
import axios from 'axios'
export default class Hoting extends React.Component{
    constructor(){
        super();
        this.state={
            movieList:[],
        }
    }
    render() {
        return (
            <MovieList movieList={this.state.movieList}></MovieList>
        )
    }

    async componentDidMount() {
        const {data} = await axios.get("/ajax/movieOnInfoList")
        console.log(data.movieList)
        this.setState({
            movieList:data.movieList,
        })
    }
}