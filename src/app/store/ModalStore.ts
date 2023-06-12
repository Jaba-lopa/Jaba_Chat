import { observable } from "mobx";

const ModalStore = observable({
    isActive: false,
    setIsActive(bool: boolean) {
        this.isActive = bool;
    }
})  

export default ModalStore;