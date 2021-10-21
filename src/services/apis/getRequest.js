export default async function getRequest(url) {

    const response = await fetch(url, {

        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
        },

    }


    );
    return response.json();
}