import { BG_ICON } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img src={BG_ICON} alt='logo' />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch
