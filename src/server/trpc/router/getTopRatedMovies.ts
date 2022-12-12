import { router, protectedProcedure } from "../trpc";

import requests from "../../../utils/requests";
import { type Results } from "../../../types/typesConfig";

export const topRatedMoviesRouter = router({
  getTopRatedMovies: protectedProcedure.query(async () => {
    try {
      const res = await fetch(requests.topRatedMovies);
      const { results }: Results = await res.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }),
});
