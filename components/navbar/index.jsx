import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className='bg-gray-100 w-28 h-screen border-r border-gray-300 flex flex-col items-center py-6 justify-between'>
      <div>
        <div className='rounded-full w-9 h-9 bg-primary flex items-center justify-center cursor-pointer hover:opacity-90 mx-auto'>
          <FontAwesomeIcon icon={faBars} className='text-white text-lg' />
        </div>
        <NavLinks />
      </div>
      <Link
        href='/'
        className='hover:opacity-80 cursor-pointer w-10 h-10 relative'
      >
        <Logo />
      </Link>
    </nav>
  );
};

export default Navbar;
