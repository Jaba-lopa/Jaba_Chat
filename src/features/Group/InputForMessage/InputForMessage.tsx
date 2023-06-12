import { memo, useState } from 'react';
import { CreateMessage } from '../../../app/utils/MessageEnter';
import './InputForMessage.scss';

// store
import RoomStore from '../../../app/store/RoomStore';

const InputForMessage = memo(({socket}: any) => {
    const [message, setMessage] = useState('');

    return(
        <div className='InputForMessage'>
            <form onSubmit={(e) =>{
                e.preventDefault();
                
                RoomStore.sendMessage(CreateMessage(message, 'userMessage'));

                socket.emit('message', CreateMessage(message, 'userMessage'));

                setMessage('')

                console.log(RoomStore.activeRoom.users)
            }}>
                <div>
                    <input type="search" placeholder='Написать сообщение...' value={message} onChange={(e) => setMessage(e.target.value)}/>
                </div>
            </form>
        </div>
    )
})

export default InputForMessage;