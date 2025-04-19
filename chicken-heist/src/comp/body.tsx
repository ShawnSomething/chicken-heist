import React from "react";
import comm from './comm device.mp4'

export const Body = () => {
    return(
        <>
            <div className='text-3xl flex justify-center'>
                <video autoPlay loop src={comm} className="p-28 top-0"></video>
            </div>
        </>
    )
}