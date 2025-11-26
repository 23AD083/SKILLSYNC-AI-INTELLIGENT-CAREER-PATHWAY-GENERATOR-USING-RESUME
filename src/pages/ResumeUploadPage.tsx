import { useState } from 'react';
import { Upload, FileText, CheckCircle, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';

export default function ResumeUploadPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  const parsedSkills = [
    'React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js',
    'RESTful APIs', 'Git', 'Agile', 'CSS', 'HTML5',
    'JavaScript', 'Problem Solving', 'Team Collaboration'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="upload" />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Your Resume</h1>
              <p className="text-gray-600">Let our AI analyze your resume and extract key skills</p>
            </div>

            {uploadState === 'idle' && (
              <Card className="mb-8">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Drag and drop your resume here</h3>
                  <p className="text-gray-600 mb-6">or click to browse from your computer</p>
                  <Button variant="primary" size="lg">
                    <Upload className="w-5 h-5" />
                    Choose File
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">Supports PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </Card>
            )}

            {uploadState === 'uploading' && (
              <Card className="mb-8">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Uploading Resume...</h3>
                  <p className="text-gray-600 mb-6">Please wait while we process your file</p>
                  <div className="max-w-md mx-auto">
                    <ProgressBar progress={uploadProgress} color="blue" showLabel />
                  </div>
                </div>
              </Card>
            )}

            {uploadState === 'success' && (
              <>
                <Card className="mb-8 border-2 border-emerald-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">Resume Uploaded Successfully!</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">Your resume has been parsed and analyzed by our AI</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">resume_john_doe.pdf</span>
                        </div>
                        <div className="text-gray-500">2.4 MB</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                      <p className="text-sm text-gray-600">ATS Score</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">13</div>
                      <p className="text-sm text-gray-600">Skills Found</p>
                    </div>
                  </Card>
                  <Card>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-600 mb-2">5</div>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </Card>
                </div>

                <Card className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Extracted Skills</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {parsedSkills.map((skill, index) => (
                      <Badge key={index} variant="primary" size="lg">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="primary" fullWidth>
                      View Full Analysis
                    </Button>
                    <Button variant="outline" fullWidth>
                      Upload Another
                    </Button>
                  </div>
                </Card>

                <Card>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Resume Preview</h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
                      <p className="text-gray-600">Senior Full Stack Developer</p>
                    </div>
                    <div className="space-y-4 text-sm text-gray-700">
                      <div>
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <p>john.doe@email.com | (555) 123-4567</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Summary</h4>
                        <p>Experienced Full Stack Developer with 5+ years building scalable web applications...</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Experience</h4>
                        <p className="font-medium">Senior Developer at Tech Corp</p>
                        <p className="text-gray-600">2020 - Present</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </>
            )}

            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setUploadState('uploading');
                  setUploadProgress(0);
                  const interval = setInterval(() => {
                    setUploadProgress(prev => {
                      if (prev >= 100) {
                        clearInterval(interval);
                        setUploadState('success');
                        return 100;
                      }
                      return prev + 10;
                    });
                  }, 200);
                }}
              >
                Simulate Upload
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
