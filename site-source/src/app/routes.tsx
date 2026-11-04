import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Braces,
  Building2,
  CircuitBoard,
  ExternalLink,
  Mail,
  Menu,
  Radio,
  ShieldCheck,
  Users,
  Wrench,
  X,
} from "lucide-react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  useLocation,
} from "react-router";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/#team" },
  { label: "Robot", to: "/robot" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/support#contact" },
];

const departments = [
  {
    icon: Wrench,
    title: "Mechanical",
    copy: "Robot design, CAD, prototyping, fabrication, assembly, and maintenance.",
  },
  {
    icon: CircuitBoard,
    title: "Electrical",
    copy: "Power distribution, control systems, sensors, wiring, and troubleshooting.",
  },
  {
    icon: Braces,
    title: "Programming",
    copy: "Driver controls, autonomous routines, sensor integration, and testing.",
  },
  {
    icon: Radio,
    title: "Strategy",
    copy: "Game analysis, scouting, match planning, drive practice, and competition review.",
  },
];

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background font-[Manrope] text-foreground selection:bg-[#e5bd57] selection:text-[#250711]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#3a0919]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center px-5 lg:px-10">
          <Link to="/" className="flex items-center gap-4" aria-label="Team 9659 home">
            <div className="grid h-11 w-11 place-items-center border border-[#e5bd57] font-[Archivo_Black] text-sm text-[#e5bd57]">
              9659
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.12em]">Robotics Team 9659</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                FIRST Robotics Competition
              </p>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center lg:flex" aria-label="Main navigation">
            {navigation.map((item) => {
              const basePath = item.to.split("#")[0];
              const active =
                basePath === "/"
                  ? location.pathname === "/" && !item.to.includes("#")
                  : location.pathname === basePath;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`border-l border-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-[#e5bd57]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="ml-auto grid h-11 w-11 place-items-center border border-white/20 text-[#e5bd57] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#310916] px-5 py-3 lg:hidden" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.16em]"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-[#e5bd57]" />
              </Link>
            ))}
          </nav>
        )}
      </header>

      <Outlet />

      <footer className="bg-[#21050e] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 lg:px-10">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-[Archivo_Black] text-2xl uppercase tracking-[-0.03em] text-[#e5bd57]">
                Team 9659
              </p>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                A school-based FIRST Robotics Competition team.
              </p>
            </div>
            <div>
              <h2 className="font-mono text-xs font-bold tracking-[0.18em] text-[#e5bd57]">PAGES</h2>
              <div className="mt-5 grid gap-3 text-sm text-white/65">
                <Link to="/" className="w-fit hover:text-white">Home</Link>
                <Link to="/robot" className="w-fit hover:text-white">Robot</Link>
                <Link to="/support" className="w-fit hover:text-white">Support</Link>
              </div>
            </div>
            <div>
              <h2 className="font-mono text-xs font-bold tracking-[0.18em] text-[#e5bd57]">CONTACT</h2>
              <a
                href="https://www.instagram.com/vaniervikingsrobotics"
                className="mt-5 inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#e5bd57]"
              >
                <Mail className="h-4 w-4" />
                @vaniervikingsrobotics
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-7 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:justify-between">
            <p>© 2025 Robotics Team 9659</p>
            <p>FIRST Robotics Competition</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div
      className={`mb-6 flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] ${
        light ? "text-[#e5bd57]" : "text-[#6f102c]"
      }`}
    >
      <span className={`h-px w-10 ${light ? "bg-[#e5bd57]" : "bg-[#6f102c]"}`} />
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#4c0c22] text-white">
        <div className="mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e5bd57]">
              FIRST Robotics Competition
            </p>
            <h1 className="max-w-4xl font-[Archivo_Black] text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] uppercase tracking-[-0.07em]">
              Robotics
              <span className="block text-[#e5bd57]">Team 9659</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-white/70">
              A school-based team designing, building, programming, and operating a robot for the FIRST Robotics Competition.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/robot"
                className="inline-flex items-center justify-center gap-3 bg-[#e5bd57] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#310916]"
              >
                Robot page <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em]"
              >
                Support the team
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-[#310916]">
            <div className="border-b border-white/15 px-7 py-5 font-mono text-xs font-bold tracking-[0.18em] text-[#e5bd57]">
              TEAM PROFILE
            </div>
            <dl className="divide-y divide-white/10">
              {[
                ["Team number", "9659"],
                ["Programme", "FIRST Robotics Competition"],
                ["Team type", "School team"],
                ["Focus", "Student engineering"],
              ].map(([term, description]) => (
                <div key={term} className="grid grid-cols-[0.8fr_1.2fr] gap-5 px-7 py-6">
                  <dt className="text-sm text-white/45">{term}</dt>
                  <dd className="text-sm font-bold text-white">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-[#fbf7ef] py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>TEAM STRUCTURE</SectionLabel>
              <h2 className="font-[Archivo_Black] text-5xl uppercase leading-[0.92] tracking-[-0.055em] text-[#310916] md:text-7xl">
                What we do
              </h2>
            </div>
            <p className="max-w-3xl text-xl font-semibold leading-relaxed text-[#3d1722] lg:pt-10 md:text-2xl">
              Students work across technical and competition roles. Each area contributes to the same robot and match strategy.
            </p>
          </div>

          <div className="mt-14 grid border-y border-[#6f102c]/20 md:grid-cols-2">
            {departments.map((department, index) => (
              <article
                key={department.title}
                className={`p-8 md:p-10 ${
                  index % 2 === 1 ? "md:border-l md:border-[#6f102c]/20" : ""
                } ${index > 1 ? "border-t border-[#6f102c]/20" : index === 1 ? "border-t border-[#6f102c]/20 md:border-t-0" : ""}`}
              >
                <department.icon className="h-8 w-8 text-[#9b7321]" />
                <h3 className="mt-8 font-[Archivo_Black] text-2xl uppercase tracking-[-0.03em] text-[#310916]">
                  {department.title}
                </h3>
                <p className="mt-4 max-w-md leading-7 text-[#694c54]">{department.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e5bd57] py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-[#6f102c]">SUPPORT TEAM 9659</p>
            <h2 className="mt-3 font-[Archivo_Black] text-3xl uppercase tracking-[-0.04em] text-[#310916] md:text-4xl">
              Donations go through approved school channels.
            </h2>
          </div>
          <Link
            to="/support"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#310916] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
          >
            Donation information <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function RobotPage() {
  return (
    <main>
      <section className="bg-[#4c0c22] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <SectionLabel light>ROBOT</SectionLabel>
          <h1 className="max-w-4xl font-[Archivo_Black] text-6xl uppercase leading-[0.85] tracking-[-0.065em] md:text-8xl">
            Team 9659
            <span className="block text-[#e5bd57]">Competition Robot</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            This page is reserved for the team's robot specifications, mechanisms, software, and competition record.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf7ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="grid gap-px border border-[#6f102c]/20 bg-[#6f102c]/20 md:grid-cols-2">
            {[
              {
                icon: Bot,
                title: "Robot overview",
                copy: "Name, game objective, dimensions, weight, and overall design approach.",
              },
              {
                icon: Wrench,
                title: "Mechanisms",
                copy: "Drivetrain, manipulators, climbing systems, and other game-specific mechanisms.",
              },
              {
                icon: CircuitBoard,
                title: "Electrical system",
                copy: "Control hardware, sensors, power distribution, and wiring documentation.",
              },
              {
                icon: Braces,
                title: "Software",
                copy: "Driver controls, autonomous modes, feedback systems, and source documentation.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-[#fbf7ef] p-8 md:p-12">
                <item.icon className="h-9 w-9 text-[#9b7321]" />
                <h2 className="mt-10 font-[Archivo_Black] text-2xl uppercase tracking-[-0.03em] text-[#310916]">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-md leading-7 text-[#694c54]">{item.copy}</p>
                <p className="mt-8 font-mono text-[10px] font-bold tracking-[0.16em] text-[#6f102c]/50">
                  DETAILS TO BE ADDED
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-4 border-[#e5bd57] bg-white p-8">
            <h2 className="font-[Archivo_Black] text-xl uppercase text-[#310916]">Media will be added later</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#694c54]">
              Robot photography, CAD renders, match footage, and technical diagrams can be placed here when the team has approved assets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SupportPage() {
  return (
    <main>
      <section className="bg-[#4c0c22] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <SectionLabel light>SUPPORT</SectionLabel>
          <h1 className="max-w-4xl font-[Archivo_Black] text-6xl uppercase leading-[0.85] tracking-[-0.065em] md:text-8xl">
            Support
            <span className="block text-[#e5bd57]">Team 9659</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Donation and sponsorship arrangements are handled through the school. Contact the team before sending funds or materials.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#fbf7ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <SectionLabel>HOW TO DONATE</SectionLabel>
            <h2 className="font-[Archivo_Black] text-4xl uppercase leading-none tracking-[-0.045em] text-[#310916] md:text-6xl">
              Use the school's approved process
            </h2>
            <ol className="mt-12 border-y border-[#6f102c]/20">
              {[
                {
                  title: "Contact the team",
                  copy: "Message us on Instagram with your name, organisation, and the type of support you would like to provide.",
                },
                {
                  title: "Receive payment instructions",
                  copy: "We will reply with the current school-approved donation or sponsorship process.",
                },
                {
                  title: "Confirm the donation",
                  copy: "The school will provide the appropriate confirmation or documentation for the contribution.",
                },
              ].map((step, index) => (
                <li key={step.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#6f102c]/20 py-7 last:border-b-0">
                  <span className="font-mono text-sm font-bold text-[#9b7321]">0{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#310916]">{step.title}</h3>
                    <p className="mt-2 max-w-xl leading-7 text-[#694c54]">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit bg-[#310916] p-8 text-white md:p-12">
            <Mail className="h-9 w-9 text-[#e5bd57]" />
            <h2 className="mt-9 font-[Archivo_Black] text-3xl uppercase tracking-[-0.04em]">
              Donation contact
            </h2>
            <p className="mt-4 leading-7 text-white/60">
              Send donation, sponsorship, or in-kind contribution questions to:
            </p>
            <a
              href="https://www.instagram.com/vaniervikingsrobotics"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#e5bd57] pb-2 text-lg font-bold text-[#e5bd57]"
            >
              @vaniervikingsrobotics <ExternalLink className="h-4 w-4" />
            </a>
            <div className="mt-10 border-t border-white/15 pt-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#e5bd57]" />
                <p className="text-sm leading-6 text-white/55">
                  Do not send money directly to individual students or team members. Use only the payment route confirmed by the school.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Building2, title: "Financial support", copy: "Competition fees, materials, tools, and travel costs." },
              { icon: Wrench, title: "In-kind support", copy: "Materials, manufacturing time, equipment, or technical services." },
              { icon: Users, title: "Professional support", copy: "Approved technical advice, workshops, or school-coordinated mentoring." },
            ].map((item) => (
              <article key={item.title} className="border-t-2 border-[#e5bd57] pt-7">
                <item.icon className="h-7 w-7 text-[#6f102c]" />
                <h2 className="mt-6 font-[Archivo_Black] text-xl uppercase text-[#310916]">{item.title}</h2>
                <p className="mt-3 leading-7 text-[#694c54]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-[#fbf7ef] px-5 py-20 text-center">
      <div>
        <p className="font-mono text-sm font-bold tracking-[0.2em] text-[#9b7321]">404</p>
        <h1 className="mt-5 font-[Archivo_Black] text-5xl uppercase text-[#310916]">Page not found</h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-[#310916] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
        >
          Return home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "robot", Component: RobotPage },
      { path: "support", Component: SupportPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
