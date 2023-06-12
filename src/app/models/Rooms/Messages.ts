export interface message {
    message_id: number;
    username: string;
    message: string;
    type: string;
    room_id: number;
}

export interface messages extends Array<message>{};