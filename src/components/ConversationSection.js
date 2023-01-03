import AppBarConversaton from "./messages/AppBarConversaton";
import MessageReceive from "./messages/MessageReceive";
import MessageSend from "./messages/MessageSend";
import WriteMessage from "./messages/WriteMessage";



function ConversationSection() {

    return (
        <div className="h-full">
            <AppBarConversaton username="koybi" imgpath="/img2.jpg" title="essai">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </AppBarConversaton>
            <div className="px-5 h-[380px] overflow-y-auto overflow-x-hidden">
                <MessageReceive time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." />
                <MessageSend time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." /><MessageReceive time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." />
                <MessageReceive time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit" />
                <MessageSend time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." /><MessageReceive time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." />
                <MessageSend time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." /><MessageReceive time="11:54 PM" text="Consectetur elit comoccaecat sunt voluptate nisi irure est duis." />
                <MessageSend time="11:54 PM" text="Consectetur na aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." /><MessageReceive time="11:54 PM" text="Consectesunt voluptate nisi irure est duis." />
                <MessageSend time="11:54 PM" text="Consectetur elit commodo ad laborip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." /><MessageReceive time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." />
                <MessageSend time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." /><MessageReceive time="11:54 PM" text="Consp voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." />
                <MessageSend time="11:54 PM" text="Consectetur elit commodo ad laborum Lorem eiusmod duis nostrud velit. Lorem magna ea commodo occaecat laborum do duis. Cillum laborum excepteur ut dolore sunt incididunt aliquip voluptate magna aliqua. Qui magna nisi adipisicing enim consequat nostrud. Ut in occaecat sunt voluptate nisi irure est duis." />
            </div>
            <WriteMessage />
        </div>
    )
}

export default ConversationSection;