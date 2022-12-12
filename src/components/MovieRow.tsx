import React from "react";
import { trpc } from "../utils/trpc";

const MovieRow = ({ title }: { title: string }) => {
  const { data, isLoading } = trpc.upcomingMovies.getUpcomingMovies.useQuery();

  return <div>MovieRow</div>;
};

export default MovieRow;
