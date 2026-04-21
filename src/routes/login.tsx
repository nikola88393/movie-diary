import { createFileRoute, redirect } from '@tanstack/react-router'
import LoginForm from '#/components/auth/login-form'
import { getSession } from '@/lib/auth.functions'

export const Route = createFileRoute('/login')({
  component: LoginForm,
  beforeLoad: async () => {
    const session = await getSession()

    if (session) {
      throw redirect({ to: '/' })
    }
  },
})
