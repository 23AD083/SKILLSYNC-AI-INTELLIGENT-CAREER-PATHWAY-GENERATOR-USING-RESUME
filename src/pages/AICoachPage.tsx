import { useState } from 'react';
import { Send, Bot, User, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  content: string;
  rating?: 'good' | 'bad' | null;
}

export default function AICoachPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      content: "Hello! I'm your AI Interview Coach. I can help you practice common interview questions, improve your responses, and build confidence. What would you like to work on today?",
      rating: null,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    'Tell me about yourself',
    'What are your strengths?',
    'Describe a challenging project',
    'Why do you want this role?',
  ];

  const improvements = [
    {
      title: 'Use STAR Method',
      description: 'Structure your answers: Situation, Task, Action, Result',
    },
    {
      title: 'Be Specific',
      description: 'Use concrete examples and quantifiable achievements',
    },
    {
      title: 'Show Enthusiasm',
      description: 'Express genuine interest in the role and company',
    },
  ];

  const handleSend = () => {
    if (inputValue.trim()) {
      const newUserMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        content: inputValue,
      };
      setMessages([...messages, newUserMessage]);
      setInputValue('');

      setTimeout(() => {
        const newAiMessage: Message = {
          id: messages.length + 2,
          sender: 'ai',
          content: `Great question! Here's how I would approach answering "${inputValue}": Focus on highlighting your relevant experience and skills. Use specific examples to demonstrate your capabilities. Remember to connect your answer to how you can add value to the role.`,
          rating: null,
        };
        setMessages((prev) => [...prev, newAiMessage]);
      }, 1000);
    }
  };

  const handleRating = (messageId: number, rating: 'good' | 'bad') => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, rating } : msg
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="coach" />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto h-full flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Interview Coach</h1>
              <p className="text-gray-600">Practice interviews and get instant AI-powered feedback</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 flex-1">
              <div className="lg:col-span-2 flex flex-col">
                <Card className="flex-1 flex flex-col" padding="none">
                  <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'ai'
                            ? 'bg-gradient-to-br from-blue-600 to-blue-700'
                            : 'bg-gradient-to-br from-gray-600 to-gray-700'
                        }`}>
                          {message.sender === 'ai' ? (
                            <Bot className="w-6 h-6 text-white" />
                          ) : (
                            <User className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className={`flex-1 max-w-2xl ${message.sender === 'user' ? 'text-right' : ''}`}>
                          <div className={`inline-block p-4 rounded-2xl ${
                            message.sender === 'ai'
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-blue-600 text-white'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                          {message.sender === 'ai' && (
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => handleRating(message.id, 'good')}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  message.rating === 'good'
                                    ? 'bg-emerald-100 text-emerald-600'
                                    : 'hover:bg-gray-100 text-gray-400'
                                }`}
                              >
                                <ThumbsUp className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleRating(message.id, 'bad')}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  message.rating === 'bad'
                                    ? 'bg-red-100 text-red-600'
                                    : 'hover:bg-gray-100 text-gray-400'
                                }`}
                              >
                                <ThumbsDown className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setInputValue(suggestion)}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask a practice question or request feedback..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button onClick={handleSend} variant="primary" className="px-6">
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    <h2 className="text-lg font-bold text-gray-900">Session Stats</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Questions Practiced</span>
                      <span className="text-2xl font-bold text-blue-600">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avg Response Score</span>
                      <span className="text-2xl font-bold text-emerald-600">8.5/10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Session Time</span>
                      <span className="text-2xl font-bold text-amber-600">45m</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Improvement Tips</h2>
                  <div className="space-y-3">
                    {improvements.map((tip, index) => (
                      <div key={index} className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h3>
                        <p className="text-xs text-gray-700">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    <Button variant="outline" fullWidth size="sm">
                      View Past Sessions
                    </Button>
                    <Button variant="outline" fullWidth size="sm">
                      Export Progress
                    </Button>
                    <Button variant="outline" fullWidth size="sm">
                      Schedule Mock Interview
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
