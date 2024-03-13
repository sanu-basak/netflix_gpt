import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch()
    const appRoute = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

    

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,displayName,email,photoURL} = user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
        } else {
          // User is signed out
          dispatch(removeUser())
        }
      })
    },[])


    return (
        <>
            <RouterProvider router={appRoute} />
        </>
    )
}

export default Body