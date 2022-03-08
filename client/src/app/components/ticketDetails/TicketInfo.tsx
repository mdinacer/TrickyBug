import { ProjectTicketFull } from "../../models/ticket";
import LabelItem from "../common/LabelItem";

interface Props {
  ticket: ProjectTicketFull;
}

export default function TicketInfo({ ticket }: Props) {
  return (
    <div className="flex flex-col gap-y-3 border-b-black">
      <LabelItem title="Priority" value={ticket.priority} />
      <LabelItem title="Status" value={ticket.status} />
      <LabelItem
        title="Related Phase"
        value={ticket.phase?.title}
        fallbackValue="undefined"
      />

      {ticket.description && (
        <>
          <LabelItem title="Occurrence" value={ticket.description.occurrence} />
          <LabelItem title="Nature" value={ticket.description.nature} />
          <LabelItem title="Severity" value={ticket.description.severity} />
        </>
      )}
      <LabelItem
        title="Assigned member"
        value={ticket.assignedMember}
        fallbackValue="Unassigned"
      />

      <div className="py-2 border-b-black flex flex-col gap-y-3">
        <LabelItem
          title="Operating system"
          value={ticket.description.operatingSystem}
          isCol
        />

        <LabelItem
          title="Browser version"
          value={ticket.description.browser}
          isCol
        />
      </div>
      <div className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
        <p className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
          Screenshot
        </p>
        {ticket.description.photo ? (
          <button className="text-lg uppercase font-Oswald font-thin">
            View
          </button>
        ) : (
          <p className="text-base uppercase font-thin text-gray-500">
            Unavailable
          </p>
        )}
      </div>
    </div>
  );
}
