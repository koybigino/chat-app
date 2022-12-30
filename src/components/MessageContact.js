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

    return (
        <div className="w-full">
            <AppBar title="Message">
                <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                </svg>
            </AppBar>
            <div className="px-5 pt-5">
                <SearchBar />
            </div>
            <div className="p-5 h-[350px] overflow-auto">
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={false} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={false} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={false} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
                <Link to="/">
                    <Contact imgpath="/img2.jpg" active={true} username="koybi gino" message="Hi guy, how are you ?" num="1" time="5" timegrade="m" />
                </Link>
            </div>
        </div>
    )
}

export default MessageContact;