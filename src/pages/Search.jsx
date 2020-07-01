import React, {Component} from 'react';

import Movie from '../components/Movie';

class Search extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ef4b890f7b7787d265cbb827f8af4ab")
            .then((response) => response.json())
            .then((result) => {
                this.setState({movies: result.results})
            })
    }

    searchMovie = (event) => {
        const val = event.currentTarget.value;

        if(val) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ef4b890f7b7787d265cbb827f8af4ab&query=${val}`)
                .then((response) => response.json())
                .then((result) => {
                    this.setState({movies: result.results})
                })
        } else {
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ef4b890f7b7787d265cbb827f8af4ab")
                .then((response) => response.json())
                .then((result) => {
                    this.setState({movies: result.results})
                })
        }
    }

    render() {
        return <div className="content">
            <form className="search" onSubmit={(event) => event.preventDefault()}>
                <input className="search__bar" type="text" placeholder="Search" value={this.state.search} onChange={this.searchMovie} />
            </form>

            <div className="grid">
                {this.state.movies.map(movie => (<Movie key={movie.id} id={movie.id} />))}
            </div>
        </div>
    }
}

export default Search;