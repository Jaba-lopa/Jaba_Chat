import { observable } from "mobx";
import { message, messages } from "../models/Rooms/Messages";
import { Room, Rooms } from "../models/Rooms/Rooms";
import RoomService from "../services/RoomService";
import { MessageEnter } from "../utils/MessageEnter";

// store
import UserStore from "./UserStore";

const RoomStore = observable({
    allRooms: [...await RoomService.getRooms()] as Rooms,
    activeRoom: {} as Room,
    setAllRooms(rooms: Rooms) {
        this.allRooms = rooms;
    },

    async getRoom(room_id: number) {
        try{
            const room = await RoomService.getRoom(room_id);
            return room;
        } catch(err) {
            console.log(err);
        }
    },

    async setActiveRoom(room: Room) {
        const messages = await this.getRoom(room.room_id) || {
            data: {
                messages: []
            }
        };
        this.activeRoom = {...room, messages: [...messages.data.messages]};
    },

    isUserInRoom(): boolean {
        if (this.activeRoom.users.includes(UserStore.user.username)) return true;
        return false;
    },

    async enterInRoom(password: string) {
        try{
            const response = await RoomService.enterInRoom(password);
            this.activeRoom.users.push(UserStore.user.username);
        } catch(err) {
            console.log(err);
        }
    },

    async sendMessage(message: message) {
        const msg = await RoomService.sendMessage(message);
        this.saveMessage(message);
    },
    
    saveMessage(message: message) {
        if (this.activeRoom.messages.find((msg) => msg.message_id == message.message_id) || message.room_id !== this.activeRoom.room_id) {
            return null;    
        }
        
        this.activeRoom.messages.push(message)
    }
}) 

export default RoomStore;