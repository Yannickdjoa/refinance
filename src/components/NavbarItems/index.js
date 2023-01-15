import { CgLogIn } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

export const navItems=[
    {
        id: 1,
        title: <div><AiFillHome/>Home</div>,
        path: './home',
        cName: 'nav-item',
    },
    {
        id: 2,
        title: <div><GrContactInfo/>Contact</div>,
        path: './contact',
        cName: 'nav-item',
    },
    {
        id: 3,
        title: <div><CgLogIn/>Profile</div>,
        path: './profile',
        cName: 'nav-item',
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
]