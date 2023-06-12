import { injectStores } from "@mobx-devtools/tools";

import RoomStore from './RoomStore';
import UserStore from './UserStore';
import ModalStore from './ModalStore';
import currentStore from './currentStore';

injectStores({
    UserStore,
    RoomStore,
    ModalStore,
    currentStore
})

export { RoomStore, UserStore, ModalStore, currentStore };