import React, { useRef, useState } from 'react'

type Msg = { role: 'user'|'assistant'|'tool'|'system'; content: string }

export default function App() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'system', content: 'You are a helpful assistant.'}
  ])
  const [input, setInput] = useState('')
  const evtSrcRef = useRef<EventSource | null>(null)

  async function send() {
    const payload = {
      provider: 'openai',
      model: 'gpt-4o-mini',
      messages,
      tools: ['searchTickets'],
      structured: null,
      tenantId: 'default'
    }
    // Use fetch + ReadableStream parsing for SSE over POST
    const res = await fetch('/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const reader = res.body!.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')

    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const parts = buffer.split('\n\n')
      buffer = parts.pop() || ''
      for (const chunk of parts) {
        if (chunk.startsWith('data: ')) {
          const json = chunk.slice(6)
          try {
            const delta = JSON.parse(json)
            if (delta.type === 'text-delta') {
              setMessages(prev => {
                const last = prev[prev.length - 1]
                if (last?.role === 'assistant') {
                  const copy = [...prev]
                  copy[copy.length - 1] = { ...last, content: last.content + (delta.text ?? '') }
                  return copy
                } else {
                  return [...prev, { role: 'assistant', content: delta.text ?? '' }]
                }
              })
            }
          } catch {}
        }
      }
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <h1>Enterprise AI Starter</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, minHeight: 320 }}>
        {messages.filter(m => m.role !== 'system').map((m, i) => (
          <div key={i} style={{ padding: '6px 0' }}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message…" style={{ flex: 1, padding: 8 }} />
        <button onClick={send}>Send</button>
      </div>
      <p style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        Powered by Vercel AI SDK (server) • Streaming over SSE • Swap providers without code changes.
      </p>
    </div>
  )
}
