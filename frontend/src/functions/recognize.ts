export const recognize = async (image: string) => {
    const response = await fetch('http://localhost:5000/recognize', {
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