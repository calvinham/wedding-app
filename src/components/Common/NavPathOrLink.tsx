import { Link, NavLink } from 'react-router-dom';

import { WithChildren } from '@/lib/types';

export type INavPathOrLink = { path: string; url?: string } & WithChildren;

export default function NavPathOrLink<T extends INavPathOrLink>({
  path,
  url,
  children,
}: T): JSX.Element {
  if (url) {
    return (
      <Link
        to={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {children}
      </Link>
    );
  }

  return (
    <NavLink to={path} style={{ textDecoration: 'none' }}>
      {children}
    </NavLink>
  );
}
