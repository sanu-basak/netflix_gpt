import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstant"
import { useRef } from "react"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constant"
import { addGptSuggestion } from "../utils/gptSlice"



const GPTSearchBar = () => {
    const siteLang = useSelector((store) => store.config.language)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const tmdbMoviesList = async (movie) => {
       
            const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
            const json = await data.json()
            return (json.results)
            
        
    }

    const handleGPTSearch = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+ "only give me names of 5 movies with comma seperated like the examples result given ahead. example : Gadar,Ghayal,Nayak,Don,Dhoom" 
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
        
          if(!chatCompletion.choices){
            //TODO : Error Handling
          }
          const getMovies = chatCompletion?.choices?.[0].message?.content.split(",")

        const data = getMovies.map((movie) => tmdbMoviesList(movie))
        const suggestionMovie = await Promise.all(data)
        dispatch(addGptSuggestion({movieNames:getMovies,movieResult:suggestionMovie}))
          
    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} 
                className="w-1/2 bg-black grid grid-cols-12">
                <input type="text" 
                    ref={searchText}
                    className="p-4 m-4 col-span-10" 
                    placeholder={lang[siteLang]?.searchPlaceholder}/>
                <button 
                    onClick={handleGPTSearch}
                    className="col-span-2 py-2 m-4 px-4 bg-red-700 text-white rounded-lg">{lang[siteLang]?.search}</button>
            </form> 
           
        </div>
    )
}

export default GPTSearchBar