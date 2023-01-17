import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "./commons/AppBar";
import Contact from "./messages/Contact";
import SearchBar from "./messages/SearchBar";


function MessageContact() {

    const styles = {
        opac: {
            opacity: '0.3',
        },
    }

    const [contacts, setContact] = useState([
        {id: 1, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 2, usename: "koybi gino", imgpath: "/img2.jpg", active: false, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 3, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 4, usename: "koybi gino", imgpath: "/img2.jpg", active: false, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 5, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 6, usename: "koybi gino", imgpath: "/img2.jpg", active: false, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 7, usename: "koybi gino", imgpath: "/img2.jpg", active: false, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 8, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 9, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 10, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
        {id: 11, usename: "koybi gino", imgpath: "/img2.jpg", active: true, message: "Hi guy, how are you ?", num: "1", time: "5", timegrade: "m"},
    ])

    return (
        <div className="w-full">
            <AppBar title="Message">
                <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                </svg>
            </AppBar>
            <div className="px-5 pt-5">
                <SearchBar placeholder="Search...">
                    <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </SearchBar>
            </div>
            <div className="p-5  h-[410px] overflow-y-auto overflow-x-hidden">
                {contacts.map((c) =>{
                    return (<Link key={c.id} to="/">
                    <Contact imgpath={c.imgpath} active={c.active} username={c.usename} message={c.message} num={c.num} time={c.time} timegrade={c.timegrade}/>
                </Link>)
                })}
            </div>
        </div>
    )
}

export default MessageContact;