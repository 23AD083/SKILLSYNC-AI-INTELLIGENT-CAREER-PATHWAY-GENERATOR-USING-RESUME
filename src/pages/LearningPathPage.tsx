import { useState } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronRight, ExternalLink, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

export default function LearningPathPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const learningPath = [
    {
      week: 1,
      title: 'React Fundamentals',
      completed: true,
      modules: [
        { name: 'JSX and Components', completed: true, duration: '2h' },
        { name: 'Props and State', completed: true, duration: '3h' },
        { name: 'Event Handling', completed: true, duration: '2h' },
      ],
      resources: [
        { title: 'React Official Docs', url: '#', type: 'Documentation' },
        { title: 'React Tutorial Video', url: '#', type: 'Video' },
      ],
    },
    {
      week: 2,
      title: 'Advanced React Hooks',
      completed: false,
      modules: [
        { name: 'useState and useEffect', completed: true, duration: '3h' },
        { name: 'useContext and useReducer', completed: true, duration: '4h' },
        { name: 'Custom Hooks', completed: false, duration: '3h' },
      ],
      resources: [
        { title: 'Hooks Deep Dive', url: '#', type: 'Article' },
        { title: 'Custom Hooks Tutorial', url: '#', type: 'Video' },
      ],
    },
    {
      week: 3,
      title: 'State Management',
      completed: false,
      modules: [
        { name: 'Redux Fundamentals', completed: false, duration: '4h' },
        { name: 'Redux Toolkit', completed: false, duration: '3h' },
        { name: 'Context API vs Redux', completed: false, duration: '2h' },
      ],
      resources: [
        { title: 'Redux Documentation', url: '#', type: 'Documentation' },
        { title: 'State Management Guide', url: '#', type: 'Article' },
      ],
    },
    {
      week: 4,
      title: 'Backend with Node.js',
      completed: false,
      modules: [
        { name: 'Express.js Setup', completed: false, duration: '3h' },
        { name: 'RESTful APIs', completed: false, duration: '4h' },
        { name: 'Authentication & JWT', completed: false, duration: '5h' },
      ],
      resources: [
        { title: 'Node.js Best Practices', url: '#', type: 'Article' },
        { title: 'Express.js Tutorial', url: '#', type: 'Video' },
      ],
    },
  ];

  const toggleWeek = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="learning" />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Path</h1>
              <p className="text-gray-600">Personalized roadmap to achieve your career goals</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                  <p className="text-sm text-gray-600">Total Weeks</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">4</div>
                  <p className="text-sm text-gray-600">Weeks Completed</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">45h</div>
                  <p className="text-sm text-gray-600">Learning Hours</p>
                </div>
              </Card>
            </div>

            <Card className="mb-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Overall Progress</h2>
                  <Badge variant="info">Week 2 of 12</Badge>
                </div>
                <ProgressBar progress={33} color="blue" showLabel />
              </div>
            </Card>

            <div className="space-y-4">
              {learningPath.map((week) => (
                <Card key={week.week} className="overflow-hidden">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleWeek(week.week)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        week.completed ? 'bg-emerald-100' : 'bg-blue-100'
                      }`}>
                        {week.completed ? (
                          <CheckCircle className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <Circle className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">Week {week.week}</h3>
                          {week.completed && <Badge variant="success" size="sm">Completed</Badge>}
                        </div>
                        <p className="text-gray-600">{week.title}</p>
                      </div>
                    </div>
                    {expandedWeek === week.week ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>

                  {expandedWeek === week.week && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Modules</h4>
                      <div className="space-y-3 mb-6">
                        {week.modules.map((module, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={module.completed}
                                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                              />
                              <div>
                                <p className={`font-medium ${module.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                  {module.name}
                                </p>
                                <p className="text-sm text-gray-500">{module.duration}</p>
                              </div>
                            </div>
                            <button className="p-2 hover:bg-white rounded-lg transition-colors">
                              <Play className="w-5 h-5 text-blue-600" />
                            </button>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {week.resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource.url}
                            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <div>
                              <p className="font-medium text-gray-900">{resource.title}</p>
                              <Badge variant="info" size="sm" className="mt-1">
                                {resource.type}
                              </Badge>
                            </div>
                            <ExternalLink className="w-5 h-5 text-blue-600" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
