import Image from "next/legacy/image";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { type Movie } from "../types/typesConfig";

const MovieInstance = ({ movie }: { movie: Movie }) => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <div className="relative inline-block h-[200px] w-[180px] cursor-pointer p-2 sm:w-[220px] md:w-[260px] lg:w-[300px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 h-full w-full select-none bg-black/80 opacity-0 hover:opacity-100">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 whitespace-normal text-center text-xs text-white md:text-sm">
          <h2>{movie?.title}</h2>
          <p className={colorRating(movie?.vote_average)}>
            {movie?.vote_average}
          </p>
        </div>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 cursor-pointer text-white" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 cursor-pointer text-white" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieInstance;

function colorRating(num: number): string {
  if (num >= 8) {
    return "text-green-500";
  } else if (num >= 5) {
    return "text-orange-400";
  } else {
    return "text-red-500";
  }
}
