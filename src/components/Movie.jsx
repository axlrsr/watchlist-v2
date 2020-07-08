import React, {Component} from 'react';
import NoImage from '../images/no-image.jpg'

class Movie extends Component {
    state = {
        movie: {},
        display: false,
        value: null
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=1ef4b890f7b7787d265cbb827f8af4ab`)
            .then((response) => response.json())
            .then((result) => {
                this.setState({movie: result})
            })
    }

    addMovie = () => {
        localStorage.setItem(this.state.movie.id, false);
        this.setState({value: false})
    }

    removeMovie = () => {
        localStorage.removeItem(this.state.movie.id);
        this.setState({value: null})
    }

    viewedMovie = () => {
        localStorage.setItem(this.state.movie.id, true);
        this.setState({value: true})
    }

    notViewedMovie = () => {
        localStorage.setItem(this.state.movie.id, false);
        this.setState({value: false})
    }

    displayBtn = () => {
        if (localStorage.getItem(this.state.movie.id) === null) {
            return <div className="btn__container">
                <button className="btn btn--primary" onClick={this.addMovie}>ADD</button>
                <button className="btn btn--primary" onClick={this.viewedMovie}>VIEWED</button>
            </div>
        }
        if (localStorage.getItem(this.state.movie.id) === 'false') {
            return <div className="btn__container">
                <button className="btn btn--secondary" onClick={this.removeMovie}>REMOVE</button>
                <button className="btn btn--primary" onClick={this.viewedMovie}>VIEWED</button>
            </div>
        }
        if (localStorage.getItem(this.state.movie.id) === 'true') {
            return <div className="btn__container">
                <button className="btn btn--secondary" onClick={this.removeMovie}>REMOVE</button>
                <button className="btn btn--secondary" onClick={this.notViewedMovie}>NOT VIEWED</button>
            </div>
        }
    } 

    toggleDisplay = () => {
        this.setState({display: !this.state.display});
    }

    displayDetails = () => {
        if(this.state.display) {
            return <div className="details">
                <div className="details__popup">
                    <div className="details__center">
                        <div className="details__close" onClick={this.toggleDisplay}></div>
                    </div>
                    <h3 className="details__title">{this.state.movie.title}</h3>
                    <p className="details__info">{this.state.movie.release_date}</p>
                    <p className="details__subtitle">Overview</p>
                    <p className="details__info">
                        {this.state.movie.genres.map((genre, index) => {
                            if(index !== this.state.movie.genres.length - 1) {
                                return <span key={genre.id}>{genre.name} • </span>
                            } else {
                                return <span key={genre.id}>{genre.name}</span>
                            }
                        })}
                    </p>
                    <p className="details__overview">{this.state.movie.overview}</p>
                    
                    {this.displayBtn()}
                </div>
            </div>
        }
    }

    displayPoster = () => {
        if(this.state.movie.poster_path) {
            return <img className="grid__img" src={`http://image.tmdb.org/t/p/w200${this.state.movie.poster_path}`} alt="" onClick={this.toggleDisplay} />
        } else {
            return <img className="grid__img" src={NoImage} alt="" onClick={this.toggleDisplay} />
        }
    }

    render() {
        return <div className="grid__poster">
            {this.displayPoster()}
            {this.displayDetails()}
        </div>
    }
}

export default Movie;