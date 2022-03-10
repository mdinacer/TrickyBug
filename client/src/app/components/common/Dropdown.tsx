import { ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  items: { name: string; value: string | number }[];
  //fullWidth?: boolean;
  onChange: (value: any) => void;
  selectedValue: any;
  addAllItem?: boolean;
}

const styles = {
  dropdownContainer: "relative border-x-2 border-x-slate-200 bg-slate-200",
  dropdownButton:
    "pb-2 pt-3 px-5 font-Oswald font-thin inline-flex justify-between items-center w-full",
  dropdownButtonText:
    "flex flex-row items-center justify-between w-full gap-x-5 text-lg lg:text-2xl",
  dropdownButtonPlaceholder: "text-lg lg:text-2xl text-gray-400",
  inputValidationStyle:
    "h-auto font-Oswald text-lg leading-none w-full font-thin px-5 py-0 text-gray-600",
  dropdownButtonIcon: "w-8 h-8 ml-2 text-inherit",
  dropdownListContainer:
    "absolute bg-white text-base z-50 drop-shadow-md list-none divide-y  divide-gray-100 rounded shadow my-4  w-full px-5",
  dropdownList: "py-5 list-none flex flex-col gap-y-2 font-Montserrat",
  dropdownListItem:
    "font-Montserrat text-left text-black text-lg font-thin cursor-pointer",
};

export default function Dropdown({
  title,
  items,
  //fullWidth = false,
  onChange,
  selectedValue,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    value: string | number;
  } | null>(null);

  useEffect(() => {
    if (selectedValue && selectedItem == null) {
      const item = items.find((i) => i.name === selectedValue);
      setSelectedItem(item ? item : null);
    }
  }, [items, selectedItem, selectedValue]);

  type ItemType = { name: string; value: string | number };

  const handleOnSelectItem = (item: ItemType) => {
    setSelectedItem(item);
    onChange(item.value);
    setIsOpen(false);
  };
  return (
    <div
      className={`
    ${!selectedValue ? "border-x-red-500" : "border-x-white"}  
    ${styles.dropdownContainer}`}
    >
      <button
        type="button"
        className={styles.dropdownButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedItem ? (
          <p className={styles.dropdownButtonText}>
            <span className="text-gray-500  text-xl  capitalize ">
              {title}{" "}
            </span>
            <span className="uppercase text-inherit">{selectedItem.name}</span>
          </p>
        ) : (
          <p className={styles.dropdownButtonPlaceholder}>{title}</p>
        )}
        <ChevronDownIcon className={styles.dropdownButtonIcon} />
      </button>

      <div
        className={`${isOpen ? "block " : "hidden"}  ${
          styles.dropdownListContainer
        }`}
        id="dropdown"
      >
        <ul className={styles.dropdownList} aria-labelledby="dropdown">
          {items.map((item) => (
            <li
              key={item.value}
              value={item.value}
              onClick={() => handleOnSelectItem(item)}
              className={styles.dropdownListItem}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
