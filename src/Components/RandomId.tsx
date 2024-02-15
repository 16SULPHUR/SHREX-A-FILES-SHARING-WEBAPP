import React, { useEffect, useState } from 'react'

const RandomId = () => {
    const [randomId, setRandomId] = useState('');

    useEffect(() => {
        // Define the URL of the API endpoint
        const apiUrl = 'http://localhost:3001/randomId'; 

        // Fetch the random ID from the API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.id)
                // Set the retrieved random ID in the state
                setRandomId(data.id);
            })
            .catch(error => {
                console.error('There was a problem fetching the random ID:', error);
            });
    }, []);
    return (
        <>
        {randomId}
        </>
    )
}

export default RandomId