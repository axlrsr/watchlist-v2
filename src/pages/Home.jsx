import React, {Component} from 'react';

import Movie from '../components/Movie';

class Home extends Component {
    state = {
        popular: [],
        theatres: [],
        upcoming: [],
        rated: []
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ef4b890f7b7787d265cbb827f8af4ab")
            .then((response) => response.json())
            .then((result) => {
                this.setState({popular: result.results})
            })
        
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1ef4b890f7b7787d265cbb827f8af4ab")
            .then((response) => response.json())
            .then((result) => {
                this.setState({theatres: result.results})
            })

        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=1ef4b890f7b7787d265cbb827f8af4ab")
            .then((response) => response.json())
            .then((result) => {
                this.setState({upcoming: result.results})
            })

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1ef4b890f7b7787d265cbb827f8af4ab")
            .then((response) => response.json())
            .then((result) => {
                this.setState({rated: result.results})
            })
    }

    render() {
        return <div className="content">
            <h2 className="content__title">Popular movies</h2>
            <div className="grid">
                {this.state.popular.slice(0, 6).map(movie => (<Movie key={movie.id} id={movie.id} />))}
            </div>

            <h2 className="content__title">In theatres</h2>
            <div className="grid">
                {this.state.theatres.slice(0, 6).map(movie => (<Movie key={movie.id} id={movie.id} />))}
            </div>

            <h2 className="content__title">Upcoming movies</h2>
            <div className="grid">
                {this.state.upcoming.slice(0, 6).map(movie => (<Movie key={movie.id} id={movie.id} />))}
            </div>

            <h2 className="content__title">Top rated</h2>
            <div className="grid">
                {this.state.rated.slice(0, 6).map(movie => (<Movie key={movie.id} id={movie.id} />))}
            </div>
        </div>
    }
}

export default Home;