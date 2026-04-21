import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/profile/list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/profile/list"!</div>
}
