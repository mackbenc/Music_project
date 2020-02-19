import React from 'react';
import AlbumFunctions from './AlbumFunctions';
import Board from './Board';
import Card from './Card';
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";


const SingleAlbum = ({item}) => (
  <Board id = {item.id} className="board">
    <Card className="card" draggable="true" >
      <MDBCard
              className="card-image"
              style={{
                
                backgroundImage:
                  "url('https://offmedia.hu/assets/images/origin-2019-08-18-17-54-18.jpg')"
              }}
            >        
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
              <MDBCardTitle tag="h1" className="pt-2">
                  <strong>{item.artist} - {item.album_name}
                  </strong>
              </MDBCardTitle>
              </div>
            </div>
        <MDBBtn color="pink">
            <MDBIcon icon="clone left" onClick={() => AlbumFunctions.deleteAlbum(item.id, 'http://localhost:8080/api/v1/album')}>Delete</MDBIcon>
        </MDBBtn>
      </MDBCard>
    </Card>
  </Board>
)

export default SingleAlbum;