import './Header.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'


export const Header = () => {
    const [open, setOpen] = useState();

    const openMenu = () => {
        setOpen(!open)
    }

    return(
        <header className="header">
            <nav className="header-nav">
                <Link to="/" className="header-nav__link header-nav__link--main">Jose R</Link>
                <div className={"header-nav__menu" + (open? ' header-nav__menu--open': '')} onClick={openMenu} >
                    <span className={"header-nav__menu-bar header-nav__menu-bar--top" + (open? ' header-nav__menu-bar--top-open':'') }></span>
                    <span className={"header-nav__menu-bar header-nav__menu-bar--medium" + (open?' header-nav__menu-bar--medium-open': '')}></span>
                    <span className={"header-nav__menu-bar header-nav__menu-bar--bottom" + (open? ' header-nav__menu-bar--bottom-open':'')}></span>
                </div>
                <div className="header-nav__right">
                    <Link to="/about" className="header-nav__link">About Me</Link>
                    <Link to="/portfolio" className="header-nav__link">Portfolio</Link>
                    <Link to="/" className="header-nav__link">Resume</Link>
                    <Link to="/contact" className="header-nav__link header-nav__link--cta">Contact Me</Link>
                </div>
            </nav>
            <div className={"header__mobile" + (open?' header__mobile--open':'')}>
                <Link to="/about" className="header-nav__link header-nav__link--about">About Me</Link>
                <Link to="/portfolio" className="header-nav__link">Portfolio</Link>
                <Link to="/" className="header-nav__link">Resume</Link>
                <Link to="/" className="header-nav__link header-nav__link--mobile">Contact Me</Link>
            </div>
        </header>
    )
}