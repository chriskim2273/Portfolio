import React from 'react'
import chatbox from '../assets/chatbox.png'

const ChatBox = ({ currentStage }) => {

    const Stages = {
        1: (
            <div>
                <p className='font-bold text-3xl'>Hi! I'm Christopher Kim.</p>
            </div>
        ),
        2: (
            <div>
                <p className='font-bold text-3xl'>I can't see you, give me one second...</p>
            </div>
        )
    }

    return (
        Stages[currentStage]
    )
}

export default ChatBox