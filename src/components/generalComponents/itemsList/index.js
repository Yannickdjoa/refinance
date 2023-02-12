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
        path: './home',
        cName: 'nav-item',
        icon: <AiFillHome/>,
    },
    {
        id: 2,
        title: 'Contact',
        path: './contact',
        cName: 'nav-item',
        icon: <GrContactInfo/>,
    },
    {
        id: 3,
        title: 'Profile',
        path: './profile',
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
        path: './crypto',
        cName: 'sedebar-item',
        icon: <FaBitcoin/>
    },
    {
        id: 3,
        title: 'Relax Time',
        path: './funnyPictures',
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
        path: './game',
        cName: 'sedebar-item',
        icon: <FaGamepad/>
    },
    {
        id: 6,
        title:'Investments',
        path: './reachPeople',
        cName: 'sedebar-item',
        icon: <GiTakeMyMoney/>
    },
    {
        id: 7,
        title:'Inspiration',
        path: './motivation',
        cName: 'sedebar-item',
        icon: <GiInspiration/>
    },
    {
        id: 9,
        title:'Money',
        path: './moneyPictures',
        cName: 'sedebar-item',
        icon: <GrMoney/>
    },
]
