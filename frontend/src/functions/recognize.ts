import { FoodDataType } from "../components/Capturer";

export const recognize : (image: string) => Promise<FoodDataType> = async (image: string) => {
    const response = await fetch('https:/nakibabedin.pythonanywhere.com/recognize', {
        method: 'POST',
        body: JSON.stringify({
            image: image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}