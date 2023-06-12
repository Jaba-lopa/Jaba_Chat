import { IUsers } from "../IUser";
import { messages } from "./Messages";

export interface Room {
    room_id: number;
    roomname: string;
    messages: messages;
    users: string[];
}

export interface Rooms extends Array<Room>{};