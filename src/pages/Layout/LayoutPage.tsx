import { observer } from "mobx-react-lite";
import AuthForm from "../../widgets/Authorization/AuthForm";
import ChatPage from "../Chat/ChatPage";
import './LayoutPage.scss';

//store
import UserStore from "../../app/store/UserStore";
import ErrorModule from "../../modules/ErrorModule/ErrorModule";
import CreateChat from "../../widgets/createChat/CreateChat";

const LayoutPage = () => {
    if (UserStore.isLoading) {
        return(
            <div>Загрузка...</div>
        )
    }

    if (!UserStore.isAuth) {
        return(
            <div className="authPage">
                
                <div>
                    <AuthForm />
                </div>

            </div>
        )
    }

    return(
        <div>
            {/* <ErrorModule>
                Неправильно введён пароль
            </ErrorModule> */}

            <CreateChat />

            <ChatPage />
        </div>
    )
}

export default observer(LayoutPage);