import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Menu, Github } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { PathName } from "@/components/common/pathName";
import SideBar from "@/components/common/sidebar";

export default async function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] ">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen fixed md:w-[220px]  flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[53px] lg:px-6">
            <Link
              href="/query"
              className="flex items-center gap-2 font-semibold"
            >
              <span className="">✨ Atlan</span>
            </Link>
          </div>
          <div className="flex-1">
            <SideBar />
          </div>
          <div className="mt-auto p-2">
            <Card className="cursor-pointer">
              <CardContent className="p-2 flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <p className="text-sm">Sakib Khan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="mt-auto p-4">
                <Card className="cursor-pointer">
                  <CardContent className="p-2 flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <p>Sakib Khan</p>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <nav className="sticky top-0 z-40 flex h-[53px] items-center gap-1 md:border-b px-4 bg-background">
          <div className="flex justify-between items-center w-full">
            <PathName />
            <a
              target="_blank"
              href="https://github.com/notSakib/sq-editor"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button variant="link" className="cursor-pointer text-md">
                <Github className="h-4 w-4 mr-1" /> Github
              </Button>
            </a>
          </div>
        </nav>
        <main className="flex flex-1 h-screen overflow-auto flex-col gap-4 px-4 py-2">
          {children}
        </main>
      </div>
    </div>
  );
}
