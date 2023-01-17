import { useState } from "react";
import InputText from "./log/InputText";

function EditProfile() {


    const styles = {
        opac: {
            opacity: '0.4',
        },
        shadow: {
            boxShadow: "1px 1px 10px 1px rgb(184, 184, 184)",
        },
    }

    const [userName, setUserName] = useState("")
    const [password, setPassworld] = useState("")

    const channgeProfile = () => {
        console.log("object");
    }


    return ( 
        <form className="w-full">
                    <InputText onwrite={setUserName} type="text" placehoder="key" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </InputText>
                    <InputText onwrite={setPassworld} type="text" placehoder="value" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </InputText>
                    <div className="border-t border-gray-400"> </div>
                    <div className="flex justify-around px-7 pt-7">
                        <button onClick={channgeProfile} className=" w-full h-14 rounded bg-blue-500 text-white font-regular text-xl" type="submit">Sign In</button>
                    </div>
                </form>
     );
}

export default EditProfile;