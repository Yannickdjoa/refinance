import { CgLogIn } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { GrContactInfo, 
         GrMoney
       } from "react-icons/gr";
import {BsCurrencyBitcoin, BsFillEmojiLaughingFill} from "react-icons/bs";
import {MdRealEstateAgent} from "react-icons/md";
import {FaGamepad, FaBitcoin} from "react-icons/fa";
import{GiInspiration} from "react-icons/gi";
import {GiTakeMyMoney} from "react-icons/gi";




export const navItems=[
    {
        id: 1,
        title: 'Home',
        path: './',
        cName: 'nav-item',
        icon: <AiFillHome/>,
    },
    {
        id: 2,
        title: 'Contact',
        path: './',
        cName: 'nav-item',
        icon: <GrContactInfo/>,
    },
    {
        id: 3,
        title: 'Profile',
        path: './',
        cName: 'nav-item',
        icon: <CgLogIn/>,
    },
];
export const profileItems=[
    {
        id: 1,
        title: 'Signup',
        path: './signup',
        cName: 'profile-item',
    },
    {
        id: 2,
        title: 'Login',
        path: './login',
        cName: 'profile-item',
    },
];

export const SideBarItems=[
    {
        id: 1,
        title:'Crypto Market',
        path: './postsList',
        cName: 'sedebar-item',
        icon: <BsCurrencyBitcoin/>
        
    },
    {
        id: 2,
        title:'Bitcoin News',
        path: './bitcoinnews',
        cName: 'sedebar-item',
        icon: <FaBitcoin/>
    },
    {
        id: 3,
        title: 'Relax Time',
        path: './relaxation',
        cName: 'sedebar-item',
        icon: <BsFillEmojiLaughingFill/>
    },
    {
        id: 4,
        title:'Realestate',
        path: './realestate',
        cName: 'sedebar-item',
        icon: <MdRealEstateAgent/>
    },
  
    {
        id: 5,
        title:'Game',
        path: './games',
        cName: 'sedebar-item',
        icon: <FaGamepad/>
    },
    {
        id: 6,
        title:'Investments',
        path: './investments',
        cName: 'sedebar-item',
        icon: <GiTakeMyMoney/>
    },
    {
        id: 7,
        title:'Inspiration',
        path: './inspirations',
        cName: 'sedebar-item',
        icon: <GiInspiration/>
    },
    {
        id: 9,
        title:'Money',
        path: './money',
        cName: 'sedebar-item',
        icon: <GrMoney/>
    },
]
