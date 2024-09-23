import React, { useEffect, useRef, useState } from 'react';
import { useMeeting, usePubSub } from '@videosdk.live/react-sdk';

//icons
import { IoSend } from "react-icons/io5";

const ChatView = () => {
    const meeting = useMeeting();
    const { publish, messages } = usePubSub("CHAT");
    const [inputMessage, setInputMessage] = useState('');

    const scrollRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom every time the messages array updates
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

    const handleSendMessage = () => {
        publish(inputMessage, { persist: true });
        setInputMessage("");
    }
    return (
        <div className='px-2 py-4 relative w-[20rem] h-[30rem]  '>
            {/* chat box */}
            <div ref={scrollRef} className='overflow-y-auto max-h-[24rem] relative custom_scroll_bar'>
                {messages?.map((message, index) => {
                    return (
                        <div key={index} className='relative'>
                        {
                            message?.senderId === meeting?.localParticipant?.id ?
                            <div className='bg-gray-200 mx-2 my-2 px-2 py-1 leading-5 rounded-lg min-w-[5rem] w-fit ml-[12.5rem]'>
                                <p className='font-bold text-[0.7rem] text-blue-500'>You</p>
                                <p className='font-medium'>{message?.message}</p>
                            </div>
                            :
                            <div className='bg-gray-200 mx-2 my-2 px-2 py-1 leading-5 rounded-lg  min-w-[5rem] w-fit '>
                                <p className='font-bold text-[0.7rem] text-blue-500'>{message?.senderName}</p>
                                <p className='font-medium text-sm'>{message?.message}</p>
                            </div>
                        }
                        </div>
                       
                    );
                })}
            </div>
            {/* message input box */}
            <div className=' absolute flex rounded-full border w-[95%] bg-white border-gray-200 justify-between items-center bottom-2 left-2 '>
                <input
                    type="text"
                    name='inputMessage'
                    value={inputMessage}
                    className=' px-4 py-2 outline-none rounded-l-full font-medium w-[15rem]'
                    onChange={(e) => setInputMessage(e?.target?.value)}
                />
                <button
                    onClick={handleSendMessage}
                    className='text-xl flex h-[2.5rem] w-[2.5rem] m-1 justify-center items-center bg-blue-500 outline-none text-white rounded-full'>
                    <IoSend />
                </button>
            </div>
        </div>
    );
}

export default ChatView;
