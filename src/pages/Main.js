import MessageContact from "../components/MessageContact";
import IconLink from "../components/IconLink";
import ConversationSection from "../components/ConversationSection";


function Main(){

    const styles = {
        opac: {
            opacity: '0.4',
        },
        shadow: {
            boxShadow: "1px 1px 10px 1px rgb(175, 184, 238)",
        },
    }

    return (
        <div className='w-screen  flex justify-center items-center h-max-screen h-screen bg-gray-500'>
            <div className='w-11/12 h-[90%] shadow-xl bg-white rounded-xl grid grid-cols-12'>
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

export default Main;