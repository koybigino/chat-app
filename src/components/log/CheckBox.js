

function CheckBox({message}) {

    return(
        <div>
            <input type="checkbox" /> <label className="text-slate-400 tracking-tighter font-medium">{message}</label>
        </div>
    )
}

export default CheckBox;