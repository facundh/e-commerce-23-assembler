import { ReactElement, ReactNode } from "react"
import { NavLink as NavLinkReactRouter } from 'react-router-dom';
import './styles.css';

type  ChildProps = {
    children: ReactNode,
    to:string
}
export const NavLink = ({to, children, ...props}:ChildProps):ReactElement => {
    return(
        <NavLinkReactRouter
        {...props}
        className={({isActive}) => {
            return isActive ? 'is-active' : 'is-non-active'
        }}
        to={to}
        >
            {children}
        </NavLinkReactRouter>

    )
}