import InputText from "../components/log/InputText";
import CheckBox from "../components/log/CheckBox";
import { Link } from "react-router-dom";

function Login() {

    const styles = {
        opac: {
            opacity: '0.4',
        },
        shadow: {
            boxShadow: "1px 1px 10px 1px rgb(184, 184, 184)",
        },
    }

    return (
        <div className='w-screen  flex justify-center items-center h-screen bg-slate-200'>
            <div className="bg-white w-auto h-auto" style={styles.shadow}>
                <h1 className="text-3xl text-slate-600 text-center font-serif m-10">Welcome to Chat App</h1>
                <form className="w-full">
                    <InputText type="text" placehoder="Email" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                    </InputText>
                    <InputText type="password" placehoder="Password" >
                        <svg style={styles.opac} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        </svg>
                    </InputText>
                    <div className="flex justify-between pt-7 border-t px-7 border-gray-400">
                        <CheckBox message="Stay Signed in" />
                        <div className="w-auto ">
                            <a className="text-slate-400 tracking-tighter font-medium" href="#">Forgot your password ?</a>
                        </div>
                    </div>
                    <div className="flex justify-around px-7 pt-7">
                        <button className=" w-full h-14 rounded bg-blue-500 text-white font-regular text-xl" type="submit">Sign In</button>
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