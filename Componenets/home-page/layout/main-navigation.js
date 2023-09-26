import Link from "next/link"; //lets you create clickable links between different pages of your website, making navigation easier for users.
import classes from './main-navigation.module.css';
import Logo from "./logo";

function MainNavigation() {
    return (
        <header className={classes.header}> 
            <Link href="/">
             
                    <Logo />
            
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts"> Posts </Link></li>
                    <li><Link href="/contact"> Contact </Link></li>
                </ul>
            </nav>

        </header>
    );
}

export default MainNavigation;