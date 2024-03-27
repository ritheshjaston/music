import React, { useEffect, useState } from 'react';
import '../css/track.css'
export default function Musics() {
    const [searchitem, setSearhitem] = useState('');
    const [searchQuery, setSearchQuery] = useState('happy');
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://v1.nocodeapi.com/ritheshjaston/spotify/NmGfVMbAVNuXjQOE/search?q=${searchQuery}&type=track`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.tracks.items);
                    console.log(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [searchQuery]);

    console.log(searchResults); // Log searchResults to check its initial value and type

    const handleclicksearch = () => {
        setSearchQuery(searchitem);
    }
    return (
        <div>
            {/* search bar */}
            <div className="searchbar">
                <div className='searchitem'>
                    <input type="text" className='searchinput' onChange={(e) => setSearhitem(e.target.value)} value={searchitem} />
                    <button onClick={handleclicksearch} className='searchbtn'>Search</button>
                </div>

            </div>
            {/* list music data */}
            <div className="listmusic">
                {searchResults && searchResults.map((track) => (
                    <div key={track.id}>
                        <h3>{track.name}</h3>
                        {/* You can display other track information here */}
                    </div>
                ))}
            </div>
            {/* tracker */}
            <div className="tracker">
                <br />
                <div className="controls">
                    <tr>
                        <td>
                            0:00
                        </td>
                        <td>
                            <div className='seektrack'></div>
                        </td>
                        <td>
                            10:00
                        </td>
                    </tr>
                </div>
                <div className="controls">
                    <tr>
                        <td>
                            <i className="gg-play-track-prev-o" ></i>
                        </td>
                        <td>
                            <i className="gg-play-button-o"></i>
                            {/* <i className="gg-play-stop-o"></i> */}
                        </td>
                        <td>
                            <i className="gg-play-track-next-o"></i>
                        </td>


                    </tr>
                </div>
            </div>
        </div>
    );
}
