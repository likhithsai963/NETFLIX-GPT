import { BG_ICON } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img className="h-screen object-cover" src={BG_ICON} alt='logo' />
            </div>
            <div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch
