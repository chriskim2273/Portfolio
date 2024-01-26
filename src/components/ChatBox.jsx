import React from 'react'
import chatbox from '../assets/chatbox.png'

const ChatBox = ({ currentStage }) => {

    const Stages = {
        1: (
            <div>
                <p className='font-bold text-3xl'>Hi! I'm Christopher Kim.</p>
                <p className='font-bold text-3xl bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'>Welcome To My Portfolio!</p>
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