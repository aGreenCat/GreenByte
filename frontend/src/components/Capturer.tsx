import {useState, useRef} from 'react';
import {Camera, CameraType} from 'react-camera-pro';
import {recognize} from "../functions/recognize.ts";
import {toBase64} from "../functions/toBase64.ts";

export type FoodDataType = {
	food_name: string,
	photo: string,
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

export type CaptureType = 'capture' | 'upload';

export type CapturerProps = {
	updateFoodData: (newFoodData: FoodDataType) => void,
	version: CaptureType,
}

const Capturer = (props : CapturerProps) => {
    const [photoUploadBuffer, setPhotoUploadBuffer] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

    const camera = useRef<CameraType | null>(null);

    const defaultErrorMessages = {
        noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
        permissionDenied: 'Permission denied. Please refresh and give camera permission.',
        switchCamera: 'It is not possible to switch camera to different one because there is only one video device accessible.',
        canvas: 'Canvas is not supported.'
    }

    const handleTakePhoto = async () => {
		if (camera.current === null) {
			console.error('Error: No camera');
			return;
		}

		const photo = camera.current.takePhoto();

		if (photo === null) {
            console.error('Error: No photo buffer');
            return;
        }

		if (typeof photo === 'string') {
			setLoading(true);
			setPhotoUploadBuffer(photo);
			let response = await recognize(photo);
			
			if (response.error) {
				console.error('Error: ' + response.error);
			} else {
				console.log(response);
				response.photo = photo;
				props.updateFoodData(response);
			}

			setLoading(true);
		}
    }

    const handleUploadPhoto = async () => {
		if (photoUploadBuffer === null) {
			console.error('Error: No photo buffer');
			return;
		}

		setLoading(true);
        let response = await recognize(photoUploadBuffer)
		
		if (response.error) {
			console.error('Error: ' + response.error);
		} else {
			console.log(response);
			response.photo = photoUploadBuffer;
			props.updateFoodData(response);
			setLoading(false);
		}
    }

    return (
        <>
			{props.version === 'capture'
				? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>

					<div style={{maxWidth: '600px', width: '100%'}} >
						{loading
							? (photoUploadBuffer && <img src={photoUploadBuffer} alt="Captured" style={{width: '100%', height: 'auto', borderRadius: '10px'}} />)
							: <Camera ref={camera} errorMessages={defaultErrorMessages} aspectRatio={4/3}/>
						}
					</div>
					<button onClick={handleTakePhoto}>{loading ? "Loading..." : "Take Photo"}</button>
				</div>
				: <div>
					<h2>Upload Image</h2>

					<input className="p-6 my-6 border" type="file" accept="image/*"
						onChange={async (event) => {
							if (event.target.files === null) {
								return;
							}

							const file = event.target.files[0];
							const base64 = await toBase64(file);

							if (typeof base64 === 'string') {
								setPhotoUploadBuffer(base64);
							} else {
								console.error('Error: Bad image file');
							}
						}}
					/>
					<br />

					{photoUploadBuffer &&
						<button onClick={handleUploadPhoto}>Upload Photo</button>
					}
				</div>
			}
        </>
    )

};

export default Capturer;