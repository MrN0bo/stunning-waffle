import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Store, MapPin, Phone, RefreshCw } from "lucide-react";
import { contactInfo, categories } from "../data";

type Message = {
  id: string;
  type: "user" | "bot";
  text: string;
};

const predefinedQA = [
  {
    keywords: ["horario", "hora", "abierto", "cerrado", "cuando abren"],
    answer: "Nuestro horario de atención es de Lunes a Sábado de 8:00 AM a 6:00 PM."
  },
  {
    keywords: ["ubicacion", "donde estan", "direccion", "llegar", "ubicación", "dirección"],
    answer: `Estamos ubicados en ${contactInfo.address}. Puedes ver nuestra ubicación exacta buscando en Google Maps.`
  },
  {
    keywords: ["telefono", "contacto", "llamar", "whatsapp", "numero"],
    answer: `Puedes contactarnos a través de nuestro teléfono o WhatsApp al ${contactInfo.phoneDisplay}. ¡Estaremos encantados de atenderte!`
  },
  {
    keywords: ["productos", "venden", "tienen", "catalogo", "comprar", "categorias"],
    answer: `Ofrecemos una amplia variedad de artículos de segunda mano, incluyendo: ${categories.map(c => c.name).join(", ")}. ¡Visita nuestra tienda para ver más detalles!`
  },
  {
    keywords: ["restauracion", "reparar", "arreglar", "mantenimiento", "restaurar"],
    answer: "Sí, ofrecemos servicios de restauración. Le damos una nueva vida a tus artículos viejos o dañados. Contáctanos por WhatsApp para una cotización."
  },
  {
    keywords: ["quienes somos", "historia", "sobre ustedes"],
    answer: "Somos 'Usados de Primera John', un negocio familiar en Villavicencio dedicado a la compra, restauración y venta de artículos del hogar, bajo el lema: 'Lo bueno no tiene que ser nuevo'."
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", text: "¡Hola! Soy el asistente virtual de Usados de Primera John. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), type: "user", text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simple keyword matching for bot response
    setTimeout(() => {
      let botResponse = "Lo siento, no tengo esa información. Te invitamos a contactarnos directamente a través de WhatsApp para brindarte una mejor atención.";
      
      const lowerInput = userMessage.text.toLowerCase();
      
      for (const qa of predefinedQA) {
        if (qa.keywords.some(kw => lowerInput.includes(kw))) {
          botResponse = qa.answer;
          break;
        }
      }

      if (lowerInput.includes("hola") || lowerInput.includes("buenas") || lowerInput.includes("saludos")) {
        botResponse = "¡Hola! ¿Cómo estás? ¿Tienes alguna pregunta sobre nuestros productos, ubicación o servicios de restauración?";
      } else if (lowerInput.includes("gracias")) {
        botResponse = "¡Con gusto! Estamos para servirte. ¿Hay algo más en lo que pueda ayudarte?";
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), type: "bot", text: botResponse };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSuggestion = (text: string) => {
    setInputValue(text);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-green-700 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Abrir chat"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-200 dark:border-gray-700 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Chat Header */}
        <div className="bg-green-700 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-700 font-bold text-sm">UPJ</div>
            <div>
              <h3 className="font-bold text-sm">Asistente Virtual</h3>
              <p className="text-xs text-green-200">En línea</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-green-100 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-80 bg-gray-50 dark:bg-gray-900 flex flex-col gap-3">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                msg.type === "bot" 
                  ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 self-start rounded-tl-none" 
                  : "bg-green-600 text-white self-end rounded-tr-none"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length < 3 && (
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button onClick={() => handleSuggestion("¿Dónde están ubicados?")} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-1 shrink-0"><MapPin size={12}/> Ubicación</button>
            <button onClick={() => handleSuggestion("¿Qué venden?")} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-1 shrink-0"><Store size={12}/> Productos</button>
            <button onClick={() => handleSuggestion("¿Hacen restauraciones?")} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-1 shrink-0"><RefreshCw size={12}/> Restauración</button>
          </div>
        )}

        {/* Chat Input */}
        <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
}