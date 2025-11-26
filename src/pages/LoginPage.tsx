import { Mail, Lock, ArrowRight } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">SS</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your career journey</p>
        </div>

        <form className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            icon={<Mail className="w-5 h-5" />}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5" />}
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Forgot password?
            </a>
          </div>

          <Button variant="primary" size="lg" fullWidth>
            Sign In
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up for free
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
