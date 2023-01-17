

function ContactGroup({username, message, num, time, timegrade, imgpath, writer}){

    return(
        <div className="flex justify-between items-center gap-x-2 py-3">
            <div className="relative w-2/12">
                <img className="rounded-full" style={{ width: "auto", height: "100%" }} src={imgpath} alt="img2"/>
            </div>
            <div className="w-9/12">
                <h6 className="font-bold text-sm">{username}</h6>
                <p className="font-regular text-slate-400 text-xs"> <span className="font-bold mr-2">{writer}:</span>  {message}</p>
            </div>
            <div className="w-1/12">
                <h6 className="font-bold text-sm w-full">{time}{timegrade}</h6>
                <div className="text-white text-center text-sm bg-blue-500 rounded-md w-fit px-2 p-1">{num}</div>
            </div>
        </div>
    )
}

export default ContactGroup;