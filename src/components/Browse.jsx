import Header from "./Header"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovie from "../hooks/useNowPlayingMovie.js";



const Browse = () => {
    useNowPlayingMovie()
    
    return (
        <>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </>
    )
}

export default Browse