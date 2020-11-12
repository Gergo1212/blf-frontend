import React from "react";
import clip from "../static/BLFWebsiteBackgroundVideo.mp4"

function Main() {

    return (
        <div className={"renderDiv"}>
            <div className={"mainText videoShadow"}>
                <video className='videoTag' autoPlay loop muted>
                    <source src={clip} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Main;