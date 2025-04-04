import axios, { AxiosInstance } from "axios";

const springAxiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 2500,
});

export default { springAxiosInstance };
