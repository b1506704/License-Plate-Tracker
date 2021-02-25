import axios from 'axios';
//url depends on python flask app host server.
const url = 'http://127.0.0.1:5000/prediction/';

//api for fetching asynch prediction endpoints from backend
export const fetchLp = () => axios.post(url);
//api for uploading images to server
export const uploadLp = (newLp) => axios.post(url, newLp);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
