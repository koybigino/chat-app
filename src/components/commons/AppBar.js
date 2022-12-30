

function AppBar({ title, children }) {

    return (
        <nav className="border-b-2 w-full border-gray-100 flex justify-between p-5">
            <h3 className="font-bold text-xl">{title}</h3>
            {children && <div>
                <button>{children}</button>
            </div>}
        </nav>
    )
}

export default AppBar;