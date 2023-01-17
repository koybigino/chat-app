import { useRef } from "react";

function WriteMessage({onAddMessage}) {

    const styles = {
        text: {
            resize: "none",
        },
        opac: {
            opacity: '0.5',
        },
    }

    const resize = (e) => {
        const text = e.target;
        text.style.height = 'auto';
        text.style.height = text.scrollHeight + 'px';
    }

    const textRef = useRef()


    return (
        <div className="flex px-5 items-center justify-between border-t h-[80px]">
            <div className="rotate-90">
                <button>
                    <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                </button>
            </div>
            <div className="px-3 w-10/12 bg-gray-100 rounded-lg pl-5 flex justify-center items-center">
                <textarea ref={textRef} rows="1" placeholder="Send message..." onChange={resize} style={styles.text} className="text-gray-500 bg-gray-100 placeholder:text-sm max-h-14 h-fit text-sm focus:outline-0 py-3 focus:text-sm focus:text-gray-500 w-full">

                </textarea>
                <button onClick={() => onAddMessage(textRef.current.value)} className="rotate-45">
                    <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                </button>
            </div>
            <div>
                <button>
                    <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default WriteMessage;