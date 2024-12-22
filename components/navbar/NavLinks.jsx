'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  {
    href: '/planner',
    icon: faSeedling,
    label: 'Planner'
  }
];

const NavLinks = () => {
  const currentPath = usePathname();

  return (
    <ul className='mt-12'>
      {navLinks.map(({ href, icon, label }) => (
        <li key={label} className='hover:opacity-85 cursor-pointer'>
          <Link
            href={href}
            className={currentPath === href ? 'text-primary' : 'text-white'}
          >
            <FontAwesomeIcon icon={icon} className='w-full text-xl' />
            <span className='block mt-1 text-base font-normal'>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
