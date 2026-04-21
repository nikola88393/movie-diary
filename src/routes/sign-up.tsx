import { createFileRoute, redirect } from '@tanstack/react-router'
import SignUpForm from '#/components/auth/sign-up-form'
import { getSession } from '@/lib/auth.functions'

export const Route = createFileRoute('/sign-up')({
  component: SignUpForm,
  beforeLoad: async () => {
    const session = await getSession()

    if (session) {
      throw redirect({ to: '/' })
    }
  },
})
