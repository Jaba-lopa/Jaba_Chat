import { observer } from 'mobx-react-lite';
import { Rooms } from '../../app/models/Rooms/Rooms';
import ListRoomItem from '../../entities/ListRoomItem/ListRoomItem';
import './ListRooms.scss';
import InfoAboutUser from '../../features/InfoAboutUser/InfoAboutUser';

//store
import RoomStore from '../../app/store/RoomStore';
import SearchGroup from '../../features/FunctionalBlock/searchGroups/SearchGroup';

const ListRooms = () => {
    const rooms: Rooms = [...RoomStore.allRooms];

    return(
        <div className="listRooms">
            <div className='search'>

                <div>
                    <SearchGroup />
                </div>

            </div>

            <div className='list'>
                {rooms.map((room) => 
                    <ListRoomItem key={room.room_id} room={room}/>
                )}
            </div>

            
            <div>
                <InfoAboutUser />
            </div>

        </div>
    )
}

export default observer(ListRooms);