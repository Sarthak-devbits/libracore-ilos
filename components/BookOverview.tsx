import Image from "next/image";
import React from "react";
import BookCover from "./BookCover";

interface Props extends Book {
  userId: string;
}

const BookOverview = async ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  cover,
  id,
  userId,
}: Props) => {
  console.log(cover);
  return (
    <section className="book-overview flex">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.png" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="book-copies">
          <p>
            Total Books <span>{totalCopies}</span>
          </p>

          <p>
            Available Books <span>{availableCopies}</span>
          </p>
        </div>

        <p className="book-description">{description}</p>

        {/* {user && (
          <BorrowBook
            bookId={id}
            userId={userId}
            borrowingEligibility={borrowingEligibility}
          />
        )} */}
      </div>

      <div className="relative flex flex-1 justify-center ">
        <div className="relative w-full">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverImage={cover}
          />

          {/* <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={coverColor}
              coverImage={cover}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
