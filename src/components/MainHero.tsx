import Image from "next/legacy/image";
import React from "react";
import { trpc } from "../utils/trpc";

const MainHero = () => {
  const { data, isLoading } = trpc.popularMovies.getPopularMovies.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const randomMovie =
    data?.length && data[Math.floor(Math.random() * data.length)];

  return (
    <div className="relative h-[80vh] w-full">
      <Image
        className="absolute top-0 left-0 h-full w-full"
        src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
        alt={randomMovie?.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-black" />

      <div className="absolute top-[60%] z-[100] px-6 md:top-[40%]">
        <h1 className="mb-4 w-full text-4xl font-bold text-white md:text-6xl lg:w-[70%]">
          {randomMovie?.title}
        </h1>
        <div className="mb-6 space-x-4">
          <button className="text-md rounded-md bg-white/90 px-8 pt-1 pb-2 text-red-500 hover:bg-red-500/90 hover:text-white/90 md:pb-3 md:pt-2 md:text-xl">
            Play
          </button>
          <button className="text-md hover:text-red-500/90 md:text-xl">
            Watch Later
          </button>
        </div>
        <p className="mb-1 text-sm text-gray-300">
          {String(randomMovie?.release_date)}
        </p>
        <p className="text-md w-full text-white md:w-[70%] lg:w-[50%] xl:w-[35%]">
          {randomMovie?.overview && truncateStr(randomMovie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default MainHero;

const truncateStr = (str: string, num: number): string => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
