import { useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO,AVATAR_LOGO,SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)

    const hanldeSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }

    const gptSearchClick = () => {
      dispatch(toggleGPTSearchView())
    }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
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
            <select onChange={handleLanguageChange} className="p-2 m-2 bg-gray-900 text-white">
              {
                SUPPORTED_LANGUAGE.map((item) => 
                    <option value={item.identifier}>{item.name}</option>
                )
              }
              </select>
              <button onClick={gptSearchClick} className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg">{showGPTSearch ? 'Homepage' : 'GPT Search'}</button>
                <img className="w-12 h-12" alt="user" src={user.photoURL? user.photoURL : AVATAR_LOGO}/>
                <button onClick={hanldeSignOut} className="font-bold text-white">Sign Out</button>
            </div>}
        </div>
       
    )
}

export default Header