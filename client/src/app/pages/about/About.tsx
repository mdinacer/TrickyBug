export default function AboutPage() {
  return (
    <div className="relative h-full min-h-screen w-full bg-slate-900 py-20 ">
      <video
        autoPlay={true}
        muted
        playsInline
        loop
        className="fixed top-0 left-0 grayscale opacity-5 w-screen h-screen object-cover object-center "
        src="../assets/videos/hero.mp4"
      />

      <div className="relative container mx-auto px-5 py-10">
        <section className="text-white">
          <article className="flex flex-col gap-y-10">
            <p className=" font-Oswald text-6xl text-center lg:text-left  lg:text-7xl leading-loose">
              <span className="uppercase">Tricky</span>
              <span className=" font-thin">Bugg</span>
            </p>
            <div>
              <p className=" font-Oswald text-4xl font-thin leading-loose">
                Description
              </p>
              <p className="font font-Montserrat text-lg">
                A simple bug tracker (future project manager) made to simplify
                bugs and issues tracking.
              </p>
            </div>
            <div>
              <p className=" font-Oswald text-4xl font-thin leading-loose">
                Elements
              </p>
              <div className="px-5 border-l-2 border-l-white flex flex-col gap-y-3">
                <div>
                  <p className=" font-Oswald text-2xl font-thin leading-loose">
                    Project
                  </p>
                  <p className="font font-Montserrat text-lg">
                    Can be any type of project that needs testing and bug
                    tracking.
                  </p>
                </div>
                <div>
                  <p className=" font-Oswald text-2xl font-thin leading-loose">
                    Project Member
                  </p>
                  <p className="font font-Montserrat text-lg">
                    A Project team member who can be a (Project Team Leader,
                    Designer, Developer, Tester).
                  </p>
                </div>

                <div>
                  <p className=" font-Oswald text-2xl font-thin leading-loose">
                    Project Phase
                  </p>
                  <p className="font font-Montserrat text-lg">
                    A phase with a START and END date that can be used to filter
                    actions and issues in a certain period of project life.
                  </p>
                </div>

                <div>
                  <p className=" font-Oswald text-2xl font-thin leading-loose">
                    Project Action
                  </p>
                  <p className="font font-Montserrat text-lg">
                    Any type of action made by developers (Coding, commits,
                    testing, deployment) that can help tracking the issues and
                    potentiel causes.
                  </p>
                </div>

                <div>
                  <p className=" font-Oswald text-2xl font-thin leading-loose">
                    Project Ticket
                  </p>
                  <p className="font font-Montserrat text-lg">
                    Any bug or issue can be represented by a ticket created by
                    testers or developers by creating a detailed ticket
                    containing all informations needed for issues fixing
                    operations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className=" font-Oswald text-4xl font-thin leading-loose">
                The Stack and Techs
              </p>
              <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-y-0 w-full">
                <div className="font font-Montserrat text-lg ">
                  <p className=" font-Oswald text-3xl font-thin pr-5 leading-loose">
                    Backend
                  </p>
                  <ul className="flex flex-col gap-y-3 px-5 border-l-2 border-l-white">
                    {backend.map((item, index) => (
                      <li className="">
                        <p className=" font-Oswald text-xl font-thin">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="font font-Montserrat text-lg ">
                  <p className=" font-Oswald text-3xl font-thin pr-5 leading-loose">
                    Frontend
                  </p>
                  <ul className="flex flex-col gap-y-3 px-5 border-l-2 border-l-white">
                    {frontend.map((item, index) => (
                      <li className="">
                        <p className=" font-Oswald text-xl font-thin">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="font font-Montserrat text-lg ">
                  <p className=" font-Oswald text-3xl font-thin pr-5 leading-loose">
                    External Services
                  </p>
                  <ul className="flex flex-col gap-y-3 px-5 border-l-2 border-l-white">
                    {external.map((item, index) => (
                      <li className="">
                        <p className=" font-Oswald text-xl font-thin">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <p className=" font-Oswald text-2xl font-thin leading-loose">
                TODO
              </p>
              <ul className=" list-disc px-5 font-Montserrat text-base flex flex-col gap-y-3">
                <li className="list-item">
                  Turn this application into a full project management app (with
                  Agile support)
                </li>
                <li className="list-item">
                  Implement SignalR real time notification. (Started)
                </li>
                <li className="list-item">
                  Email Notification for project members and Assigned members
                  (Started)
                </li>
                <li className="list-item">
                  Add video upload for Screen Recording issues.
                </li>
                <li className="list-item">Implement GitHub Auth and API</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

const backend = [
  ".NET 6 & Entity Framework",
  "Mediatr (CQRS Pattern for decoupling API and Business logic) ",
  "FluentValidation (CQRS query validation)",
  "SignalR  (websocket communication)",
  "SendGrid (Interaction with SendGrid API)",
  "PostgreSql, Docker (Database)",
  "IMapper (entities mapping)",
  "Cloudinary (Interaction with Cloudinary API)",
];

const frontend = [
  "ReactJs / Typescript",
  "Redux & Redux Toolkit (state management)",
  "Axios (Http Client)",
  "React Router Dom (routing and navigation)",
  "React Hook Form (forms)",
  "Yup (forms validation)",
  "Framer motion (Animations)",
  "TailwindCss (Styling)",
];

const external = [
  "Cloudinary (Media hosting service)",
  "SendGrid (Mail delivery service)",
];
