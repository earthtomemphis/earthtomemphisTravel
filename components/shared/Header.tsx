import Image from 'next/image';
import Link from 'next/link';
import NavItems from './NavItems';

const Header = () => {
	return (
		<header className="w-full border-b">
			<Link href="/" className="w-36">
				{/* <Image
					src="/assets/images/logo.png"
					width={108}
					height={18}
					alt="logo"
				/> */}
				<h1>earthtomemphis</h1>
			</Link>
			<nav className="md:flex-between hidden w-full max-w-xs">
				<NavItems />
			</nav>
		</header>
	);
};

export default Header;
