import { useState } from "react";



function AppBarConversaton({ username, imgpath, children }) {

    const [typing, setTyping] = useState("d")

    return (
        <nav className="border-b-2 w-full border-gray-100 flex items-center justify-between px-5 py-1 pb-1">
            <div className="flex justify-between w-2/12 items-center gap-x-1 py-3">
                <div className="relative w-4/12">
                    <img className="rounded-full" style={{ width: "100%", height: "auto" }} src={imgpath} alt="img2" />
                </div>
                <div className="w-7/12">
                    <h6 className="font-bold text-sm">{username}</h6>
                    {typing !== "d" && <p className="font-regular text-gray-400 text-xs">{typing === "t" && "typing..."}{typing === "o" && "online"}</p>}
                    {typing === "d" && <p className="font-regular text-gray-400 text-xs">disconnect</p>}
                </div>
            </div>
            {children && <div>
                <button>{children}</button>
            </div>}
        </nav>
    )
}

export default AppBarConversaton;