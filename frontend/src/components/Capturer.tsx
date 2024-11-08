import {useState, useRef} from 'react';
import {Camera, CameraType} from 'react-camera-pro';
import {recognize} from "../functions/recognize.ts";
import {toBase64} from "../functions/toBase64.ts";

export type FoodDataType = {
	food_name: string,
	error: string | null,
    calories_lower: number,
    calories_upper: number,
    carbon_emissions: number,
    gallons_per_item_produced: number,
    grams_of_protein: number,
    grams_of_carbs: number,
    grams_of_fats: number,
    calories_from_protein: number,
    calories_from_carbs: number,
    calories_from_fats: number,
    healthy: boolean,
    environmentally_friendly: boolean
}

export type CapturerProps = {
	updateFoodData: (newFoodData: FoodDataType) => void
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
            alert('Error: No photo buffer');
            return;
        }

        recognize(buffer).then(response => {
            if (response.error) {
                alert('Error: ' + response.error);
            } else {
				console.log(response);
                props.updateFoodData(response);
            }
        });
    }

    return (
        <>
            <h1>GreenBytes</h1>
            <Camera ref={camera} errorMessages={defaultErrorMessages} aspectRatio={1}/>
            <button
                onClick={handleSubmitPhoto}
            >Submit Photo</button>

            <input type="file" accept="image/*"
               onChange={async e=> {
                   if (!e.currentTarget.files) {
                       alert('Error: No file selected');
                       return
                   }

                   const photo = e.currentTarget.files[0];
                   const photoBuffer = await toBase64(photo);

                   if (typeof photoBuffer !== 'string') {
                       alert('Error: File could not be converted to buffer');
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