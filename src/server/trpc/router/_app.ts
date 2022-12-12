import { router } from "../trpc";
import { authRouter } from "./auth";
import { popularMoviesRouter } from "./getPopularMovies";
import { trendingMoviesRouter } from "./getTrendingMovies";
import { upcomingMoviesRouter } from "./getUpcomingMovies";

export const appRouter = router({
  popularMovies: popularMoviesRouter,
  upcomingMovies: upcomingMoviesRouter,
  trendingMovies: trendingMoviesRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
