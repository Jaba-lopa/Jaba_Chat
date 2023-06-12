import { FC, PropsWithChildren } from "react";
import './Modal.scss';

const Modal: FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="SpaceBehindModal">
            <div className="ModalWindow">
                {children}
            </div>
        </div>
    )
}

export default Modal;