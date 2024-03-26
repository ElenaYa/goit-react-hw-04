import axios from 'axios';

const YOUR_ACCESS_KEY = "r87r3t-iUo5NWiya2eL-3TJUEWTJ88KSF04N24Zd4lg";

const fetchImages = async (searchQuery, page) => {
   
    axios.defaults.baseURL = "https://api.unsplash.com";

    const response = await axios.get("/search/photos", {
        params: {
            client_id: YOUR_ACCESS_KEY,
            query: searchQuery,
            page,
            per_page: 12,
            orientation: "landscape",
        },
    }
    );
    return response.data;
};
export default fetchImages;