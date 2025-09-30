import { NextResponse } from 'next/server'

let tasks: { id: number; title: string; done: boolean }[] = []
let counter = 1

export async function GET() {
  return NextResponse.json(tasks)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newTask = { id: counter++, title: body.title, done: false }
  tasks.push(newTask)
  return NextResponse.json(newTask, { status: 201 })
}

export async function PATCH(req: Request) {
  const body = await req.json()
  const task = tasks.find(t => t.id === body.id)
  if (!task) return NextResponse.json({ error: 'Task not found' }, { status: 404 })
  task.done = !task.done
  return NextResponse.json(task)
}