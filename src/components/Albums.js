import React, { Component } from "react";
import SingleAlbum from './SingleAlbum';
import AlbumFunctions from './AlbumFunctions';



export default class Albums extends Component{

    constructor(props) {
        super(props);
        this.state = {
            album: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/album')
        .then(response => response.json())
        .then(data => this.setState({album: data}))
    }


    render() {
        return (
            <div>
                <div className="row">
                    <AlbumFunctions />
                </div>
                <main className="flexbox">
                    { this.state.album.map((item) => (
                        <SingleAlbum key={item.id} item={item} />
                    ))}
                </main>
            </div>
        )
    }
}