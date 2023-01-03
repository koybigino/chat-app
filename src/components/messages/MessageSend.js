

function MessageSend({ text, time }) {


    return (
    <div className="relative bg-blue-500 translate-x-[10rem] p-3 font-bold text-white text-sm mb-10 max-w-lg w-fit rounded-t-3xl rounded-bl-3xl">
            {text}

            <div className="absolute right-0 -bottom-6 text-[11px] font-medium w-fit text-gray-400 ">
                {time}
            </div>
        </div>
    )
}

export default MessageSend