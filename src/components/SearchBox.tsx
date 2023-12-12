import { FormEvent, useEffect, useRef, useState } from "react";

export const SearchBox = ({ handleSearch }: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {

  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  }

  useEffect(() => {
    inputRef.current!.focus();
  }, []);


  return (
    <form id="form"
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("")
      }}
    >
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        autoComplete="off"
        id="search"
        type="search"
        name="search"
        className="absolute w-72 h-11 p-4 rounded-full mt-7"
        placeholder="Search locations..."
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};
