import React from "react";
interface InputProps {
  hidden?: string;
  margin?: number;
}
function SearchBox({ hidden, margin }: InputProps) {
  return (
    <div
      className={`${hidden} md:block xl:w-[40rem]  mt-[${margin}px] lg:w-96 `}
    >
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none cursor-pointer z-20 ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block h-4 bg-[#1F1F1F] p-4 pl-10 w-full text-sm text-gray-500 rounded-lg border border-[#1F1F1F] focus:border-red-700"
            placeholder="Lorem ipsum"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
