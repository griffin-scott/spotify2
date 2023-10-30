import { useState, useEffect } from "react";

function ArtistPage() {

    const [artists, setArtists] = useState([])

    const getData = async () => {
        const res = await fetch('http://localhost:8000/api/artists')
        const data = await res.json()
        setArtists(data)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="ArtistPage">
            <h1 className="display-3 text-center">Artist List</h1>
            {artists.map((artist) => (
                <div>
                    <h1>{artist.name}</h1>
                </div>
            ))}
        </div>
    );
}

export default ArtistPage;
