import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-blue-200  shadow dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center" to="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden space-x-4 lg:flex">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/ticket">
            Ticket
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/dashboard">
            DashBoard
          </Link>
        </nav>
        <Button>Hola</Button>
      </div>
    </header>
  );
}

function MountainIcon(prop:any) {
  return (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}