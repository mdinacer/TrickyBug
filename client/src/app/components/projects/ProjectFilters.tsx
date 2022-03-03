import { SortOptions } from "../../models/dataLists";
import Select from "../common/Select";

interface Props {
  selectedSort: any;
  setSelectedSort: (value: any) => void;
}

export default function ProjectFilters({
  selectedSort,
  setSelectedSort,
}: Props) {
  return (
    <div className="w-full h-auto ml-auto flex-initial z-[3] flex flex-row items-center justify-around">
      <div className="w-full flex flex-row items-center gap-x-5 max-w-sm">
        <Select
          label="Order By:"
          options={SortOptions}
          selectedOption={selectedSort}
          handleChange={setSelectedSort}
          titleProperty="title"
          keyProperty="id"
        />
      </div>

      <div className="w-full flex flex-row items-center gap-x-5 max-w-sm">
        <label
          className="hidden font-Montserrat text-sm uppercase font-bold"
          htmlFor="searchInput"
        >
          Search
        </label>
        <input
          autoComplete="off"
          id="searchInput"
          type={"text"}
          placeholder="Search for a project"
          className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat"
        />
      </div>
    </div>
  );
}


