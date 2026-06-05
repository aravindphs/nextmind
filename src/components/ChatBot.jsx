import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { intents, WELCOME_MESSAGE, QUICK_REPLIES, FALLBACK, QUICK_REPLY_ACTIONS } from '../data/chatData';
import './ChatBot.css';

function getBotReply(input) {
  const text = input.toLowerCase().trim();

  // Check quick reply special actions first
  if (QUICK_REPLY_ACTIONS[input]) {
    return { answer: QUICK_REPLY_ACTIONS[input], quickReplies: ['What courses do you offer?', 'Book a free demo'] };
  }

  // Score each intent by keyword matches
  let best = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (text.includes(kw)) score += kw.split(' ').length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best && bestScore > 0) return best;
  return { answer: FALLBACK, quickReplies: ['What courses do you offer?', 'Book a free demo', 'Talk to team'] };
}

function formatAnswer(text) {
  return text
    .split('\n')
    .map((line, i) => {
      const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return `<span key="${i}">${bold}</span>`;
    })
    .join('<br />');
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: WELCOME_MESSAGE, quickReplies: QUICK_REPLIES },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;
    setInput('');
    setMessages((m) => [...m, { from: 'user', text: userText }]);
    setTyping(true);

    const reply = getBotReply(userText);
    const delay = 600 + Math.min(reply.answer.length * 2, 1200);

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: reply.answer,
          quickReplies: reply.quickReplies,
          whatsapp: reply.whatsapp,
        },
      ]);
      if (!open) setUnread((n) => n + 1);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating icon */}
      <button
        className={`chatbot-fab${open ? ' chatbot-fab--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat support"
      >
        {open ? (
          <X size={22} />
        ) : (
          <>
            {/* Headset / support SVG icon */}
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
            {unread > 0 && <span className="chatbot-fab__badge">{unread}</span>}
          </>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chatbot">
          {/* Header */}
          <div className="chatbot__header">
            <div className="chatbot__header-left">
              <div className="chatbot__avatar">
                <img src="/logo.png" alt="Zeta Nextmind" />
              </div>
              <div>
                <p className="chatbot__name">Zeta Support</p>
                <p className="chatbot__status"><span className="chatbot__dot" />Online — typically replies instantly</p>
              </div>
            </div>
            <button className="chatbot__close" onClick={() => setOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot__msg chatbot__msg--${msg.from}`}>
                {msg.from === 'bot' && (
                  <div className="chatbot__bot-avatar">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  </div>
                )}
                <div className="chatbot__bubble-wrap">
                  <div
                    className="chatbot__bubble"
                    dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                  {msg.quickReplies && (
                    <div className="chatbot__quick-replies">
                      {msg.quickReplies.map((qr) => (
                        <button key={qr} className="chatbot__qr" onClick={() => sendMessage(qr)}>
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                  {msg.whatsapp && (
                    <a
                      href="https://wa.me/917356764410?text=Hi!%20I%20want%20to%20book%20a%20free%20demo%20class."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chatbot__wa-btn"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      Chat on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chatbot__msg chatbot__msg--bot">
                <div className="chatbot__bot-avatar">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div className="chatbot__bubble chatbot__bubble--typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chatbot__footer">
            <input
              ref={inputRef}
              className="chatbot__input"
              placeholder="Ask anything about our courses…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="chatbot__send"
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
