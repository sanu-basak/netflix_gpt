import { useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO,AVATAR_LOGO } from "../utils/constant";

const Header = () => {
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const hanldeSignOut = () => {
        console.log(user)
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,displayName,email,photoURL} = user;
            dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
            navigate('/browse')
          } else {
            // User is signed out
            dispatch(removeUser())
            navigate('/')
          }
        })

        return () => unsubscribe()
      },[])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src={LOGO} alt="logo" className="w-52 h-24"/>
            { user && <div className="flex p-2">
                <img className="w-12 h-12" alt="user" src={user.photoURL? user.photoURL : AVATAR_LOGO}/>
                <button onClick={hanldeSignOut} className="font-bold text-white">Sign Out</button>
            </div>}
        </div>
       
    )
}

export default Header