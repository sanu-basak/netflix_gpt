import Header from "./Header"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovie from "../hooks/useNowPlayingMovie.js";
import GPTSearch from "./GPTSearch.jsx";
import { useSelector } from "react-redux";



const Browse = () => {
    const showGPTsearch = useSelector((store) => store.gpt.showGPTSearch)
    useNowPlayingMovie()
    
    return (
        <>
            <Header/>
            {
                showGPTsearch ? <GPTSearch/> : <> <MainContainer/>
                <SecondaryContainer/></>
            }
        </>
    )
}

export default Browse