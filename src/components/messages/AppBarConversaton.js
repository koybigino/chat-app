import { useState } from "react";



function AppBarConversaton({ username, imgpath, children }) {

    const [typing, setTyping] = useState("d")

    return (
        <nav className="border-b-2 w-full border-gray-100 flex items-center justify-between px-5 py-1 pb-1">
            <div className="flex w-auto items-center gap-x-1 py-3">
                <div className="relative w-auto">
                    <img className="rounded-full w-9 h-9" src={imgpath} alt="img2" />
                </div>
                <div className="w-auto mx-3">
                    <h6 className="font-bold text-sm">{username}</h6>
                    {typing !== "d" && <p className="font-regular text-gray-400 text-xs">{typing === "t" && "typing..."}{typing === "o" && "online"}</p>}
                    {typing === "d" && <p className="font-regular text-gray-400 text-xs">koybi, Yuri, Main.c</p>}
                </div>
            </div>
            {children && <div>
                <button>{children}</button>
            </div>}
        </nav>
    )
}

export default AppBarConversaton;