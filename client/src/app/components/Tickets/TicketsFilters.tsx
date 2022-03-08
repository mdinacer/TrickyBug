import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { TicketPriority, TicketStatus } from "../../models/enums";
import { TicketParams } from "../../models/ticketParams";
import { setTicketParams } from "../../slices/ticketSlice";
import { useAppDispatch } from "../../store/configureStore";
import { EnumToArray } from "../../util/enumToArray";
import Dropdown from "../common/Dropdown";
import AppTextInput from "../common/TextInput";

interface Props {
  params: TicketParams;
  setParams: (value: any) => void;
}

export default function TicketsFilters({ params, setParams }: Props) {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const { control, handleSubmit } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });

  useEffect(() => {
    if (startDate || endDate) {
      setParams({ startDate, endDate });
    }
  }, [endDate, setParams, startDate]);

  function handleSubmitData(data: FieldValues) {
    dispatch(setTicketParams(data));
  }

  return (
    <div className="w-full flex flex-row  justify-around items-center  py-5">
      <form onSubmit={handleSubmit(handleSubmitData)} className="flex flex-row">
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

      <Dropdown
        title="Status"
        selectedValue={"All"}
        onChange={(value) =>
          setParams({ status: value === "-1" ? null : value })
        }
        items={[{ name: "All", value: "-1" }, ...EnumToArray(TicketStatus)]}
      />

      <Dropdown
        title="Priority"
        selectedValue={"All"}
        onChange={(value) =>
          setParams({ priority: value === "-1" ? null : value })
        }
        items={[{ name: "All", value: "-1" }, ...EnumToArray(TicketPriority)]}
      />
    </div>
  );
}
