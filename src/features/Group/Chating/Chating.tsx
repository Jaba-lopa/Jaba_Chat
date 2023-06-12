import { observer } from 'mobx-react-lite';
import MessageItem from '../../../entities/MessageItem/MessageItem';
import { useEffect, useRef } from 'react';
import { message } from '../../../app/models/Rooms/Messages';

// style
import './Chating.scss';

// store
import RoomStore from '../../../app/store/RoomStore';
import currentStore from '../../../app/store/currentStore';
import UserStore from '../../../app/store/UserStore';
import { BroadcastMessage, CreateMessage, MessageEnter } from '../../../app/utils/MessageEnter';

const Chating = ({socket}: any) => {
    const Room = RoomStore.activeRoom;

    useEffect(() => {
        socket.emit('join', {user: UserStore.user, room_id: RoomStore.activeRoom.room_id, roomname: RoomStore.activeRoom.roomname});

        socket.on('message', (message: message) => {
            if (!message.message_id) {
                message.message_id = RoomStore.activeRoom.messages.length+1;
            }
            RoomStore.saveMessage(message);
            if (message.type === "join") {
                RoomStore.activeRoom.users.push(message.message.split(' ')[1]);
            }
        })

        socket.on('subscribe', (message: message) => {
            RoomStore.sendMessage(message);
        })

    }, []);

    const messages = Room.messages;

    const ref = useRef<HTMLDivElement>(null);
    if (ref) currentStore.setCurrent(ref.current)
    const lastMessage: message = messages[messages.length-1];

    useEffect(() => {
        if (ref.current && lastMessage && lastMessage.username === UserStore.user.username) ref.current.scrollIntoView({block: "end"});
    }, [lastMessage])

    return(
        <div className='Chating'>
            <div className='messagesWrapper' ref={ref} onClick={() => {
                
            }}>

                {messages.map((message) => 
                    <MessageItem message={message} key={message.message_id}/>
                )}

            </div>
        </div>
    )
}

export default observer(Chating);