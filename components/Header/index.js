import Link from 'next/link';

import classes from './header.module.css';

const link = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];
function Header() {
  return (
    <li className={classes.link}>
      {link.map((item, index) => (
        <Link href={item.path} key={index}>
          {item.name}
        </Link>
      ))}
    </li>
  );
}

export default Header;
