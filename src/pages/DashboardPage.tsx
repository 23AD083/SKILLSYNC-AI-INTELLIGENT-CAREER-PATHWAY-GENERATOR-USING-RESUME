import { useState } from 'react';
import { TrendingUp, Target, CheckCircle, Briefcase, BookOpen, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const todayTasks = [
    { id: 1, title: 'Complete React Hooks Module', category: 'Learning', completed: false },
    { id: 2, title: 'Practice Array DSA Problems', category: 'DSA', completed: true },
    { id: 3, title: 'Build REST API Project', category: 'Project', completed: false },
    { id: 4, title: 'Mock Interview Practice', category: 'Interview', completed: false },
  ];

  const jobMatches = [
    { company: 'Google', role: 'Frontend Engineer', match: 92, salary: '$120K - $180K' },
    { company: 'Microsoft', role: 'Full Stack Developer', match: 88, salary: '$110K - $160K' },
    { company: 'Amazon', role: 'Software Engineer', match: 85, salary: '$115K - $170K' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="dashboard" />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
              <p className="text-gray-600">Here's your career progress overview</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge variant="success">+12%</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">92%</h3>
                <p className="text-sm text-gray-600">ATS Score</p>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <Badge variant="info">15 Total</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
                <p className="text-sm text-gray-600">Skills Acquired</p>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-amber-600" />
                  </div>
                  <Badge variant="warning">In Progress</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">67%</h3>
                <p className="text-sm text-gray-600">Learning Path</p>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge variant="primary">New</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">24</h3>
                <p className="text-sm text-gray-600">Job Matches</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Skill Progress</h2>
                    <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                      <option>All Time</option>
                    </select>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">React.js</span>
                        <span className="text-sm font-semibold text-gray-900">85%</span>
                      </div>
                      <ProgressBar progress={85} color="blue" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Node.js</span>
                        <span className="text-sm font-semibold text-gray-900">72%</span>
                      </div>
                      <ProgressBar progress={72} color="emerald" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Data Structures</span>
                        <span className="text-sm font-semibold text-gray-900">60%</span>
                      </div>
                      <ProgressBar progress={60} color="amber" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">System Design</span>
                        <span className="text-sm font-semibold text-gray-900">45%</span>
                      </div>
                      <ProgressBar progress={45} color="red" />
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <Card>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Tasks</h2>
                  <div className="space-y-3">
                    {todayTasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {task.title}
                          </p>
                          <Badge variant="gray" size="sm" className="mt-1">
                            {task.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Top Job Matches</h2>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {jobMatches.map((job, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{job.role}</h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <p className="text-sm text-gray-500 mt-1">{job.salary}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{job.match}%</div>
                        <p className="text-xs text-gray-500">Match</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Learning Path Progress</h2>
                  <Badge variant="info">Week 4/12</Badge>
                </div>
                <div className="mb-6">
                  <ProgressBar progress={67} color="blue" showLabel />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">React Fundamentals</p>
                      <p className="text-xs text-gray-600">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Advanced Hooks</p>
                      <p className="text-xs text-gray-600">In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Target className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">State Management</p>
                      <p className="text-xs text-gray-600">Not Started</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
