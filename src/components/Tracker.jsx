import React from 'react'
import '../css/track.css'

export default function Tracker() {
    return (
        <div>
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
    )
}
