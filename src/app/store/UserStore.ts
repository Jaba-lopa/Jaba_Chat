import axios from "axios";
import { observable } from "mobx";
import { API_URL_USER } from "../http/api";
import { IUser } from "../models/IUser";
import { AuthResponse } from "../models/response/AuthResponse";
import AuthService from "../services/AuthService";

const UserStore = observable({
    user: {} as IUser,
    setUser(user: IUser) {
        this.user = user;
    },
    
    isLoading: false,
    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    },

    isAuth: false,
    setIsAuth(bool: boolean) {
        this.isAuth = bool;
    },

    async checkAuth(){
        this.setIsLoading(true);
        try{    
            const response = await axios.get<AuthResponse>(`${API_URL_USER}/refresh`, { withCredentials: true });
            localStorage.setItem('tokenJabaChat', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch(err) {
            console.log(err);
        }
        this.setIsLoading(false);
    },

    async registration(username: string, password: string) {
        try{   
            const response = await AuthService.registration(username, password);
            localStorage.setItem('tokenJabaChat', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch(err) {
            console.log(err);
        }
    },
    async login(username: string, password: string) {
        try{
            const response = await AuthService.login(username, password);
            localStorage.setItem('tokenJabaChat', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch(err) {
            console.log(err);
        }
    },
    async logout() {
        const response = await AuthService.logout();
        localStorage.removeItem('tokenJabaChat');
        this.setIsAuth(false);
        this.setUser({} as IUser);
    },
})

export default UserStore;