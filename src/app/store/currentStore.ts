import { observable } from "mobx";

const currentStore = observable({
    current: null,
    setCurrent(current: any) {
        this.current = current;
    }
})

export default currentStore;