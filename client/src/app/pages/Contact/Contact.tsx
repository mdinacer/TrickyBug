export default function ContactPage() {
  return (
    <div className="lg:bg-slate-300 bg-slate-600  w-full h-full min-h-screen py-20 flex items-center justify-center ">
      <div className="relative max-w-xl w-full ">
        <p className=" font-Oswald text-8xl lg:text-[16rem] text-slate-500 lg:text-slate-900 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 font-thi uppercase ">
          Contact
        </p>

        <div className="relative py-10 flex z-[2] flex-col gap-y-10 bg-slate-800  lg:bg-slate-200 text-slate-300 lg:text-black lg:rounded-md px-10 bg-opacity-60 lg:bg-opacity-80 backdrop-blur-sm drop-shadow-md ">
          <a href="tel:+213 662 991 735">
            <p className=" font-Oswald text-4xl font-thin uppercase">Phone</p>
            <p className=" font-Oswald text-2xl font-thin uppercase">
              +213 662 991 735
            </p>
          </a>

          <a href="mailto:mdi.nacer@outlook.com">
            <p className=" font-Oswald text-4xl font-thin uppercase">Email</p>
            <p className=" font-Oswald text-2xl font-thin uppercase">
              mdi.nacer@outlook.com
            </p>
          </a>

          <div className="lg:mx-auto">
            <ul className=" list-none flex flex-col lg:flex-row lg:items-center gap-x-10">
              {links.map((link, index) => (
                <li className=" list-item" key={index}>
                  <a href={link.path} target="_blank" rel="noreferrer">
                    <p className=" font-Oswald text-4xl uppercase font-thin">
                      {link.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const links = [
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/mohammedi-abdenasser/",
  },
  { title: "GitHub", path: "https://github.com/mdinacer/" },
  { title: "Portfolio", path: "https://mdi-nacer.netlify.app/" },
];
