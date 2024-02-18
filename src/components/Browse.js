import { useDispatch, useSelector } from "react-redux";
import useOnPlayingMovies from "../custom hooks/useOnPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { removegptMovieResult } from "../store/gptSlice";
import { Suspense, lazy } from "react";
const GPTSearchPage = lazy(() => import("./GPTSearchPage"));
const Browse = () => {
  useOnPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const gptview = useSelector((store) => store.gpt.gptSearchView);
  const dispatch = useDispatch();
  if (!gptview) {
    dispatch(removegptMovieResult());
  }

  return (
    <div className="text-white w-screen">
      <Header />
      {gptview ? (
        <Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <GPTSearchPage />
        </Suspense>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
