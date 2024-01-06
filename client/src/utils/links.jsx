import React from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
    { 
    text: 'Home', 
    path: '.', 
    icon: <FaWpforms /> 
},
    { 
    text: 'Tasks', 
    path: 'Tasks', 
    icon: <MdQueryStats /> 
},
    { 
    text: 'Content', 
    path: 'Content', 
    icon: <IoBarChartSharp /> 
},
    { 
    text: 'profile', 
    path: 'profile', 
    icon: <ImProfile /> 
},
    { 
    text: 'admin', 
    path: 'admin', 
    icon: <MdAdminPanelSettings /> 
},
  ];
  
  export default links;