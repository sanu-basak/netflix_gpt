import { useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()

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

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className="w-52 h-24"/>
            { user && <div className="flex p-2">
                <img className="w-12 h-12" alt="user" src={user.photoURL? user.photoURL : "https://occ-0-4412-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"}/>
                <button onClick={hanldeSignOut} className="font-bold text-white">Sign Out</button>
            </div>}
        </div>
       
    )
}

export default Header