"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { RedirectToSignIn, SignOutButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import Link from "next/link";
import { PlusIcon, User2Icon } from "lucide-react";
import { api } from "../../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { NewDirectMessage } from "./new-direct-message";
import { usePathname } from "next/navigation";

export function DashboardSidebar() {
  const user = useQuery(api.functions.user.get);
  const directMessages = useQuery(api.functions.dm.list);
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/friends">
                    <User2Icon />
                    Friends
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup>
            <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
            <NewDirectMessage />
            <SidebarGroupContent>
              <SidebarMenu>
                {directMessages?.map((dm) => (
                  <SidebarMenuItem key={dm._id}>
                    <SidebarMenuButton asChild isActive={pathname === `/dms.${dm._id}`}>
                      <Link href={`/dms.${dm._id}`}>
                        <Avatar className="size-6">
                          <AvatarImage src={dm.user.image} />
                          <AvatarFallback />
                        </Avatar>
                        <p className="font-medium">{dm.user.username}</p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="flex items-center">
                      <Avatar className="size-6">
                        <AvatarImage src={user?.image} />
                        <AvatarFallback>{user?.username[0]}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{user?.username}</p>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <SignOutButton />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
