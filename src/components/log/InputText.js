

function InputText({type, placehoder, children, onwrite}){

    const handleChange = (e) => {
        onwrite(e.target.value);
    }

    return(
        <div className="border-t px-7 flex justify-center gap-2 items-center border-gray-400 py-4">
            { children }<input onChange={handleChange} className="focus:outline-0 text-slate-400 focus:text-slate-400 text-justify focus:text-lg text-lg w-full" type={type} placeholder={placehoder} />
        </div>
    )
}

export default InputText;