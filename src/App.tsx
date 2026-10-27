import { useState } from 'react'
import type { FormEvent } from 'react'
import { topics, getDemoReading } from './features/reading/demo'
import type { Topic } from './features/reading/demo'
import './App.css'

function App() {
  const [topic, setTopic] = useState<Topic>('오늘의 운세')
  const [question, setQuestion] = useState('')
  const [reading, setReading] = useState<{ question: string; answer: string } | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!question.trim()) return
    setReading({ question: question.trim(), answer: getDemoReading(topic) })
  }

  return (
    <main className="app">
      <header><a href="/" className="wordmark">sibyl<span>시빌</span></a><span className="badge">미리보기</span></header>
      <section className="intro" aria-labelledby="intro-title">
        <div className="moon" aria-hidden="true">☾</div>
        <p className="eyebrow">마음이 머무는 작은 신당</p>
        <h1 id="intro-title">어떤 고민을<br />품고 오셨나요?</h1>
        <p className="description">쉽게 꺼내지 못한 마음도 괜찮아요.<br />AI 무당 시빌에게 살며시 들려주세요.</p>
      </section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>무엇이 궁금한가요?</legend>
          <div className="topics">{topics.map((item) => <button key={item} type="button" aria-pressed={topic === item} className={topic === item ? 'selected' : ''} onClick={() => { setTopic(item); setReading(null) }}>{item}</button>)}</div>
        </fieldset>
        <label htmlFor="question">마음속 질문</label>
        <textarea id="question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="예: 새로운 일을 시작할 용기가 필요해요." maxLength={500} required rows={4} aria-describedby="question-help" />
        <div className="input-help" id="question-help"><span>이름이나 연락처는 적지 않아도 돼요.</span><span>{question.length}/500</span></div>
        <button className="submit" disabled={!question.trim()}>시빌의 한마디 듣기 <span aria-hidden="true">↗</span></button>
      </form>
      <div aria-live="polite" aria-atomic="true">{reading && <section className="reading"><p className="eyebrow">시빌의 한마디 · 예시 응답</p><h2>{reading.question}</h2><p>{reading.answer}</p><p className="demo-note">선택한 주제에 따른 고정 예시예요. 실제 AI 상담은 아직 연결되지 않았어요.</p></section>}</div>
      <footer>운세는 가볍게, 선택은 나답게.<br />시빌은 재미와 자기 성찰을 위한 콘텐츠예요.</footer>
    </main>
  )
}

export default App
