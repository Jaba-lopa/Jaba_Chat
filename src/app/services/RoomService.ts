import axios from "axios";
import { API_URL_ROOM } from "../http/api";
import { message } from "../models/Rooms/Messages";

// store

import RoomStore from "../store/RoomStore";
import UserStore from "../store/UserStore";

export default class RoomService {
    static async getRooms () {
        const rooms = await axios.get(`${API_URL_ROOM}/getRooms`);
        return rooms.data;
    }

    static async getRoom(room_id: number) {
        const room = await axios.post(`${API_URL_ROOM}/getRoom`, {
            room_id: room_id
        })
        return room;
    }

    static async enterInRoom(password: string) {
        const response = await axios.post(`${API_URL_ROOM}/enterInRoom`, {
            username: UserStore.user.username,
            roompassword: password,
            roomname: RoomStore.activeRoom.roomname
        });
        return response;
    }

    static async sendMessage(msg: message) {
        const response = await axios.post(`${API_URL_ROOM}/sendMessage`, {...msg});
        return response;
    }
}