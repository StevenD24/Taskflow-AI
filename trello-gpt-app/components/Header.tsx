"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useBoardStore } from "@/store/BoardStore";

function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ])

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">

        <div
          className="
          absolute
          top-0
          left-0
          w-full
          h-96
          bg-gradient-to-br
          from-pink-400
          to-[#0055D1]
          rounded-md
          filter
          blur-3xl
          opacity-50
          -z-50
          "
        />

        <Image
          src="https://cdn.discordapp.com/attachments/337766477094715405/1112469935793381467/Trello_logo.svg.png"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md
            flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar  */}
          <div style={{ width: '50px', height: '50px' }}>
            <Image
              src="https://cdn.discordapp.com/attachments/337766477094715405/1112482297875271680/anime-boy.png"
              alt="Trello Logo"
              layout="responsive"
              width={50}
              height={50}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-4 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white
        italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarizing your tasks for the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
