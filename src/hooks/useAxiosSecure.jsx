import React from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "https://nestora-server-api.vercel.app",
});

const useAxiosSecured = () => {
    const { user } = useAuth();

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
        });


        return () => {
        axiosSecure.interceptors.request.eject(reqInterceptor);
        };
    }, [user]);

    return axiosSecure;
};

export default useAxiosSecured;