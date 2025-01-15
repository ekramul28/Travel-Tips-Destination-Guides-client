"use client";

import { Input } from "@nextui-org/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";

import { SearchIcon } from "../../../assets/icons";

import { ISearchResult } from "@/src/types";
import useDebounce from "@/src/hooks/debounce.hook";
import { useSearchPost } from "@/src/hooks/search.hook";

export default function LandingSearch() {
  const { register, handleSubmit, watch } = useForm();
  const { mutate: handleSearch, data, isPending, isSuccess } = useSearchPost();
  const [searchResults, setSearchResults] = useState<ISearchResult[] | []>([]);
  const router = useRouter();

  const searchTerm = useDebounce(watch("search"));

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleSeeAll(data.search);
  };

  const handleSeeAll = (query: string) => {
    const queryString = query.trim().split(" ").join("+");

    router.push(`/postDetails?query=${queryString}`);
  };

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
    }
    if (!isPending && isSuccess && data && searchTerm) {
      setSearchResults(data?.data?.hits ?? []);
    }
  }, [isPending, isSuccess, data, searchTerm]);

  return (
    <div className="max-w-xl flex-1 mx-auto relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <Input
            {...register("search")}
            aria-label="Search"
            classNames={{
              inputWrapper:
                "bg-gray-100 border border-gray-300 rounded-full w-[150px] lg:w-full shadow-sm",
              input: "text-sm px-4 py-2",
            }}
            placeholder="Search "
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-gray-500" />
            }
            type="text"
            className="w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 rounded-lg bg-white p-3 shadow-lg z-10">
          <div className="space-y-3">
            {searchResults.map((item, index) => (
              <Link
                key={index}
                className="text-gray-900 block rounded-md from-gray-200 p-2 transition-all hover:bg-gray-100"
                href={`/postDetails/${item.id}`}
              >
                <div className="flex items-center gap-2">
                  <img
                    alt="item"
                    className="h-10 w-10 rounded-md"
                    src={item.thumbnail}
                  />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 flex justify-center border-t pt-3">
            <button
              className="flex items-center justify-center gap-1 text-blue-600 hover:underline"
              onClick={() => handleSeeAll(searchTerm)}
            >
              <span>See All</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
