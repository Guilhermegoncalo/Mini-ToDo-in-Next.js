'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    setTitle('')
    router.refresh() 
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
        className="input"
      />
      <button type="submit" className="btn">Adicionar</button>
    </form>
  )
}