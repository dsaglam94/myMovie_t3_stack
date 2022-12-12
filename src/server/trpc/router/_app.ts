import { router } from "../trpc";
import { authRouter } from "./auth";
import { popularMoviesRouter } from "./getPopularMovies";

export const appRouter = router({
  popularMovies: popularMoviesRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
