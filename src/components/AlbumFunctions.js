import React, { Component } from 'react';

export default class AlbumFunctions extends Component {

    constructor() {
        super();
        this.artist = React.createRef();
        this.album_name = React.createRef();
    }


    submitAlbum(event) {
        event.preventDefault();

        let album = {
            artist: this.artist.current.value,
            album_name: this.album_name.current.value,
        }
        fetch("http://localhost:8080/api/v1/album", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(album),
        })
        .then(response => response.json()); 
        window.location.reload();
    }

    
    static deleteAlbum(albumid, url) {
        fetch(url + '/' + albumid , {
            method:'delete'
        })
        .then(response => response.json()); 
        window.location.reload();
    }
    

    render() {
        return(
            <div className="row">
                <form className="col s6" onSubmit = {this.submitAlbum.bind(this)}>
                    <div className="row" >
                        <div className="input-field col s6">
                            <input placeholder="Write artist name here" 
                            ref={this.artist}
                            type="text" 
                            className="validate" />
                            <label htmlFor="artist">Artist</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Write album name here" 
                            ref={this.album_name} 
                            type="text" 
                            className="validate" />
                            <label htmlFor ="album_name">Album Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>

            
        )
    }
}