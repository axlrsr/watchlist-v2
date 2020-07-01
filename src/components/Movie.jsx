import React, {Component} from 'react';
import NoImage from '../images/no-image.jpg'

class Movie extends Component {
    state = {
        movie: {}
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=1ef4b890f7b7787d265cbb827f8af4ab`)
            .then((response) => response.json())
            .then((result) => {
                this.setState({movie: result})
            })
    }

    displayPoster = () => {
        if(this.state.movie.poster_path) {
            return <img className="grid__poster" src={`http://image.tmdb.org/t/p/w200${this.state.movie.poster_path}`} alt=""/>
        } else {
            return <img className="grid__poster" src={NoImage} alt=""/>
        }
    }

    render() {
        return this.displayPoster()
    }
}

export default Movie;