import { BG_IMAGE } from "../utils/constant";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img className="" alt="bg-img" src={BG_IMAGE}/>
            </div>
           
            <GPTSearchBar/>
            <GPTMovieSuggestion/>
            
        </div>
    )
}

export default GPTSearch