import React from 'react';
import MovieList from "./MovieList";
import axios from 'axios'
export default class Comming extends React.Component{
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
        const coming = await axios.get("/ajax/comingList")
        console.log(coming)
        this.setState({
            movieList:coming.coming,
        })
    }
}