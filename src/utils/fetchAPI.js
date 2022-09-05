import axios from 'axios';

const BASE_URL = '';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'apihost',
    },
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
