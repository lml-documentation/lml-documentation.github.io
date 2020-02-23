import Link from 'next/link';

const HeaderLogo = () => (
    <div className="header-logo">
        <Link href="/">
            <a>LML - DOCUMENTATION</a>
        </Link>
    </div>
);

const HeaderNavigation = () => (
    <nav className="header-nav">
        <ul className="header-nav-list">
            <li className="header-nav-title">Navigation:</li>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
        </ul>
    </nav>
);

const Header = () => (
    <header className="header">
        <HeaderLogo />
        <HeaderNavigation />
    </header>
);

export default Header;