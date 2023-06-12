import { observer } from 'mobx-react-lite';
import Chating from "../../features/Group/Chating/Chating";
import InputForMessage from "../../features/Group/InputForMessage/InputForMessage";
import ButtonUI from '../../shared/UI/Button/ButtonUI';
import './RoomChat.scss';
import { useState } from "react";

//socket
import { Manager } from 'socket.io-client';

export const manager = new Manager('http://localhost:8080');
export const socket = manager.socket('/');

// store
import RoomStore from '../../app/store/RoomStore';
import UserStore from '../../app/store/UserStore';

const RoomChat = () => {
    const [password, setPassword] = useState('');

    if (!RoomStore.activeRoom.users) {
        RoomStore.setActiveRoom(RoomStore.allRooms[0]);
        return(
            <div></div>
        )
    }

    const activeRoom = {...RoomStore.activeRoom};

    const isUserInRoom = RoomStore.isUserInRoom();

    if (!isUserInRoom) {
        return (
            <div className='roomChat'>
                <div className="roomChatLock">
                    Вы не участник группы
                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        RoomStore.enterInRoom(password);
                        socket.emit('subscribe', {user: UserStore.user, room_id: RoomStore.activeRoom.room_id, roomname: RoomStore.activeRoom.roomname});
                    }}>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Введите пароль...'/>
                        <ButtonUI>Вступить в группу</ButtonUI>
                    </form>
                </div>
            </div>
        )
    }

    const countUsers = RoomStore.activeRoom.users.length;

    return(
        <div className="roomChat"> 
            <div className="Group">

                <div className="roomName">
                    {activeRoom.roomname}

                    <div className="usersCount">
                        {countUsers} участников
                    </div>
                </div>
                
                <Chating socket={socket}/>

                <InputForMessage socket={socket}/>

            </div>
        </div>
    )

    
}

export default observer(RoomChat);