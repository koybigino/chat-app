import MessageContact from "../components/MessageContact";
import IconLink from "../components/IconLink";
import ConversationSection from "../components/ConversationSection";


function Groups(){

    return (
        <div className='w-screen  flex justify-center items-center h-screen bg-gray-100'>
            <div className='w-11/12 h-[90%] shadow-inner bg-white rounded-xl grid grid-cols-12'>
                <div className="col-span-1 border-gray-100 border-r-2">
                    <IconLink />
                </div>
                <div className="col-span-4 border-gray-100 border-r-2 h-full">
                    <MessageContact />
                </div>
                <div className="col-span-7 ">
                    <ConversationSection />
                </div>
            </div>
        </div>
    )
}

export default Groups;