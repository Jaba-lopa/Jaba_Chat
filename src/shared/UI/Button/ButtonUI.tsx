import { FC, PropsWithChildren } from "react";
import './ButtonUI.scss';

const ButtonUI = (props: any) => {
    const { children } = props; 
    return(
        <button className="ButtonUI" {...props}>
            {children}
        </button>
    )
}

export default ButtonUI;