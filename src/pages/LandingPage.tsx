import { ArrowRight, Sparkles, Target, TrendingUp, Users, CheckCircle, Star } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function LandingPage() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Resume Parsing',
      description: 'Instantly extract skills, experience, and qualifications from your resume with advanced AI.',
    },
    {
      icon: Target,
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills and get personalized recommendations to bridge the gap.',
    },
    {
      icon: TrendingUp,
      title: 'Smart Job Matching',
      description: 'Get matched with jobs that align with your skills, experience, and career goals.',
    },
    {
      icon: Users,
      title: 'AI Interview Coach',
      description: 'Practice interviews with AI-powered feedback and improve your performance.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      content: 'SkillSync helped me identify the exact skills I needed to land my dream job. The learning path was spot-on!',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      content: 'The AI-powered job matching is incredible. I got 3 interview calls within a week of using SkillSync.',
      rating: 5,
    },
    {
      name: 'Emily Taylor',
      role: 'Data Analyst',
      content: 'The skill gap analyzer showed me exactly what I was missing. I upskilled and got promoted!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="font-bold text-2xl text-gray-900">SkillSync</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Login</Button>
              <Button variant="primary">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Career Platform
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your AI Career Coach for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700"> Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upload your resume, discover skill gaps, get personalized learning paths, and match with your dream job—all powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Upload Resume Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Jobs Matched</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ATS Score: 92%
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Resume parsed successfully</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-700">15 skills identified</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Target className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-gray-700">3 skill gaps found</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">12 jobs matched</span>
                </div>
              </div>
              <Button variant="primary" fullWidth className="mt-6">
                View Full Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to accelerate your career journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover>
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of professionals who transformed their careers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SS</span>
                </div>
                <span className="font-bold text-xl">SkillSync</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered career platform for modern professionals</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Demo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 SkillSync. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
