import { useRef, useState } from "react"
import Header from "./Header"
import {checkValidData} from '../utils/validate'
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleBtnClick = () => {
        // validate the form data
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)

        if(message) return

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/29189226?v=4"
                      }).then(() => {
                        // Profile updated!
                        const {uid,displayName,email,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
                        navigate('/browse')
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage)
                });

        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+'-'+errorMessage)
                });
        }

    }

    return (
        <>  
            <Header/>
            <div>
                <img className="absolute" alt="bg-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 m-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
                { !isSignInForm  &&
                    <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-slate-700"/>
                }
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-slate-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700"/>
                <p className="p-2 m-2 font-bold text-red-600">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full" onClick={handleBtnClick}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now" } </p>
            </form>
        </>
    )
}

export default Login