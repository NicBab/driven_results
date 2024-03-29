import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Services",
        path: '/services',
        icon: <FaIcons.FaWrench/>,
        cName: 'nav-text'
    },
    {
        title: "About",
        path: '/about',
        icon: <AiIcons.AiFillInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: "Contact",
        path: '/contact',
        icon: <AiIcons.AiFillPhone />,
        cName: 'nav-text'
      }
]