import InputText from "../components/log/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useURL } from "../context/GlobalContext";

function Logup() {
    const url = useURL()

    const styles = {
        opac: {
            opacity: '0.4',
        },
        shadow: {
            boxShadow: "1px 1px 10px 1px rgb(184, 184, 184)",
        },
    }
    
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [password, setPassworld] = useState("")
    const [email, setEmail] = useState("")
    const [confirmationPassword, setConfirmationPassworld] = useState("")

    const logup = (e) => {
        e.preventDefault()


        const body = {
            "login": userName,
            "email": email,
            "password": password,
            "confirm_password": confirmationPassword
          }

        fetch(`${url}register`, {
            method: "POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                if(typeof data == "string"){
                    navigate('/Sign-in')
                }
            })
            .catch((err) =>{
                console.log(err);
            })
    }

    return (
        <div className='w-screen  flex justify-center items-center h-screen overflow-hidden bg-slate-200'>
            <div className="bg-white w-auto h-auto" style={styles.shadow}>
                <h1 className="text-3xl text-slate-600 text-center font-serif m-10">Welcome to Chat App</h1>
                <form className="w-full">
                    <InputText onwrite={setUserName} type="text" placehoder="Username" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </InputText>
                    <InputText onwrite={setEmail} type="email" placehoder="Email" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                    </InputText>
                    <InputText onwrite={setPassworld} type="password" placehoder="Password" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        </svg>
                    </InputText>
                    <InputText onwrite={setConfirmationPassworld} type="password" placehoder="Confirmation Password" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                        </svg>
                    </InputText>
                    <div className="border-t border-gray-400">
                    </div>
                    <div className="flex pointer justify-around px-7 pt-7">
                        <button onClick={logup} className="w-full h-14 rounded bg-blue-500 text-white font-regular text-xl" type="submit">Sign Up</button>
                    </div>
                    <div className="w-full text-center p-7">
                        <span className="inline-block ml-5 text-slate-400 tracking-tighter">Already has an account?</span> <Link className="text-slate-400 tracking-tighter font-medium" to="/Sign-in">Sing In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Logup;