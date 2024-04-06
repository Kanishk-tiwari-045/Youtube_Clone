import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '5389ccde0bmshe2d75f6589a7b8cp14764bjsn2f728f9e89d7',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};