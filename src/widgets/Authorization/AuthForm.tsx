import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { socket } from '../Chat/RoomChat';
import './AuthForm.scss';

// store
import UserStore from '../../app/store/UserStore';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
        <form className="authForm" autoComplete='off' onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className="authForm__inputs">

                <div className="authFormItem">
                    <label>Введите имя</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="authFormItem">
                    <label>Введите пароль</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

            </div>

            <div className="authForm__buttons">
                <div>
                    <button onClick={() => {
                        UserStore.registration(username, password)
                        socket.connect();
                    }}>Зарегистрироваться</button>
                </div>

                <div>
                    <button onClick={() => {
                        UserStore.login(username, password)
                        socket.connect();
                    }}>Авторизоваться</button>
                </div>
            </div>

        </form>
    )
}

export default observer(AuthForm);