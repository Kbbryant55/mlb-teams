import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Link
      href={"/"}
      className="flex pt-3 pb-5 items-center cursor-pointer hover:scale-105 transition ease-in-out"
    >
      <img
        alt=""
        className="mr-2 h-[40px] w-[40px] relative top-[2px]"
        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/mlb.png&amp;w=64&amp;h=64&amp;scale=crop&amp;cquality=40&amp;location=origin"
      />
      <h1 className="text-xl font-extrabold" data-testid="header">
        Major League Baseball
      </h1>
    </Link>
  );
};

export default Header;
