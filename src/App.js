import React from 'react';

function AlbumInfo(props) {
    return (
        <div>
            <p>{props.album}</p>
            <img src={props.cover} />
        </div>
    );
}


function BandInfo() {

    const band = {
        name: 'AC/DC',
        genre: 'Rock',
        members: ['Angus Young', 'Phil Rudd', 'Cliff Williams', 'Brian Johnson', 'Stevie Young'],
        albums: ['Back in Black', 'Highway to Hell', 'The Razors Edge', 'High Voltage', 'Dirty Dids Done Dirt Cheap'],
        covers: ['alb1.jpg', 'alb2.jpg', 'alb3.jpg', 'alb4.jpg', 'alb5.jpg']
    };

    return (
        <div>
            <h1>{band.name}</h1>
            <p><strong>Genre: </strong>{band.genre}</p>
            <p><strong>Members: </strong>{band.members.join(', ')}</p>
            <h2>Top albums:</h2>
            <AlbumInfo album={band.albums[0]} cover={band.covers[0]}></AlbumInfo>
            <AlbumInfo album={band.albums[1]} cover={band.covers[1]}></AlbumInfo>
            <AlbumInfo album={band.albums[2]} cover={band.covers[2]}></AlbumInfo>
            <AlbumInfo album={band.albums[3]} cover={band.covers[3]}></AlbumInfo>
            <AlbumInfo album={band.albums[4]} cover={band.covers[4]}></AlbumInfo>
        </div>
    );


}

function App() {
    return (
        <div>
            <BandInfo></BandInfo>
        </div>
    );
}

export default App;
