import Image from "next/image";
import React from "react";

const SearchForm = () => {
  return (
    <form>
      <label>
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-8 "
          width={32}
          height={32}
          alt="Search icon"
        />
      </label>
    </form>
  );
};

export default SearchForm;
