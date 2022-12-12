import { router } from "../trpc";
import { authRouter } from "./auth";
import { popularMoviesRouter } from "./getPopularMovies";
import { upcomingMoviesRouter } from "./getUpcomingMovies";

export const appRouter = router({
  popularMovies: popularMoviesRouter,
  upcomingMovies: upcomingMoviesRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
