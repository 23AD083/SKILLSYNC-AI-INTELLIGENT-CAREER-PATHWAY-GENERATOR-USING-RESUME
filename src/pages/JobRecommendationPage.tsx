import { useState } from 'react';
import { MapPin, DollarSign, Briefcase, Bookmark, Filter, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function JobRecommendationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      company: 'Google',
      logo: 'G',
      role: 'Senior Frontend Engineer',
      location: 'Mountain View, CA',
      type: 'Full-time',
      salary: '$120K - $180K',
      match: 92,
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
      posted: '2 days ago',
      saved: false,
    },
    {
      id: 2,
      company: 'Microsoft',
      logo: 'M',
      role: 'Full Stack Developer',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110K - $160K',
      match: 88,
      skills: ['React', 'C#', '.NET', 'Azure'],
      posted: '5 days ago',
      saved: true,
    },
    {
      id: 3,
      company: 'Amazon',
      logo: 'A',
      role: 'Software Development Engineer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$115K - $170K',
      match: 85,
      skills: ['JavaScript', 'Python', 'AWS', 'Docker'],
      posted: '1 week ago',
      saved: false,
    },
    {
      id: 4,
      company: 'Meta',
      logo: 'F',
      role: 'Frontend Engineer',
      location: 'Menlo Park, CA',
      type: 'Full-time',
      salary: '$130K - $190K',
      match: 82,
      skills: ['React', 'GraphQL', 'JavaScript', 'Flow'],
      posted: '3 days ago',
      saved: false,
    },
    {
      id: 5,
      company: 'Netflix',
      logo: 'N',
      role: 'Senior UI Engineer',
      location: 'Los Gatos, CA',
      type: 'Full-time',
      salary: '$140K - $200K',
      match: 80,
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      posted: '4 days ago',
      saved: true,
    },
    {
      id: 6,
      company: 'Apple',
      logo: 'A',
      role: 'Software Engineer',
      location: 'Cupertino, CA',
      type: 'Full-time',
      salary: '$125K - $175K',
      match: 78,
      skills: ['Swift', 'JavaScript', 'React', 'iOS'],
      posted: '6 days ago',
      saved: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="jobs" />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Recommendations</h1>
              <p className="text-gray-600">AI-matched jobs based on your skills and experience</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24</div>
                  <p className="text-sm text-gray-600">Total Matches</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">6</div>
                  <p className="text-sm text-gray-600">Saved Jobs</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">87%</div>
                  <p className="text-sm text-gray-600">Avg Match</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                  <p className="text-sm text-gray-600">Applied</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <Card className="lg:w-64 flex-shrink-0">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-gray-700" />
                  <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All Locations</option>
                      <option>Remote</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Washington</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All Levels</option>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" defaultChecked />
                        <span className="text-sm text-gray-700">Full-time</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                        <span className="text-sm text-gray-700">Part-time</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                        <span className="text-sm text-gray-700">Contract</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                    <input type="range" className="w-full" min="0" max="200" />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>$0K</span>
                      <span>$200K+</span>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth>
                    Apply Filters
                  </Button>
                </div>
              </Card>

              <div className="flex-1 space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} hover>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">{job.logo}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.role}</h3>
                            <p className="text-gray-700 font-medium">{job.company}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">{job.match}%</div>
                              <p className="text-xs text-gray-500">Match</p>
                            </div>
                            <button className={`p-2 rounded-lg transition-colors ${
                              job.saved ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                            }`}>
                              <Bookmark className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <TrendingUp className="w-4 h-4" />
                            {job.posted}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="primary" size="sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button variant="primary">Apply Now</Button>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
