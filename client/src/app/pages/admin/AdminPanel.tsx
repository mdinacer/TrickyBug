import { useState } from "react";
import AdminProjectsList from "../../components/Admin/ProjectsList";
import AdminTicketsList from "../../components/Admin/TicketsList";
import AdminUsersList from "../../components/Admin/UsersList";

export default function AdminPanel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getPage = (index: number) => {
    switch (index) {
      case 0:
        return <AdminUsersList />;
      case 1:
        return <AdminProjectsList />;

      case 2:
        return <AdminTicketsList />;
    }
  };
  return (
    <div className=" w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-y-5 py-10">
        <h1 className="flex-initial text-3xl text-center lg:text-5xl font-Oswald mb-5 uppercase">
          Administration Panel
        </h1>

        <div className="relative w-full h-full p-10 bg-white text-black drop-shadow-md flex items-center justify-center">
          <ul className=" list-none flex flex-row gap-x-5 mx-auto">
            {pages.map((page, index) => (
              <li
                className={`${
                  selectedIndex === index
                    ? " border-b-red-600"
                    : " border-b-transparent"
                } border-b-2 list-item transition-all duration-300`}
                key={index}
              >
                <button type="button" onClick={() => setSelectedIndex(index)}>
                  <p className="font-Oswald text-2xl font-thin uppercase ">
                    {page}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-full min-h-screen p-10 bg-white text-black drop-shadow-md">
          <p className="font-Oswald text-3xl font-thin uppercase leading-loose flex-initial">
            {pages[selectedIndex]}
          </p>
          {getPage(selectedIndex)}
        </div>
        {/* <div className="relative w-full h-full p-10 bg-white text-black drop-shadow-md">
          <AdminUsersList />
        </div>

        <div className="relative w-full h-full p-10 bg-white text-black drop-shadow-md">
          <AdminProjectsList />
        </div>

        <div className="relative w-full h-full p-10 bg-white text-black drop-shadow-md">
          <AdminTicketsList />
        </div> */}
      </div>
    </div>
  );
}

const pages = ["Users", "Projects", "Tickets"];
