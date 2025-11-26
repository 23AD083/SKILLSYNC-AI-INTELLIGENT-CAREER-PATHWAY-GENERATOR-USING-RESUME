import { useState } from 'react';
import { Target, TrendingUp, AlertCircle, CheckCircle, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

export default function SkillGapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSkills = [
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'CSS/Tailwind', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Express.js', level: 65, category: 'Backend' },
    { name: 'Git', level: 75, category: 'Tools' },
  ];

  const requiredSkills = [
    { name: 'React.js', current: 85, required: 90, gap: 5 },
    { name: 'TypeScript', current: 0, required: 80, gap: 80 },
    { name: 'Node.js', current: 70, required: 85, gap: 15 },
    { name: 'System Design', current: 0, required: 75, gap: 75 },
    { name: 'AWS', current: 0, required: 70, gap: 70 },
    { name: 'Docker', current: 0, required: 65, gap: 65 },
  ];

  const recommendations = [
    {
      skill: 'TypeScript',
      priority: 'high',
      reason: 'Required by 85% of job matches',
      resources: [
        { title: 'TypeScript Official Docs', duration: '10h' },
        { title: 'TypeScript Masterclass', duration: '15h' },
      ],
    },
    {
      skill: 'System Design',
      priority: 'high',
      reason: 'Critical for senior roles',
      resources: [
        { title: 'System Design Primer', duration: '20h' },
        { title: 'Design Patterns Course', duration: '12h' },
      ],
    },
    {
      skill: 'AWS',
      priority: 'medium',
      reason: 'High demand in cloud roles',
      resources: [
        { title: 'AWS Fundamentals', duration: '15h' },
        { title: 'AWS Certified Developer', duration: '25h' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="skills" />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Skill Gap Analysis</h1>
              <p className="text-gray-600">Identify and bridge the gap between your current and target skills</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                  <p className="text-sm text-gray-600">Current Skills</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">5</div>
                  <p className="text-sm text-gray-600">Skills to Learn</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">72%</div>
                  <p className="text-sm text-gray-600">Overall Match</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">85h</div>
                  <p className="text-sm text-gray-600">Learning Time</p>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl font-bold text-gray-900">Your Current Skills</h2>
                </div>
                <div className="space-y-4">
                  {currentSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                          <Badge variant="gray" size="sm">{skill.category}</Badge>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{skill.level}%</span>
                      </div>
                      <ProgressBar progress={skill.level} color={skill.level >= 80 ? 'emerald' : skill.level >= 60 ? 'blue' : 'amber'} />
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">Target Skills Analysis</h2>
                </div>
                <div className="space-y-4">
                  {requiredSkills.map((skill, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        {skill.gap === 0 ? (
                          <Badge variant="success">Complete</Badge>
                        ) : skill.gap > 50 ? (
                          <Badge variant="error">Gap: {skill.gap}%</Badge>
                        ) : (
                          <Badge variant="warning">Gap: {skill.gap}%</Badge>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Current: {skill.current}%</span>
                          <span>Required: {skill.required}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full flex">
                            <div
                              className="bg-emerald-500"
                              style={{ width: `${(skill.current / skill.required) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">Personalized Recommendations</h2>
              </div>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className={`w-6 h-6 mt-1 ${
                          rec.priority === 'high' ? 'text-red-600' : 'text-amber-600'
                        }`} />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{rec.skill}</h3>
                          <p className="text-sm text-gray-700">{rec.reason}</p>
                        </div>
                      </div>
                      <Badge variant={rec.priority === 'high' ? 'error' : 'warning'} size="sm">
                        {rec.priority.toUpperCase()} PRIORITY
                      </Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      {rec.resources.map((resource, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-900">{resource.title}</span>
                          </div>
                          <span className="text-sm text-gray-600">{resource.duration}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="primary" size="sm">
                      Start Learning
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
