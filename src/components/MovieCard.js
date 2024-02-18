import { IMG_LINK } from "../utils/constants";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const MovieCard =({poster, title}) => {
    if (!poster) {
        return
    }
    return (
        <div className="xl:w-[170px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[90px] cursor-pointer hover:opacity-90 hover:scale-105">
            <LazyLoadImage className="w-full stroke animate  rounded-lg" src={IMG_LINK + poster}  effect="blur" alt="Loading.."/>
           
        </div>
    )
}
export default MovieCard;