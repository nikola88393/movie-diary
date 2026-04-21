import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/profile/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/profile/overview"!</div>
}
