import { authClient } from '#/lib/auth-client'
import CardNav from './CardNav'
import logo from '/logo192.png'

export default function Header() {
  const { data: session } = authClient.useSession()

  // const items = [
  //   { label: 'Home', href: '/' },
  //   ...(session
  //     ? [
  //         { label: 'About', href: '/about' },
  //         { label: 'Logout', href: '/logout' },
  //       ]
  //     : [
  //         { label: 'Login', href: '/login' },
  //         { label: 'Sign Up', href: '/sign-up' },
  //       ]),
  // ]

  const items = [
    {
      label: 'Home',
      bgColor: '#1f2937',
      textColor: '#fff',
      links: [
        { label: 'Home', href: '/', ariaLabel: 'Go to Home' },
        ...(session
          ? [
              { label: 'About', href: '/about', ariaLabel: 'Go to About' },
              { label: 'Logout', href: '/logout', ariaLabel: 'Logout' },
            ]
          : [
              { label: 'Login', href: '/login', ariaLabel: 'Go to Login' },
              { label: 'Sign Up', href: '/sign-up', ariaLabel: 'Go to Sign Up' },
            ]),
      ],
    },
    {
      label: 'Categories',
      bgColor: '#1f2937',
      textColor: '#fff',
      links: [
        { label: 'Movies', href: '/category/movie/popular', ariaLabel: 'Go to Movies' },
        { label: 'TV Shows', href: '/category/tv/popular', ariaLabel: 'Go to TV Shows' },
      ],
    },
    {
      label: 'Profile',
      bgColor: '#1f2937',
      textColor: '#fff',
      links: session
        ? [
            { label: 'My Profile', href: '/profile', ariaLabel: 'Go to My Profile' },
            { label: 'Settings', href: '/settings', ariaLabel: 'Go to Settings' },
          ]
        : [],
    }
  ]

  return (
    <>
      {/* <PillNav initialLoadAnimation={false} logo={logo} items={items} /> */}
      <CardNav logo={logo} items={items} />
      {/* <ThemeToggle /> */}
    </>
  )
}
