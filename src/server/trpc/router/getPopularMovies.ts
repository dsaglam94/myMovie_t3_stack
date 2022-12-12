import { router, protectedProcedure } from "../trpc";
import requests from "../../../utils/requests";

export const popularMoviesRouter = router({
  getPopularMovies: protectedProcedure.query(async () => {
    try {
      const res = await fetch(requests.popularMovies);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }),
});
