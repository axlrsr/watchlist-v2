import React, {Component} from 'react';

import Movie from '../components/Movie';

class List extends Component {
    state = {
        notViewed: [],
        viewed: []
    }

    componentDidMount() {
        const notViewed = []
        const viewed = []

        Object.keys(localStorage).map((key) => {
            if (localStorage[key] === 'false') {
                notViewed.push(key)
            } else if (localStorage[key] === 'true') {
                viewed.push(key)
            }
        })

        this.setState({notViewed})
        this.setState({viewed})
    }

    render() {
        return <div className="content">
            <h2 className="content__title">Not viewed</h2>
            <div className="grid">
                {this.state.notViewed.map(id => (<Movie key={id} id={id} />))}
            </div>

            <h2 className="content__title">Viewed</h2>
            <div className="grid">
                {this.state.viewed.map(id => (<Movie key={id} id={id} />))}
            </div>
        </div>
    }
}

export default List;