import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/tasks', { cache: 'no-store' })
  const tasks = await res.json()

  return (
    <div>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  )
}
