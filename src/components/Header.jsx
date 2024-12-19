import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  Clapperboard,
  Download,
  EllipsisVertical,
  Home,
  Plus,
  Search,
  Star,
  Tv,
} from "lucide-react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: <Home />,
    },
    {
      name: "SEARCH",
      icon: <Search />,
    },
    {
      name: "WATCH LIST",
      icon: <Plus />,
    },
    {
      name: "DOWNLOAD",
      icon: <Download />,
    },
    {
      name: "ORIGINALS",
      icon: <Star />,
    },
    {
      name: "MOVIES",
      icon: <Clapperboard />,
    },
    {
      name: "SERIES",
      icon: <Tv />,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-8">
        <img src={logo} alt="" className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden  md:flex gap-8">
          {menu.map((item, index) => (
            <div key={index}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>
        <div className="flex md:hidden text-center gap-[45px] p-2 fixed bottom-0 ">
          {menu.map(
            (item, index) =>
              index < 4 && (
                <div key={index}>
                  <HeaderItem name={""} Icon={item.icon} />
                </div>
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={<EllipsisVertical />} />
          </div>
          {toggle ? (
            <div className="absolute right-[30px] bottom-[70px] mt-3 bg-[#0f1014] border-[1px] border-gray-700 p-3">
              {menu.map(
                (item, index) =>
                  index > 3 && (
                    <div key={index}>
                      <HeaderItem name={item.name} Icon={item.icon} />
                    </div>
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="https://myportfolio-laxminarayan.netlify.app/images/img1.png"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
