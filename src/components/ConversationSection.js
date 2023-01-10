import { useEffect, useRef, useState } from "react";
import AppBarConversaton from "./messages/AppBarConversaton";
import MessageReceive from "./messages/MessageReceive";
import MessageSend from "./messages/MessageSend";
import WriteMessage from "./messages/WriteMessage";



function ConversationSection() {

    const [messages, setMessages] = useState([
        {id: 1, text: "Consectetur elit commodo ad labo t sunt voluptate nisi irure est duis.", time:"11:54 PM", type: "receive"},
        {id: 2, text: "Consectetur eli ecat sunt voluptate nisi irure est duis.", time:"11:54 PM", type: "receive"},
        {id: 3, text: "Consectetur elit commodo ad laborum Losunt voluptate nisi irure est duis.", time:"11:54 PM", type: "send"},
        {id: 4, text: "Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur t in occaecat sunt voluptate nisi irure est duis.", time:"11:54 PM", type: "receive"},
        {id: 5, text: "Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis.", time:"11:54 PM", type: "send"},
        {id: 6, text: "cididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis.", time:"11:54 PM", type: "send"},
        {id: 7, text: "Consectetur elit ", time:"11:54 PM", type: "receive"},
        {id: 8, text: "Consectetur emagna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis.", time:"11:54 PM", type: "receive"},
    ])

    const addMessage = (text) =>{

        if(text !== ""){
            setMessages([...messages, {
                id: Math.random() * 100,
                text: text,
                type: "send",
                time: "11:54 PM"
            }])
        }
    }

    const scrollRef = useRef()

    const scrollToTheBottom = () => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }

    useEffect(() => {
        return(
            scrollToTheBottom
        )
    })



    return (
        <div className="h-full">
            <AppBarConversaton username="koybi" imgpath="/img2.jpg" title="essai">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </AppBarConversaton>
            <div ref={scrollRef} className="px-5 flex flex-col h-[380px] overflow-y-auto overflow-x-hidden">

                {messages.map((m) =>{
                    if (m.type === "send") {
                        return(<MessageSend key={m.id} time={m.time} text={m.text} />)
                    } else {
                        return(<MessageReceive key={m.id} time={m.time} text={m.text} />)
                    }
                })}
            </div>
            <WriteMessage onAddMessage={addMessage} />
        </div>
    )
}

export default ConversationSection;