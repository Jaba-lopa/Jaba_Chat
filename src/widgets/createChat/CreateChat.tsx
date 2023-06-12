import Modal from "../../shared/UI/Modal/Modal";

import './CreateChat.scss';

const CreateChat = () => {
    return(
        <Modal>
            <div className="ModalCreateChat">
                Модалка для создания чата
                <input type="color" />
            </div>
        </Modal>
    )
}

export default CreateChat;