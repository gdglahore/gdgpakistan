"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { GroupIcon, ArrowDownIcon } from "@/components/Icons";

const PATH = "/team";
const COUNT = 5;

function useRandomMembers(members) {
  const [shown, setShown] = useState([]);

  useEffect(() => {
    const random = members.sort(() => 0.5 - Math.random()).slice(0, COUNT);
    setShown(random);
  }, [members]);

  return shown;
}

export function TeamBox({ members }) {
  const remainingCount = Math.max(0, members.length - COUNT);
  const shownMembers = useRandomMembers(members);

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900">
        <GroupIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">The Team</span>
      </h2>

      <p className="mt-2 text-sm text-zinc-600">
        Meet the people that make it all happen!
      </p>

      <div className="my-10 flex justify-center -space-x-2">
        {shownMembers.map((m, i) => (
          <Image
            key={i}
            className="inline-block h-[3.5rem] w-[3.5rem] rounded-full ring-2 ring-white"
            src={m.image}
            alt={m.name}
          />
        ))}

        {remainingCount > 0 && (
          <div className="relative inline-flex [--placement:top-left]">
            <Link
              href={PATH}
              className="inline-flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border-2 border-white bg-white bg-zinc-100 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
            >
              <span className="font-medium leading-none">
                {remainingCount}+
              </span>
            </Link>
          </div>
        )}
      </div>

      <Button href={PATH} variant="secondary" className="group w-full">
        See all members
        <ArrowDownIcon className="h-4 w-4 -rotate-90 stroke-zinc-400 transition group-active:stroke-zinc-600" />
      </Button>
    </div>
  );
}
