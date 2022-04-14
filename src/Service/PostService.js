import {AxiosService} from "./AxiosService";
import {urls} from "../Config";

export const PostService={
    getAllPos:()=>AxiosService.get(urls.posts),
    getByIdPos:(id)=>AxiosService.get(`${urls.posts}/${id}`),
    getByIdPosPost:(postId) => AxiosService.get(`${urls.posts}/${postId}/comments`)
}