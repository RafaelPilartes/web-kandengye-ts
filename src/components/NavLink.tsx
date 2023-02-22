import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

export function NavLink({ href, children, ...props }: any) {
  const pathname = useLocation()
  const currentRoute = pathname

  const isActive = currentRoute === href ? 'active' : 'inactive'

  return (
    <a href={href} className={isActive}>
      {children}
    </a>
  )
}
