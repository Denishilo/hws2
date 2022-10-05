import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import joli from './joli.jpeg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageUserType = {
    avatar: string
    name: string
}

export type MessageInfoType = {
    text: string
    time: string
}

export type MessageType = {
    id: number,
    user: MessageUserType
    message: MessageInfoType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hello my ex-wife. How are you?', // можно менять
        time: '09:00', // можно менять
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: joli, // можно менять
        name: 'Angelina Jolie', // можно менять
    },
    message: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti id iure laborum magnam obcaecati quam quisquam quod reprehenderit rerum! Aliquid, autem corporis cum deserunt dicta dolore et ex, expedita facere fuga incidunt minima modi molestias nobis numquam rem sit ut. Aliquid aut dolores modi quia reprehenderit tempore vel voluptatibus.', // можно менять
        time: '09:03', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.hw1}>
            <div className={s2.hwTitle}>Homework #1</div>

            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
