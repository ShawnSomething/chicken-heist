import React from "react";
import commT from './commT.mp40001-0025.webm'

export const Body = () => {
    return(
        <>
            <div className='fixed bottom-72 size-96 flex left-1/2 -translate-x-1/2'>
                <video autoPlay loop playsInline src={commT} style={{backgroundColor: 'transparent'}}></video>
            </div>
        </>
    )
}