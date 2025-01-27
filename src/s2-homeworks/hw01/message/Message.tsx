import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any

export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    const {id, user, message} = props.message

    return (
        <div id={'hw1-message-' + id} className={s.message}>
            <div className={s.imageAndText}>
                <img alt={'avatar'} id={'hw1-avatar-' + id} src={user.avatar}/>
                <div className={s.text}>
                    <div id={'hw1-name-' + id} className={s.name}>
                        {user.name}
                    </div>
                    <div id={'hw1-text-' + id} className={s.messageText}>
                        {message.text}

                        {/**/}
                    </div>
                </div>
            </div>
            <div id={'hw1-time-' + id} className={s.time}>
                {message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
