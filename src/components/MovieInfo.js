import { useParams } from "react-router-dom";
import useMovieInfo from "../custom hooks/useMovieInfo";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMG_LINK } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { Suspense, lazy } from "react";
const MovieInfoTop = lazy(() => import("./MovieInfoTop"));
const MovieMid = lazy(() => import("./MovieMid"));
const MovieBottom = lazy(() => import("./MovieBottom"));
const MovieInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);

  const info = useSelector((store) => store.movie.movieInfo);
  if (!info) return <ShimmerUI />;

  //if we want we can access it by using state variable(like return the state var after data storing) but we r using redux store here

  return (
    <div className="relative w-full">
      <Header />
      <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          className="w-12/12 mx-auto brightness-[.3] scale-125  xl:scale-105"
          src={
            IMG_LINK +
            (info?.belongs_to_collection?.backdrop_path || info?.backdrop_path)
          }
          alt="movieinfobg"
        ></img>
      </div>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <MovieInfoTop info={info} />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <MovieMid id={info?.id} info={info} />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <MovieBottom id={info?.id} />
      </Suspense>
    </div>
  );
};
export default MovieInfo;
