import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchGIFS={this.fetchGIFS} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    
    fetchGIFS = (query = "moron") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GoCu1Va1Sj9eyVrYZiO0BQ8rgSTSm3TQ&rating=g&limit=10`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url })) 
            })
        })
    }
    
    componentDidMount(){
        this.fetchGIFS()
    }
}

