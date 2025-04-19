import React from "react";
import commT from './commT.mp40001-0025.webm'

export const Body = () => {
    return(
        <>
            <div className='text-3xl flex justify-center'>
                <video autoPlay loop playsInline src={commT} style={{backgroundColor: 'transparent'}} className="p-28 top-0"></video>
            </div>
        </>
    )
}