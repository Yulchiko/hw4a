import {AxiosService} from "./AxiosService";
import {urls} from "../Config";

export const UserService={
    getAllUser:()=>AxiosService.get(urls.users),
    getByIdUser:(id)=>AxiosService.get(`${urls.users}/${id}`),
    getByIdUserPost:(userId) => AxiosService.get(`${urls.users}/${userId}/posts`)
}