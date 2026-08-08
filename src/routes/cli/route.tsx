import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cli')({
  component: CliDocs,
})

function CliDocs() {
  return <div>Hello "/cli"!</div>
}
