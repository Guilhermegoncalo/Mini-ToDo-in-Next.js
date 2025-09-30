'use client'
import { useRouter } from 'next/navigation'

type Task = { id: number; title: string; done: boolean }

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const router = useRouter()

  async function toggleTask(id: number) {
    await fetch('/api/tasks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    router.refresh()
  }

  return (
    <ul className="list">
      {tasks.map(task => (
        <li key={task.id} className={task.done ? 'done' : ''}>
          <span>{task.title}</span>
          <button onClick={() => toggleTask(task.id)} className="btn-small">
            {task.done ? 'Desfazer' : 'Concluir'}
          </button>
        </li>
      ))}
    </ul>
  )
}