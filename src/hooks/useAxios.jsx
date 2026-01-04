import React from 'react';
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})
// https://nestora-server-api.vercel.app

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;