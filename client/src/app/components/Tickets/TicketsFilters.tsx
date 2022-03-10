import { FieldValues, useForm } from "react-hook-form";
import { TicketPriority, TicketStatus } from "../../models/enums";
import { TicketParams } from "../../models/ticketParams";
import { EnumToArray } from "../../util/enumToArray";
import Dropdown from "../common/Dropdown";
import AppTextInput from "../common/TextInput";

interface Props {
  params: TicketParams;
  setParams: (value: any) => void;
}

export default function TicketsFilters({ params, setParams }: Props) {
  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  function handleSubmitData(data: FieldValues) {
    setParams(data);
  }

  return (
    <div className="w-full flex flex-col lg:flex-row  justify-around items-center lg:gap-y-0 gap-y-5  py-5">
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="flex flex-col lg:flex-row w-full max-w-lg gap-y-2 flex-auto"
      >
        <AppTextInput
          control={control}
          label="search"
          placeholder="search"
          name="searchTerm"
        />
        <input
          className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
          type="submit"
          value={"Search"}
        />
      </form>

      <div className="flex-initial max-w-sm w-full">
        <Dropdown
          title="Status"
          selectedValue={"All"}
          onChange={(value) =>
            setParams({ status: value === "-1" ? null : value })
          }
          items={[{ name: "All", value: "-1" }, ...EnumToArray(TicketStatus)]}
        />
      </div>

      <div className="flex-initial max-w-sm w-full">
        <Dropdown
          title="Priority"
          selectedValue={"All"}
          onChange={(value) =>
            setParams({ priority: value === "-1" ? null : value })
          }
          items={[{ name: "All", value: "-1" }, ...EnumToArray(TicketPriority)]}
        />
      </div>
    </div>
  );
}
