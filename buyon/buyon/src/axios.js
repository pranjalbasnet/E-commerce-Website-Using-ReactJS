import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-buyon-1a7fd.cloudfunctions.net/api' // cloud function for firebase
});

export default instance;