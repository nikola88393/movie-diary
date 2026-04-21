import { authClient } from '#/lib/auth-client'
import PillNav from './PillNav'
import logo from '/logo192.png'

export default function Header() {
  const { data: session } = authClient.useSession()

  const items = [
    { label: 'Home', href: '/' },
    ...(session
      ? [
          { label: 'About', href: '/about' },
          { label: 'Logout', href: '/logout' },
        ]
      : [
          { label: 'Login', href: '/login' },
          { label: 'Sign Up', href: '/sign-up' },
        ]),
  ]

  return (
    // <div className="relative mb-8 h-18">
      <PillNav initialLoadAnimation={false} logo={logo} items={items} />
    // </div>
  )
}
