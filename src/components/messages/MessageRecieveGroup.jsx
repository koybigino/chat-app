

function MessageReceiveGroup({ text, time }) {


    return (
        <div className="mb-7">
            <div className="flex items-end">
                <img className="rounded-full w-6 h-6 mr-3" src='/img2.jpg' alt="img2" />
                <div className="bg-gray-100 p-3 text-black text-sm font-bold mb-0 max-w-lg w-fit rounded-t-3xl rounded-br-3xl">
                    {text}
                </div>
            </div>
            <div className=" text-[11px] font-medium w-fit text-gray-400 ">
                {time}
            </div>
        </div>
    )
}

export default MessageReceiveGroup