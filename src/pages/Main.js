import MessageContact from "../components/MessageContact";
import IconLink from "../components/IconLink";
import ConversationSection from "../components/ConversationSection";
import { useToken, useUpdateToken } from "../context/GlobalContext";
import EditProfile from "../components/EditProfile";


function Groups(){


    const token = useToken()
    const setToken = useUpdateToken()

    return (
        <div className='w-screen  flex justify-center items-center h-max-screen h-screen bg-slate-200'>
            <div className='w-11/12 h-[90%] shadow-xl bg-white rounded-xl grid grid-cols-12'>
                <div className="col-span-1 border-gray-100 border-r-2">
                    <IconLink />
                </div>
                <div className="col-span-4 border-gray-100 border-r-2 h-full">
                    <EditProfile />
                </div>
                <div className="col-span-7 ">
                    <ConversationSection />
                </div>
            </div>
        </div>
    )
}

export default Groups;