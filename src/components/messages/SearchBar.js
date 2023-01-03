

function SearchBar({placeholder, children}) {
    
    return (
        <div className="flex rounded-sm justify-center gap-2 items-center bg-gray-100 p-2">
            <input className="focus:outline-0 bg-gray-100 text-black focus:text-black text-justify focus:text-sm text-sm w-full" type="text" placeholder={placeholder}/>
            <button>
                {children}
            </button>
        </div>
    )
}

export default SearchBar;