import React from 'react';

function AlbumInfo(props) {
    return (
        <div>
            <p>{props.album}</p>
            <img src={props.cover} alt={props.album} />
        </div>
    );
}


function BandInfo() {

    const band = {
        name: 'AC/DC',
        genre: 'Rock',
        members: ['Angus Young', 'Phil Rudd', 'Cliff Williams', 'Brian Johnson', 'Stevie Young'],
        albums: [
            ['Back in Black', 'Back in Black.jpg'],
            ['Highway to Hell', 'Highway to Hell.jpg'],
            ['The Razors Edge', 'The Razors Edge.jpg'],
            ['High Voltage', 'High Voltage.jpg'],
            ['Dirty Dids Done Dirt Cheap', 'Dirty Dids Done Dirt Cheap.jpg']
        ]
    };

    return (
        <div>
            <h1>{band.name}</h1>
            <p><strong>Genre: </strong>{band.genre}</p>
            <p><strong>Members: </strong>{band.members.join(', ')}</p>
            <h2>Top albums:</h2>

            {band.albums.map((album, index) => (
                <AlbumInfo key={index} album={album[0]} cover={album[1]}></AlbumInfo>
            ))}

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
