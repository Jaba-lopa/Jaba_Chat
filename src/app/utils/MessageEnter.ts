import { message } from "../models/Rooms/Messages";

// store
import RoomStore from "../store/RoomStore";
import UserStore from "../store/UserStore";

export function MessageEnter() {
    const msg: message = {
        message_id: RoomStore.activeRoom.messages.length+1,
        username: RoomStore.activeRoom.roomname,
        message: `Пользователь ${UserStore.user.username} вступил в группу`,
        type: 'broadcast',
        room_id: RoomStore.activeRoom.room_id
    }
    return msg;
}

export function BroadcastMessage(messageText: string, type: string) {
    const msg: message = {
        message_id: RoomStore.activeRoom.messages.length+1,
        username: RoomStore.activeRoom.roomname,
        message: messageText,
        type: type,
        room_id: RoomStore.activeRoom.room_id
    }
    return msg;
}

export function CreateMessage(messageText: string, type: string) {
    return {
        message_id: RoomStore.activeRoom.messages.length+1,
        username: UserStore.user.username,
        message: messageText,
        type: type,
        room_id: RoomStore.activeRoom.room_id
    }
}