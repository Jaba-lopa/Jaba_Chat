import { observer } from 'mobx-react-lite';
import { Room } from '../../app/models/Rooms/Rooms';

import ButtonUI from '../../shared/UI/Button/ButtonUI';
import { socket } from '../../widgets/Chat/RoomChat';

// store
import RoomStore from '../../app/store/RoomStore';
import UserStore from '../../app/store/UserStore';

import './InfoAboutUser.scss';

const InfoAboutUser = () => {
    const username = UserStore.user.username || '';

    return(
        <div className='InfoAboutUser'>

            <div className='username'>{username}</div>

            <ButtonUI onClick={() => {
                
            }}>
                Создать комнату
            </ButtonUI>

            <ButtonUI onClick={() =>{ 
                UserStore.logout()
                RoomStore.setActiveRoom({} as Room);
                socket.close();
            }}>Выйти</ButtonUI>
        </div>
    )
}

export default observer(InfoAboutUser);