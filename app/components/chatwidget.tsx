"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll hacia el final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enviar mensaje al backend (Groq + memoria)
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [...messages, userMessage], // memoria basada en history
      }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
  };

  return (
    <>
      {/* Botón flotante redondito */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-3xl"
      >
        💬
      </button>

      {/* Ventana de chat estilo Intercom */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
             style={{ height: "500px" }}>
          
          {/* Encabezado */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl font-semibold">
            Daniel Assistant
          </div>

          {/* Contenedor de mensajes con scroll */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ maxHeight: "400px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? "bg-blue-600 text-white p-2 rounded-xl ml-auto max-w-[85%]"
                    : "bg-gray-100 text-gray-900 p-2 rounded-xl mr-auto max-w-[85%]"
                }
              >
                {msg.content}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              placeholder="Escribe aquí…"
              className="flex-1 border rounded-xl px-3 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
