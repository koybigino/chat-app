import ContactBar from "../components/status/ContactsBar";

function Status() {
    return (
        <div className='w-screen h-max-screen h-screen  flex justify-center items-center '>
            <div className="w-[30%] h-full bg-slate-600">
                <ContactBar />
            </div>
            <div className="w-[70%] h-full bg-slate-900">

            </div>
        </div>
    );
}

export default Status;