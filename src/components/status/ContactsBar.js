import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function ContactBar() {

    const [contacts, setContact] = useState([
        { id: 1, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 2, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 3, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 4, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 5, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 6, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 7, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 8, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 9, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 10, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
        { id: 11, name: "koybi gino", imgpath: "/img1.png", text: "yesderday at 18:23", },
    ])

    const styles = {
        scroll : {
            scrollbarWidth: '1px',
        }
    }

    return (
        <div className="p-5">
            <div className=" pt-5">
                <Contact name="My Status" text="Content" imgpath="/img2.jpg" />
            </div>
            <div style={styles.scroll} className="pt-5 border-t  h-[490px] overflow-y-auto overflow-x-hidden">
                {contacts.map((c) => {
                    return (<Link key={c.id} to="/status">
                        <Contact imgpath={c.imgpath} text={c.text} name={c.name} />
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default ContactBar;