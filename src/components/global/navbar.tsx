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
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-3">
            <span className="font-bold text-xl">LOGO</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant="ghost"
                onClick={() => navigate(route.path)}
                className="px-4"
              >
                {route.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <DarkModeButton />
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="-mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-6">
                <div className="flex flex-col gap-3 pt-4">
                  {routes.map((route) => (
                    <Button
                      key={route.path}
                      variant="ghost"
                      onClick={() => navigate(route.path)}
                      className="w-full justify-start"
                    >
                      {route.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
