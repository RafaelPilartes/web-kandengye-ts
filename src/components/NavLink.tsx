import { Link, useLocation } from 'react-router-dom'

export function NavLink({ href, children, ...props }: any) {
  const { pathname } = useLocation()

  const isActive = pathname === href ? 'active' : 'inactive'

  return (
    <Link to={href} className={isActive} {...props}>
      {children}
    </Link>
  )
}

