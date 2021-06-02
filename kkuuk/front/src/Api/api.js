import {uri} from "./config.js";
import axios from 'axios';

export const signup = (data) => axios.post(`${uri}/`,{data}).then((res)=>res.data);