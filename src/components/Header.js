"use client"
import React,{useEffect} from "react"
import DestopMenu from "./Menu/DesktopMenu"


const MenuItems=[
    {
        label:"Home",
        path:"#Home"
    },
    {
        label:"Section 1",
        path:"#section1"
    },
    {
        label:"Section2",
        path:"#section2"
    },
    {
        label:"Section3",
        path:"#section3"
    }
]

export default function Header(){

    useEffect(()=>{
        
        let element = document.getElementById('head-contain');
        let elementContainer = document.getElementById('component-container');

        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                if (element) element.classList.add("sticky-header");
                elementContainer.classList.add("added-sticky-header");
            } else {
                if (element) element.classList.remove("sticky-header");
                elementContainer.classList.remove("added-sticky-header");
                // }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };

    },[])
    return(<>
    
    <DestopMenu desktopID="head-contain" MenuItems={MenuItems}/>
    </>)
}