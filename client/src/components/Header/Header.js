import './Header.scss'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'



export const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    

    const openMenu = () => {
        setOpen(!open)
    }

    const linkTo = (name) => {
        setOpen(!open)
        navigate(name)
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
                    <a class="header-nav__link" href="https://portfolioapps31.blob.core.windows.net/portfolio/Jose Ramirez-Resume.pdf" rel="noreferrer" target="_blank">Resume</a>
                    <Link to="/contact" className="header-nav__link header-nav__link--cta">Contact Me</Link>
                </div>
            </nav>
            <div className={"header__mobile" + (open?' header__mobile--open':'')}>
                <button className="header-nav__link header-nav__link--about" onClick={()=>{linkTo('about')}}>About me</button>
                <button className="header-nav__link" onClick={()=>{linkTo('portfolio')}}>Portfolio</button>
                <a class="header-nav__link" href="https://portfolioapps31.blob.core.windows.net/portfolio/Jose Ramirez-Resume.pdf" rel="noreferrer" target="_blank">Resume</a>
                <button className="header-nav__link header-nav__link--mobile" onClick={()=>{linkTo('contact')}}>Conctact Me</button>
            </div>
        </header>
    )
}