import React, {useState} from 'react';
import axios from "axios";

export const BASE_URL = ""
export const METHOD = {
    GET: { num: 0, type: "get" },
    DELETE: { num: 1, type: "delete" },
    POST: { num: 2, type: "post" },
    PUT: { num: 3, type: "put" },
    POST_FILES: { num: 4, type: "post" },
    LOGIN: { num: 5, type: "get" }
};
export async function _promise(method, url, payload = {}, sendToken = false) {
    // var token = await AsyncStorage.getItem('token').then( (val) => {
        
    //     return val;
    // }).catch((error)=> {
        
    //     return '';
    // });
    let axiosConfig = { method: method.type, url: url };
    if (method.num <= 1) {
        axiosConfig = {...axiosConfig };
    } else if (method.num <= 3) {
        axiosConfig = {...axiosConfig, data: payload };
    } else if (method.num <= 4) {
        axiosConfig = {
            ...axiosConfig,
            headers: { "Content-Type": "multipart/form-data" },
            data: payload
        }
    }
    // if (sendToken) {
    //     axiosConfig = {
    //         ...axiosConfig,
    //         headers: {"Authorization": `Token ${token}`}
    //         }
    // }
    
    
    return new Promise((resolve, reject) => {
        axios(axiosConfig)
            .then(resp => {
                resolve(resp);
            })
            .catch(err => {
                reject(err);
            });
    });
}
