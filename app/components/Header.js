import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <span>itProger</span>
            <nav>
                <div><Link href='/'>Home</Link></div>
                <div><Link href='/about'>About</Link></div>
            </nav>
        </header>
    );
};

export default Header;