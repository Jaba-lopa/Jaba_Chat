import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import './MessageItem.scss';

// store
import UserStore from '../../app/store/UserStore';

const MessageItem = ({message}: any) => {
    if (!message) {
        return(
            <div></div>
        )
    }
    let color = message.username === UserStore.user.username ? '#2B5278' : '#17212B';

    console.log(message);

    return(
        <div className='spaceForMessage'>
            <div className='message' style={{backgroundColor: `${color}`}}>

                {message.type === 'userMessage'
                    
                    ?   <div className='message__username'>{message.username}</div>
                    :   <div></div>
                }
                
                <div className='message__text'>{message.message}</div>

            </div>
        </div>
        
    )

}

export default observer(MessageItem);