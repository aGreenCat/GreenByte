import {useState, useRef} from 'react';
import {Camera, CameraType} from 'react-camera-pro';
import {recognize} from "../functions/recognize.ts";
import {toBase64} from "../functions/toBase64.ts";

export type FoodDataType = {
	food_name: string,
	error: string | null,
	//define field types here
}

export type CaptureType = 'capture' | 'upload';

export type CapturerProps = {
	updateFoodData: (newFoodData: FoodDataType) => void,
	version: CaptureType,
}

const Capturer = (props : CapturerProps) => {
    const [photoUploadBuffer, setPhotoUploadBuffer] = useState<string | null>(null);
    const camera = useRef<CameraType | null>(null);

    const defaultErrorMessages = {
        noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
        permissionDenied: 'Permission denied. Please refresh and give camera permission.',
        switchCamera: 'It is not possible to switch camera to different one because there is only one video device accessible.',
        canvas: 'Canvas is not supported.'
    }

    const handleSubmitPhoto = async () => {
        if (photoUploadBuffer === null) {
            if (camera.current === null) {
                return;
            }

            const photo = camera.current.takePhoto();

            if (typeof photo === 'string') {
                recognizePhoto(photo);
            }
        } else {
            recognizePhoto(photoUploadBuffer);
        }
    }

    const recognizePhoto = async (buffer : string) => {
        if (buffer === null) {
            console.error('Error: No photo buffer');
            return;
        }

        recognize(buffer).then(response => {
            if (response.error) {
                console.error('Error: ' + response.error);
            } else {
				console.log(response);
                props.updateFoodData(response);
            }
        });
    }

    return (
        <>
            <Camera ref={camera} errorMessages={defaultErrorMessages} aspectRatio={1}/>
            <button
                onClick={handleSubmitPhoto}
            >Submit Photo</button>

            <input type="file" accept="image/*"
               onChange={async e=> {
                   if (!e.currentTarget.files) {
                       console.error('Error: No file selected');
                       return
                   }

                   const photo = e.currentTarget.files[0];
                   const photoBuffer = await toBase64(photo);

                   if (typeof photoBuffer !== 'string') {
                       console.error('Error: File could not be converted to buffer');
                       return;
                   }

                   setPhotoUploadBuffer(photoBuffer);
               }}
               onClick={e => {
                   e.currentTarget.value = "";
               }}
            />
        </>
    )

};

export default Capturer;