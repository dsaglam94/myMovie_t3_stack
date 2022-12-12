import { router, protectedProcedure } from "../trpc";

import requests from "../../../utils/requests";
import { type Results } from "../../../types/typesConfig";

export const horrorMoviesRouter = router({
  getHorrorMovies: protectedProcedure.query(async () => {
    try {
      const res = await fetch(requests.horrorMovies);
      const { results }: Results = await res.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  }),
});
