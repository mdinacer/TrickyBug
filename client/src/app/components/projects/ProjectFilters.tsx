import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { SortOptions } from "../../models/dataLists";
import { setProjectParams } from "../../slices/projectSlice";
import { useAppDispatch } from "../../store/configureStore";
import AppCheckbox from "../common/AppCheckbox";
import Dropdown from "../common/Dropdown";
import AppTextInput from "../common/TextInput";

// interface Props {
//   selectedSort: any;
//   setSelectedSort: (value: any) => void;
// }

export default function ProjectFilters() {
  const dispatch = useAppDispatch();
  const [selectedSort, setSelectedSort] = useState("Name");
  const [isMemberOnly, setIsMemberOnly] = useState(false);
  const { control, handleSubmit } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });

  function handleSortChange(value: any) {
    setSelectedSort(value);
    dispatch(setProjectParams({ orderBy: value }));
  }

  function handleIsMemberOnlyChange(value: boolean) {
    setIsMemberOnly(value);
    dispatch(setProjectParams({ isMember: value }));
  }

  function handleSubmitData(data: FieldValues) {
    dispatch(setProjectParams(data));
  }
  return (
    <div className="w-full h-auto ml-auto flex-initial z-[3] flex flex-row gap-x-5 items-center justify-start">
      <Dropdown
        items={SortOptions}
        title="Order By"
        onChange={handleSortChange}
        selectedValue={selectedSort}
      />

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

      <div className="border-black">
        <AppCheckbox
          label="I'm a member"
          isChecked={isMemberOnly}
          onChange={handleIsMemberOnlyChange}
        />
      </div>
    </div>
  );
}
