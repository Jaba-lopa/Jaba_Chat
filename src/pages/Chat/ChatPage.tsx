import { observer } from 'mobx-react-lite';
import { useEffect, useMemo } from 'react';
import RoomChat from '../../widgets/Chat/RoomChat';
import ListRooms from '../../widgets/ListRooms/ListRooms';
import './ChatPage.scss';

// sockets

const ChatPage = () => {
    return(
        <div className='ChatMessenger'>
            
            <ListRooms />

            <RoomChat />
        
        </div>
    )   
}

export default observer(ChatPage);