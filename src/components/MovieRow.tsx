import React from "react";
import MovieInstance from "./MovieInstance";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { type Movie } from "../types/typesConfig";
import { type UseTRPCQueryResult } from "@trpc/react-query/shared";

const MovieRow = ({
  title,
  rowID,
  fetcher,
}: {
  title: string;
  rowID: number;
  fetcher: () => UseTRPCQueryResult<[Movie], boolean>;
}) => {
  const { data, isLoading } = fetcher();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  function slideLeft() {
    const slider = document.getElementById("slider" + rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  }

  function slideRight() {
    const slider = document.getElementById("slider" + rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  }

  return (
    <section>
      <h1 className="p-2 text-white">{title}</h1>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute -left-4 z-[20] hidden cursor-pointer rounded-full bg-white/40 text-white hover:text-red-500 group-hover:block"
          size={50}
        />
        <div
          id={"slider" + rowID}
          className="scrollbar-hide relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap"
        >
          {data &&
            data.map((movie: Movie) => (
              <MovieInstance key={movie.id} movie={movie} />
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute -right-4 z-[20] hidden cursor-pointer rounded-full bg-white/40 text-white hover:text-red-500 group-hover:block"
          size={50}
        />
      </div>
    </section>
  );
};

export default MovieRow;
