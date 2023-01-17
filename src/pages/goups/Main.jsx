import IconLink from "../../components/IconLink";
import Groups from "../../components/Groups";
import GroupConversation from "../../components/GroupConversation";


function Main(){

    return (
        <div className='w-screen  flex justify-center items-center h-screen bg-gray-100'>
            <div className='w-11/12 h-[90%] shadow-inner bg-white rounded-xl grid grid-cols-12'>
                <div className="col-span-1 border-gray-100 border-r-2">
                    <IconLink />
                </div>
                <div className="col-span-4 border-gray-100 border-r-2 h-full">
                    <Groups />
                </div>
                <div className="col-span-7 ">
                    <GroupConversation />
                </div>
            </div>
        </div>
    )
}

export default Main;