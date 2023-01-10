import { useState } from "react";

function Contact({imgpath, name, text}) {

    const [status, setTyping] = useState(false)
    return ( 
        <div className="flex gap-x-3 items-center py-3">
            <div className="relative w-[45px]">
                <img className="rounded-full" style={{ width: "100%", height: "auto" }} src={imgpath} alt="img2" />
            </div>
            <div className="w-fit">
                <h6 className="font-bold text-sm mb-2 text-white">{name}</h6>
                {status && <p className="font-regular text-gray-400 text-xs">{text}</p>}
                {!status && <p className="font-regular text-gray-400 text-xs">No {text}</p>}
            </div>
        </div> );
}

export default Contact;