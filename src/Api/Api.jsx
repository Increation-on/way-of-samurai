import * as axios from 'axios'


const axiosInstance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY": "4a51c3f7-0936-4481-8445-5ecf8bc64278"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{
            return response.data
        });
    }
}


