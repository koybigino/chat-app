

function MessageReceive({ text, time }) {


    return (
        <div className="mb-7">
            <div className="bg-gray-100 self-start p-3 relative text-black text-sm font-bold mb-0 max-w-lg w-fit rounded-t-3xl rounded-br-3xl">
                {text}
            </div>
            <div className=" text-[11px] font-medium w-fit text-gray-400 ">
                {time}
            </div>
        </div>
    )
}

export default MessageReceive