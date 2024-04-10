"use client";
import { BriefcaseBusiness, FileBadge, RectangleEllipsis } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const routes = [
  {
    name: "Query",
    pathname: "/query",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
  },
  {
    name: "Data Generator",
    pathname: "/data-generator",
    icon: <FileBadge className="h-4 w-4" />,
  },

  {
    name: "Settings",
    pathname: "/settings",
    icon: <RectangleEllipsis className="h-4 w-4" />,
  },
];

function SideBar() {
  const pathname = usePathname();
  return (
    <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
      {routes.map((route, index) => {
        const isActive = pathname === route.pathname;
        return (
          <Link
            key={index}
            href={route.pathname}
            className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary hover:bg-muted ${
              isActive ? "text-primary bg-slate-200 " : "text-muted-foreground"
            }`}
          >
            {route.icon}
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default SideBar;
