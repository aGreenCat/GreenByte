import React, {useState, useRef} from 'react';
import {Camera} from 'react-camera-pro';
import {recognize} from "../functions/recognize.ts";

const Capturer: React.FC = () => {
    const camera = useRef(null);

    const defaultErrorMessages = {
        noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
        permissionDenied: 'Permission denied. Please refresh and give camera permission.',
        switchCamera: 'It is not possible to switch camera to different one because there is only one video device accessible.',
        canvas: 'Canvas is not supported.'
    }


    return (
        <>
            <h1>GreenBytes</h1>
            <Camera ref={camera} errorMessages={defaultErrorMessages} aspectRatio={1}/>
            <button
                onClick={() => {
                    const photo = camera.current.takePhoto();
                    recognize(photo).then((response) => {
                        console.log(response);
                    });
                }}
            >Submit Photo</button>
        </>
    )

};

export default Capturer;