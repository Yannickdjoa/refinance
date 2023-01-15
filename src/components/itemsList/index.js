import { CgLogIn } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

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
        title:'FinanceMarket',
        path: './financeMarket',
        cName: 'sedebar-item',
    },
    {
        id: 2,
        title:'Crypto',
        path: './crypto',
        cName: 'sedebar-item',
    },
    {
        id: 3,
        title: 'FunnyPictures',
        path: './funnyPictures',
        cName: 'sedebar-item',
    },
    {
        id: 4,
        title:'Realestate',
        path: './realestate',
        cName: 'sedebar-item',
    },
    {
        id: 5,
        title:'Ipo',
        path: './ipo',
        cName: 'sedebar-item',
    },
    {
        id: 6,
        title:'Game',
        path: './game',
        cName: 'sedebar-item',
    },
    {
        id: 7,
        title:'ReachPeople',
        path: './reachPeople',
        cName: 'sedebar-item',
    },
    {
        id: 8,
        title:'Motivation',
        path: './motivation',
        cName: 'sedebar-item',
    },
    {
        id: 9,
        title:'MoneyPictures',
        path: './moneyPictures',
        cName: 'sedebar-item',
    },
]
