import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import Image from "next/image";
import { sampleBooks } from "../constants";

export default function Home() {
  return (
    <>
      <h1 className="">
        <BookOverview {...sampleBooks[0]} />
        <BookList
          title="Latest Books"
          books={sampleBooks}
          containerClassName="mt-28"
        />
      </h1>
    </>
  );
}
