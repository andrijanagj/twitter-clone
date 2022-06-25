import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/*Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        ></Image>
      </div>
      {/*Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active></SidebarMenuItem>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Profile" Icon={UserIcon}></SidebarMenuItem>
        <SidebarMenuItem
          text="More"
          Icon={DotsCircleHorizontalIcon}
        ></SidebarMenuItem>
      </div>

      {/*Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>
      {/*mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
        <img
          className="h-10 w-10 rounded-full xl:mr-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/800px-Circle-icons-profile.svg.png"
        ></img>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Andrijana Gjokaj</h4>
          <p className="text-gray-500">@andrijanan</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-9 hidden xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
