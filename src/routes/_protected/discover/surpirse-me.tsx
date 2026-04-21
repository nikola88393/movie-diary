import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/discover/surpirse-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/discover/discover"!</div>
}
