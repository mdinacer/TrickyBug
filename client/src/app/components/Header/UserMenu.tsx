import { Menu } from "@headlessui/react";
import { useState } from "react";
import { AppUser } from "../../models/user";

interface Props {
  user: AppUser;
}

export default function UserMenu({ user }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items className={"flex flex-col h-auto"}>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
}
