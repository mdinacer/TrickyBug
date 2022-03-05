import { SearchIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TicketParams } from "../../models/ticketParams";

interface Props {
  params: TicketParams;
  setParams: (value: any) => void;
}

export default function TicketsFilters({ params, setParams }: Props) {
  const [searchTerm, setSearchTerm] = useState(params.searchTerm);
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const handleSearch = (event: any) => {
    if (searchTerm !== params.searchTerm) setParams({ searchTerm });
  };

  const setStatus = (event: any) => {
    const value = event.target.value;
    if (params.status !== value)
      setParams({ status: value === "-1" ? null : value });
  };

  const setPriority = (event: any) => {
    const value = event.target.value;
    if (params.priority !== value)
      setParams({ priority: value === "-1" ? null : value });
  };

  useEffect(() => {
    if (startDate || endDate) {
      setParams({ startDate, endDate });
    }
  }, [endDate, setParams, startDate]);

  return (
    <div className="w-full flex flex-row justify-around py-10">
      <div className=" w-full max-w-xs flex flex-col ">
        <label
          htmlFor="ticketSearchInput"
          className=" font-Montserrat text-sm uppercase font-bold pb-2"
        >
          Search
        </label>
        <div className="flex flex-row gap-x-3 ">
          <input
            autoComplete="off"
            placeholder="Search for project"
            className="w-full py-2 px-5 rounded-md font-Montserrat  focus-visible:outline-red-600 bg-slate-600 text-white"
            id="ticketSearchInput"
            type="text"
            onChange={(event: any) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button title="Search Button" onClick={handleSearch}>
            <SearchIcon className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className="w-full max-w-xs flex flex-col">
        <label
          className=" font-Montserrat text-sm uppercase font-bold pb-2"
          htmlFor="statusSelect"
        >
          Filter by Status
        </label>
        <select
          className="w-full py-2 px-5 rounded-md font-Montserrat  focus-visible:outline-red-600 bg-slate-600 text-white"
          name="statusSelect"
          id="statusSelect"
          onChange={setStatus}
        >
          {ticketStatusOptions.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-xs flex flex-col">
        <label
          htmlFor="prioritySelect"
          className=" font-Montserrat text-sm uppercase font-bold pb-2"
        >
          Filter by Priority
        </label>
        <select
          className="w-full py-2 px-5 rounded-md font-Montserrat  focus-visible:outline-red-600 bg-slate-600 text-white"
          name="prioritySelect"
          id="prioritySelect"
          onChange={setPriority}
        >
          {ticketPriorityOptions.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const ticketStatusOptions = [
  { name: "All", value: -1 },
  { name: "New", value: 0 },
  { name: "Assigned", value: 1 },
  { name: "Open", value: 2 },
  { name: "Fixed", value: 3 },
  { name: "Pending", value: 4 },
  { name: "Retest", value: 5 },
  { name: "Verified", value: 6 },
  { name: "Reopen", value: 7 },
  { name: "Closed", value: 8 },
  { name: "Duplicate", value: 9 },
  { name: "Rejected", value: 10 },
  { name: "Deferred", value: 11 },
  { name: "NotBug", value: 12 },
];

const ticketPriorityOptions = [
  { name: "All", value: -1 },
  { name: "Low", value: 0 },
  { name: "Medium", value: 1 },
  { name: "High", value: 2 },
  { name: "Urgent", value: 3 },
];
