import './ListRoomItem.scss';

import { observer } from 'mobx-react-lite';

//#2B5278
//#17212B

//store
import RoomStore from '../../app/store/RoomStore';

const ListRoomItem = ({room, id}: any) => {
    const color = room.room_id === RoomStore.activeRoom.room_id ? '#2B5278' : '#17212B';

    return(
        <div
        className='roomItem' 
        onClick={() => {
            if (RoomStore.activeRoom.room_id !== room.room_id) {
                RoomStore.setActiveRoom(room);
            }
        }}
        style={{backgroundColor: `${color}`}}
        >
            {room.roomname}
        </div>
    )
}

export default observer(ListRoomItem);