import axios from 'axios';

const KEY = '43515008-427980a3c9150ded173cc4f94';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal'
const SAFESEARCH = 'true';

export default async function  getImages(query, amount, page){
    const QUERY = query.trim();
    const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&per_page=${amount}&page=${page}`;
        
    try {
        const response = await axios.get(LINK);
        if (response.status !== 200 ) {
            throw new Error(response.status);
        }
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching images: ${error.message}`);
    }

}