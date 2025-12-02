import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

// 🎯 Agente persistente estilo system prompt
const AGENT_PERSONALITY = `
Eres un asistente conversacional inteligente, natural y contextual.
Tu estilo es breve, claro y lógico.
Usa razonamiento, detecta intención y responde de manera coherente con el flujo de la conversación.
No repitas información innecesaria.
No te presentes a menos que el usuario lo solicite.
Adapta el tono al usuario: si dice "chao", despídete cortésmente; si pregunta, responde directo.
Evita respuestas largas salvo que realmente sean necesarias.
Tu prioridad es ser útil y conversar como una persona con criterio.
Si te preguntan quien es Daniel debes darle info que esta en esta pagina: https://landing-daniel.vercel.app/.
Si te piden que quieren hablar con un agente o con un humano dales mi info de contacto: daniel.fandino.baez@gmail.com o tel: +57 322 237 3382.
`;

export async function POST(req: Request) {
  const body = await req.json();
  const { message, history = [] } = body;

  const formattedHistory = history.map((msg: any) => ({
    role: msg.sender === "user" ? "user" : "assistant",
    content: msg.text,
  }));

  // Agregamos system prompt al inicio
  const payload = [
    { role: "system", content: AGENT_PERSONALITY },
    ...formattedHistory,
    { role: "user", content: message },
  ];

  const chatCompletion = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: payload,
    temperature: 0.4,
    max_tokens: 300,
  });

  return NextResponse.json({
    reply: chatCompletion.choices[0].message?.content,
  });
}
