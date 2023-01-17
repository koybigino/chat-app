import InputText from "../components/log/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToken, useUpdateToken, useURL } from "../context/GlobalContext";

function Login() {

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

    const token = useToken()
    const setToken = useUpdateToken()

    const [userName, setUserName] = useState("")
    const [password, setPassworld] = useState("")

    const login = (e) => {
        e.preventDefault()
        const formdata = new FormData()

        formdata.append('username', userName)
        formdata.append('password', password)

        fetch(`${url}login`, {
            method: "POST",
            body: formdata
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                if(data.access_token){
                    setToken(data.access_token)
                    navigate('/')
                }
            })
            .catch((err) =>{
                console.log(err);
            })
    }

    return (
        <div className='w-screen  flex justify-center items-center h-screen bg-slate-200'>
            {token}
            <div className="bg-white w-auto h-auto" style={styles.shadow}>
                <h1 className="text-3xl text-slate-600 text-center font-serif m-10">Welcome to Chat App</h1>
                <form className="w-full">
                    <InputText onwrite={setUserName} type="text" placehoder="Username" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </InputText>
                    <InputText onwrite={setPassworld} type="password" placehoder="Password" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        </svg>
                    </InputText>
                    <div className="border-t border-gray-400"> </div>
                    <div className="flex justify-around px-7 pt-7">
                        <button onClick={login} className=" w-full h-14 rounded bg-blue-500 text-white font-regular text-xl" type="submit">Sign In</button>
                    </div>
                    <div className="w-full text-center p-7">
                        <span className="inline-block ml-5 text-slate-400 tracking-tighter">Don't have an account?</span> <Link className="text-slate-400 tracking-tighter font-medium" to="/Sign-up">Sing up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;