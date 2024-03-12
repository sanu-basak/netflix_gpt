import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <>  
            <Header/>
            <div>
                <img className="absolute" alt="bg-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 m-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
                { !isSignInForm  &&
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-slate-700"/>
                }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-slate-700"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700"/>
                <button className="p-4 my-6 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now" } </p>
            </form>
        </>
    )
}

export default Login