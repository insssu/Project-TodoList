import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true   // true로 잡아줘야 session을 쓸 수 있음
})