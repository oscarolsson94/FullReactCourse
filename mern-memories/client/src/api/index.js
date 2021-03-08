import axios from 'axios'; // to make API calls

const url = "http://localhost:5000/posts"; //url pointing to backend route

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);