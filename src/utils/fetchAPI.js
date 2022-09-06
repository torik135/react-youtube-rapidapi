import axios from 'axios';

const BASE_URL = 'youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
