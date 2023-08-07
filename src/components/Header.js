"use client";
import React, { useEffect, useState } from "react";
import GlobalMenu from "./Menu/GlobalMenu";
import { useRouter } from "next/navigation";

import HomeIcon from "@mui/icons-material/Home";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const MenuItems = [
  {
    label: "Home",
    path: "#Home",
    icon: <HomeIcon />,
  },
  {
    label: "Section 1",
    path: "#section1",
    icon: <EmojiFoodBeverageIcon />,
  },
  {
    label: "Section2",
    path: "#section2",
    icon: <SchoolIcon />,
  },
  {
    label: "Section3",
    path: "#section3",
    icon: <DeveloperModeIcon />,
  },
];

export default function Header() {
  const [isMoble, setIsMobile] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const { push } = useRouter();
  const calculateScreenSize = () => {
    // if(wi)
    console.log(
      window.innerWidth,
      " this is window width ",
      window.screen.width,
      " this is screen width"
    );
    let screenWidth = window.innerWidth;
    if (screenWidth <= 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setOpenMenu(false);
    }
  };

  const handleClickRedirect = (path) => {
    push("/" + path);
  };

  useEffect(() => {
    calculateScreenSize();
    const scrollCallBack = window.addEventListener("scroll", () => {
      let element = document.getElementById("head-contain");
      let elementContainer = document.getElementById("component-container");
      if (window.pageYOffset > 0) {
        if (element) element.classList.add("sticky-header");
        elementContainer.classList.add("added-sticky-header");
      } else {
        if (element) element.classList.remove("sticky-header");
        elementContainer.classList.remove("added-sticky-header");
        // }
      }
    });

    window.addEventListener("resize", calculateScreenSize);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      window.removeEventListener("resize", calculateScreenSize);
    };
  }, []);
  return (
    <>
        <GlobalMenu
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          isMoble={isMoble}
          handleClickRedirect={handleClickRedirect}
          parentID="head-contain"
          MenuItems={MenuItems}
        />
    </>
  );
}
