import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">SS</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Start your career transformation today</p>
        </div>

        <form className="space-y-5">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            icon={<User className="w-5 h-5" />}
            required
          />

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

          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5" />}
            required
          />

          <div className="flex items-start gap-2">
            <input type="checkbox" className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" required />
            <label className="text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button variant="primary" size="lg" fullWidth>
            Create Account
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
