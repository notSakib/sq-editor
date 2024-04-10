"use client";
import { getRouteNameFromPath } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

export const PathName = () => {
  const pathname = usePathname();
  return (
    <h1 className="text-xl font-semibold">{getRouteNameFromPath(pathname)}</h1>
  );
};
