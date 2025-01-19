import { Menu } from "lucide-react";
import { DarkModeButton } from "../darkmode-button";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useNavigate } from "react-router-dom";

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="z-[60] fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">LOGO</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant="ghost"
                onClick={() => navigate(route.path)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
          <DarkModeButton />

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                {routes.map((route) => (
                  <Button
                    key={route.path}
                    variant="ghost"
                    onClick={() => navigate(route.path)}
                  >
                    {route.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
