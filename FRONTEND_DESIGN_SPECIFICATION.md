# SkillSync - Complete Frontend Design Specification

**AI-Powered Career & Learning Path Platform**

---

## 📋 Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Complete Color System](#complete-color-system)
3. [Typography Scale](#typography-scale)
4. [Spacing & Layout Grid](#spacing--layout-grid)
5. [Component Architecture](#component-architecture)
6. [Animation System](#animation-system)
7. [Screen-by-Screen Specifications](#screen-by-screen-specifications)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Component Code Examples](#component-code-examples)
10. [Navigation Flow](#navigation-flow)

---

## 🎨 Design Philosophy

**Style**: Modern SaaS aesthetic inspired by Linear, Notion, and Vercel
**Approach**: Clean, whitespace-heavy, micro-interaction rich
**Palette**: Professional blue with emerald and amber accents
**Layout**: Grid-based with clear visual hierarchy
**Accessibility**: WCAG 2.1 AA compliant color contrasts

### Core Principles
- **Clarity**: Every element has a clear purpose
- **Consistency**: Unified spacing, typography, and component patterns
- **Feedback**: Instant visual response to user actions
- **Hierarchy**: Clear information architecture through size, weight, and color
- **Efficiency**: Minimal clicks to complete tasks

---

## 🎨 Complete Color System

### Light Mode (Primary)

```css
/* Primary Colors */
--primary-50: #eff6ff
--primary-100: #dbeafe
--primary-200: #bfdbfe
--primary-300: #93c5fd
--primary-400: #60a5fa
--primary-500: #3b82f6
--primary-600: #2563eb  /* Main Brand */
--primary-700: #1d4ed8
--primary-800: #1e40af
--primary-900: #1e3a8a

/* Secondary (Emerald) */
--secondary-50: #ecfdf5
--secondary-100: #d1fae5
--secondary-500: #10b981  /* Success */
--secondary-600: #059669
--secondary-700: #047857

/* Accent (Amber) */
--accent-50: #fffbeb
--accent-100: #fef3c7
--accent-500: #f59e0b  /* Warning */
--accent-600: #d97706
--accent-700: #b45309

/* Neutrals (Gray) */
--gray-50: #f9fafb   /* Surface */
--gray-100: #f3f4f6
--gray-200: #e5e7eb  /* Border */
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280  /* Text Secondary */
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827  /* Text Primary */

/* Semantic Colors */
--success: #10b981
--warning: #f59e0b
--error: #ef4444
--info: #3b82f6

/* Background */
--bg-primary: #ffffff
--bg-secondary: #f9fafb
--bg-tertiary: #f3f4f6
```

### Dark Mode (Optional Implementation)

```css
--bg-primary: #0f172a   /* slate-900 */
--bg-secondary: #1e293b /* slate-800 */
--bg-tertiary: #334155  /* slate-700 */
--text-primary: #f1f5f9 /* slate-100 */
--text-secondary: #94a3b8 /* slate-400 */
```

### Gradient System

```css
/* Gradients for cards, buttons, hero sections */
gradient-blue: from-blue-600 to-blue-700
gradient-emerald: from-emerald-500 to-emerald-600
gradient-purple-blue: from-blue-600 via-purple-600 to-blue-700 (avoid unless requested)
gradient-warm: from-amber-500 to-orange-600
gradient-surface: from-gray-50 to-blue-50
```

---

## 📝 Typography Scale

### Font Family
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale with Tailwind Classes

| Style | Mobile | Tablet | Desktop | Line Height | Use Case |
|-------|--------|--------|---------|-------------|----------|
| **Display** | `text-4xl` | `text-5xl` | `text-6xl` | `leading-tight` | Hero headlines |
| **H1** | `text-3xl` | `text-4xl` | `text-5xl` | `leading-tight` | Page titles |
| **H2** | `text-2xl` | `text-3xl` | `text-4xl` | `leading-snug` | Section headers |
| **H3** | `text-xl` | `text-2xl` | `text-3xl` | `leading-snug` | Card titles |
| **H4** | `text-lg` | `text-xl` | `text-2xl` | `leading-normal` | Subsections |
| **H5** | `text-base` | `text-lg` | `text-lg` | `leading-normal` | Small headers |
| **Body Large** | `text-lg` | `text-lg` | `text-xl` | `leading-relaxed` | Intro text |
| **Body** | `text-base` | `text-base` | `text-base` | `leading-relaxed` | Standard text |
| **Body Small** | `text-sm` | `text-sm` | `text-sm` | `leading-relaxed` | Captions |
| **Caption** | `text-xs` | `text-xs` | `text-xs` | `leading-tight` | Meta info |

### Font Weight Scale
```
Light: font-light (300)
Normal: font-normal (400)
Medium: font-medium (500)
Semibold: font-semibold (600)
Bold: font-bold (700)
Extrabold: font-extrabold (800)
```

### Example Usage
```jsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
  Welcome to SkillSync
</h1>

<p className="text-base md:text-lg text-gray-600 leading-relaxed">
  Your AI-powered career companion
</p>
```

---

## 📐 Spacing & Layout Grid

### Spacing Scale (8px base unit)

```
spacing-0: 0px
spacing-1: 0.25rem (4px)
spacing-2: 0.5rem (8px)   /* xs */
spacing-3: 0.75rem (12px)
spacing-4: 1rem (16px)     /* sm */
spacing-5: 1.25rem (20px)
spacing-6: 1.5rem (24px)   /* md */
spacing-8: 2rem (32px)     /* lg */
spacing-10: 2.5rem (40px)
spacing-12: 3rem (48px)    /* xl */
spacing-16: 4rem (64px)    /* 2xl */
spacing-20: 5rem (80px)
spacing-24: 6rem (96px)    /* 3xl */
```

### Container Widths

```jsx
max-w-sm: 384px    /* Forms, modals */
max-w-2xl: 672px   /* Single column content */
max-w-4xl: 896px   /* Resume upload, forms */
max-w-5xl: 1024px  /* Learning path */
max-w-6xl: 1152px  /* Dashboard cards */
max-w-7xl: 1280px  /* Full app width */
```

### Grid System

**Mobile (< 640px)**
- Single column
- Padding: `px-4` (16px)
- Gap: `gap-4` (16px)

**Tablet (640px - 1024px)**
- 2-4 column grid
- Padding: `px-6` (24px)
- Gap: `gap-6` (24px)

**Desktop (> 1024px)**
- 3-4 column grid
- Padding: `px-8` (32px)
- Gap: `gap-6` or `gap-8` (24-32px)

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Stats cards */}
</div>
```

---

## 🧩 Component Architecture

### Component Hierarchy

```
App
├── Layout Components
│   ├── Navbar (sticky, global)
│   ├── Sidebar (collapsible, desktop sidebar + mobile drawer)
│   └── Footer (landing page only)
│
├── Base Components
│   ├── Button (primary, secondary, outline, ghost, danger)
│   ├── Input (text, email, password, with icons)
│   ├── Card (default, hover, interactive)
│   ├── Badge (variants: primary, success, warning, error, info, gray)
│   ├── ProgressBar (colors: blue, emerald, amber, red)
│   ├── Avatar (user profile circle)
│   ├── Select (dropdown with options)
│   └── Checkbox / Radio
│
├── Composite Components
│   ├── StatCard (icon, value, label, change badge)
│   ├── SkillCard (name, level, progress bar)
│   ├── JobCard (company, role, match score, skills)
│   ├── TaskItem (checkbox, title, category badge)
│   ├── WeekAccordion (expandable learning modules)
│   ├── ChatMessage (user/ai bubbles)
│   └── FileUploadZone (drag & drop)
│
└── Page Components
    ├── LandingPage
    ├── LoginPage
    ├── RegisterPage
    ├── DashboardPage
    ├── ResumeUploadPage
    ├── LearningPathPage
    ├── JobRecommendationPage
    ├── SkillGapPage
    └── AICoachPage
```

---

## ✨ Animation System

### Transition Classes

```css
/* Duration */
transition-fast: transition-all duration-200
transition-normal: transition-all duration-300
transition-slow: transition-all duration-500

/* Easing */
ease-in-out: ease-in-out
ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover Effects

```jsx
// Button hover
className="transform hover:scale-105 hover:shadow-lg transition-all duration-200"

// Card hover
className="hover:shadow-lg hover:scale-[1.02] transition-all duration-200"

// Icon hover
className="hover:text-blue-600 transition-colors duration-200"

// Background hover
className="hover:bg-gray-100 transition-colors duration-200"
```

### Loading States

```jsx
// Skeleton loader
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>

// Spinner
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>

// Progress bar animation
<div className="transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
```

### Entrance Animations

```jsx
// Fade in
className="animate-fade-in opacity-0"

// Slide up
className="transform translate-y-4 opacity-0 transition-all duration-500"

// Scale in
className="transform scale-95 opacity-0 transition-all duration-300"
```

### Micro-interactions

```jsx
// Button active state
className="active:scale-95 transition-transform duration-100"

// Input focus
className="focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"

// Checkbox check
className="checked:bg-blue-600 transition-colors duration-200"
```

---

## 📱 Screen-by-Screen Specifications

---

## 1️⃣ Landing Page

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Navbar (sticky)                        │
├─────────────────────────────────────────┤
│                                         │
│  Hero Section                           │
│  - Headline (Display text)              │
│  - Subtext (Body Large)                 │
│  - CTA Buttons (Primary + Outline)      │
│  - Stats row (3 metrics)                │
│  - Illustration card (right)            │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Features Section (4 cards grid)        │
│  - Icon + Title + Description           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Testimonials Section (3 cards)         │
│  - Star rating + Quote + Name           │
│                                         │
├─────────────────────────────────────────┤
│  Footer                                 │
│  - Links + Logo + Copyright             │
└─────────────────────────────────────────┘
```

### Component Breakdown

**Hero Section**
```jsx
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Column */}
    <div>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700
                      px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Sparkles className="w-4 h-4" />
        AI-Powered Career Platform
      </div>

      {/* Headline */}
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Your AI Career Coach for
        <span className="text-transparent bg-clip-text bg-gradient-to-r
                         from-blue-600 to-blue-700"> Success</span>
      </h1>

      {/* Subtext */}
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Upload your resume, discover skill gaps, get personalized learning paths,
        and match with your dream job—all powered by AI.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" size="lg">
          Upload Resume Now
          <ArrowRight className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="lg">
          Watch Demo
        </Button>
      </div>

      {/* Stats */}
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

    {/* Right Column - Illustration Card */}
    <div className="relative">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8
                      border border-gray-200">
        <div className="absolute -top-4 -right-4 bg-emerald-500 text-white
                        px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          ATS Score: 92%
        </div>
        {/* Feature checklist */}
      </div>
    </div>

  </div>
</section>
```

**Features Section**
```jsx
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
      <p className="text-xl text-gray-600">Everything you need to accelerate your career journey</p>
    </div>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <Card key={index} hover>
          <Icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>

  </div>
</section>
```

### Responsive Behavior
- **Mobile**: Single column, stats stack vertically, buttons full-width
- **Tablet**: 2-column features grid
- **Desktop**: Full 2-column hero, 4-column features

---

## 2️⃣ Login Page

### Layout Structure

```
┌─────────────────────────────────────────┐
│                                         │
│         Centered Card (max-w-md)        │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Logo (centered)                  │  │
│  │  "Welcome Back" (H1)              │  │
│  │  Subtext                          │  │
│  │                                   │  │
│  │  Email Input (with icon)          │  │
│  │  Password Input (with icon)       │  │
│  │                                   │  │
│  │  [Remember Me]  [Forgot Password?]│  │
│  │                                   │  │
│  │  [Sign In Button - Full Width]    │  │
│  │                                   │  │
│  │  "Don't have account? Sign up"    │  │
│  └───────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Component Structure

```jsx
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50
                flex items-center justify-center p-4">

  <Card className="w-full max-w-md">

    {/* Logo & Title */}
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700
                      rounded-2xl flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold text-2xl">SS</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
      <p className="text-gray-600">Sign in to continue your career journey</p>
    </div>

    {/* Form */}
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

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300
                                            rounded focus:ring-2 focus:ring-blue-500" />
          <span className="text-sm text-gray-700">Remember me</span>
        </label>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Forgot password?
        </a>
      </div>

      {/* Submit Button */}
      <Button variant="primary" size="lg" fullWidth>
        Sign In
        <ArrowRight className="w-5 h-5" />
      </Button>

    </form>

    {/* Sign Up Link */}
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
```

### Input States

```jsx
// Default
className="px-4 py-2.5 border border-gray-300 rounded-lg"

// Focus
className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"

// Error
className="border-red-500 focus:ring-red-500"

// Success
className="border-emerald-500 focus:ring-emerald-500"

// Disabled
className="bg-gray-50 text-gray-500 cursor-not-allowed"
```

---

## 3️⃣ Register Page

### Layout (Similar to Login)

```jsx
<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50
                flex items-center justify-center p-4">

  <Card className="w-full max-w-md">

    {/* Logo & Title */}
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700
                      rounded-2xl flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold text-2xl">SS</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
      <p className="text-gray-600">Start your career transformation today</p>
    </div>

    {/* Form with tighter spacing */}
    <form className="space-y-5">

      <Input label="Full Name" type="text" placeholder="John Doe"
             icon={<User className="w-5 h-5" />} required />

      <Input label="Email" type="email" placeholder="you@example.com"
             icon={<Mail className="w-5 h-5" />} required />

      <Input label="Password" type="password" placeholder="••••••••"
             icon={<Lock className="w-5 h-5" />} required />

      <Input label="Confirm Password" type="password" placeholder="••••••••"
             icon={<Lock className="w-5 h-5" />} required />

      {/* Terms Checkbox */}
      <div className="flex items-start gap-2">
        <input type="checkbox" className="w-4 h-4 mt-0.5 text-blue-600
                                          border-gray-300 rounded" required />
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

    {/* Sign In Link */}
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
```

---

## 4️⃣ Dashboard Page

### Layout Structure

```
┌──────────┬──────────────────────────────────────┐
│          │  Navbar (sticky)                     │
│          ├──────────────────────────────────────┤
│          │                                      │
│  Sidebar │  Welcome Header                      │
│          │                                      │
│  (Fixed) │  Stats Grid (4 cards)                │
│          │  ┌────┬────┬────┬────┐               │
│          │  │ATS │Skil│Path│Jobs│               │
│          │  │92% │12  │67% │24  │               │
│          │  └────┴────┴────┴────┘               │
│          │                                      │
│          │  Main Content Grid (2:1)             │
│          │  ┌─────────────────┬──────────────┐  │
│          │  │                 │              │  │
│          │  │  Skill Progress │  Today's     │  │
│          │  │  Chart          │  Tasks       │  │
│          │  │                 │              │  │
│          │  └─────────────────┴──────────────┘  │
│          │                                      │
│          │  Bottom Grid (1:1)                   │
│          │  ┌─────────────────┬──────────────┐  │
│          │  │ Top Job Matches │ Learning     │  │
│          │  │                 │ Path Progress│  │
│          │  └─────────────────┴──────────────┘  │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Component Breakdown

**Stats Cards Grid**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

  {/* Stat Card */}
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

  {/* Repeat for other stats */}

</div>
```

**Skill Progress Section**
```jsx
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
      {skills.map(skill => (
        <div key={skill.name}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm font-semibold text-gray-900">{skill.progress}%</span>
          </div>
          <ProgressBar progress={skill.progress} color="blue" />
        </div>
      ))}
    </div>
  </Card>
</div>
```

**Today's Tasks**
```jsx
<Card>
  <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Tasks</h2>
  <div className="space-y-3">
    {todayTasks.map(task => (
      <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50
                                    rounded-lg hover:bg-gray-100 transition-colors">
        <input type="checkbox" checked={task.completed}
               className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded" />
        <div className="flex-1">
          <p className={`text-sm font-medium ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-900'
          }`}>
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
```

### Responsive Behavior
- **Mobile**: Single column, stats 1x4 grid
- **Tablet**: Stats 2x2, main content stacks
- **Desktop**: Stats 1x4, content 2-column layout

---

## 5️⃣ Resume Upload Page

### Layout Structure

```
┌──────────┬──────────────────────────────────────┐
│          │  Navbar                              │
│          ├──────────────────────────────────────┤
│          │  Page Header                         │
│  Sidebar │                                      │
│          │  ┌────────────────────────────────┐  │
│          │  │                                │  │
│          │  │  Drag & Drop Zone              │  │
│          │  │  (Large, centered, dashed)     │  │
│          │  │                                │  │
│          │  │  [Upload Icon]                 │  │
│          │  │  "Drag and drop your resume"   │  │
│          │  │  [Choose File Button]          │  │
│          │  │  "Supports PDF, DOC (Max 5MB)" │  │
│          │  │                                │  │
│          │  └────────────────────────────────┘  │
│          │                                      │
│          │  --- AFTER UPLOAD SUCCESS ---        │
│          │                                      │
│          │  Success Card (green border)         │
│          │                                      │
│          │  Stats Grid (3 cards: ATS/Skills/Exp)│
│          │                                      │
│          │  Extracted Skills Card               │
│          │  (Badge cloud)                       │
│          │                                      │
│          │  Resume Preview Card                 │
│          │  (Text preview)                      │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Upload Zone (Idle State)

```jsx
<Card className="mb-8">
  <div className="border-2 border-dashed border-gray-300 rounded-xl p-12
                  text-center hover:border-blue-500 transition-colors cursor-pointer">

    <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />

    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Drag and drop your resume here
    </h3>

    <p className="text-gray-600 mb-6">
      or click to browse from your computer
    </p>

    <Button variant="primary" size="lg">
      <Upload className="w-5 h-5" />
      Choose File
    </Button>

    <p className="text-sm text-gray-500 mt-4">
      Supports PDF, DOC, DOCX (Max 5MB)
    </p>

  </div>
</Card>
```

### Upload Progress State

```jsx
<Card className="mb-8">
  <div className="text-center py-8">

    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center
                    justify-center mx-auto mb-4 animate-pulse">
      <FileText className="w-8 h-8 text-blue-600" />
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Uploading Resume...
    </h3>

    <p className="text-gray-600 mb-6">
      Please wait while we process your file
    </p>

    <div className="max-w-md mx-auto">
      <ProgressBar progress={uploadProgress} color="blue" showLabel />
    </div>

  </div>
</Card>
```

### Success State

```jsx
{/* Success Banner */}
<Card className="mb-8 border-2 border-emerald-500">
  <div className="flex items-start gap-4">

    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center
                    justify-center flex-shrink-0">
      <CheckCircle className="w-6 h-6 text-emerald-600" />
    </div>

    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Resume Uploaded Successfully!
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-600 mb-4">
        Your resume has been parsed and analyzed by our AI
      </p>

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

{/* Stats Grid */}
<div className="grid md:grid-cols-3 gap-6 mb-8">
  <Card>
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
      <p className="text-sm text-gray-600">ATS Score</p>
    </div>
  </Card>
  {/* More stat cards */}
</div>

{/* Extracted Skills */}
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
    <Button variant="primary" fullWidth>View Full Analysis</Button>
    <Button variant="outline" fullWidth>Upload Another</Button>
  </div>
</Card>

{/* Resume Preview */}
<Card>
  <h2 className="text-xl font-bold text-gray-900 mb-4">Resume Preview</h2>
  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
    {/* Text content preview */}
  </div>
</Card>
```

---

## 6️⃣ Learning Path Page

### Layout Structure

```
┌──────────┬──────────────────────────────────────┐
│          │  Navbar                              │
│          ├──────────────────────────────────────┤
│          │  Page Header                         │
│  Sidebar │                                      │
│          │  Stats Grid (3 cards)                │
│          │  ┌────────┬────────┬────────┐        │
│          │  │12 Weeks│4 Done  │45h Time│        │
│          │  └────────┴────────┴────────┘        │
│          │                                      │
│          │  Overall Progress Card               │
│          │  ──────────────○──────── 33%        │
│          │                                      │
│          │  Week Accordion List                 │
│          │  ┌────────────────────────────────┐  │
│          │  │ ✓ Week 1: React Fundamentals   │  │
│          │  │   [Completed]             [▼]  │  │
│          │  ├────────────────────────────────┤  │
│          │  │   ✓ JSX and Components         │  │
│          │  │   ✓ Props and State            │  │
│          │  │   ✓ Event Handling             │  │
│          │  │   Resources: 2 links           │  │
│          │  └────────────────────────────────┘  │
│          │                                      │
│          │  ┌────────────────────────────────┐  │
│          │  │ ○ Week 2: Advanced Hooks       │  │
│          │  │   [In Progress]           [▶]  │  │
│          │  └────────────────────────────────┘  │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Week Accordion Component

```jsx
<div className="space-y-4">
  {learningPath.map(week => (
    <Card key={week.week} className="overflow-hidden">

      {/* Accordion Header */}
      <div className="flex items-center justify-between cursor-pointer"
           onClick={() => toggleWeek(week.week)}>

        <div className="flex items-center gap-4">

          {/* Status Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            week.completed ? 'bg-emerald-100' : 'bg-blue-100'
          }`}>
            {week.completed ? (
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            ) : (
              <Circle className="w-6 h-6 text-blue-600" />
            )}
          </div>

          {/* Title */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Week {week.week}
              </h3>
              {week.completed && (
                <Badge variant="success" size="sm">Completed</Badge>
              )}
            </div>
            <p className="text-gray-600">{week.title}</p>
          </div>

        </div>

        {/* Chevron */}
        {expandedWeek === week.week ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}

      </div>

      {/* Accordion Body */}
      {expandedWeek === week.week && (
        <div className="mt-6 pt-6 border-t border-gray-200">

          {/* Modules */}
          <h4 className="font-semibold text-gray-900 mb-4">Modules</h4>
          <div className="space-y-3 mb-6">
            {week.modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between p-4
                                          bg-gray-50 rounded-lg hover:bg-gray-100
                                          transition-colors">

                <div className="flex items-center gap-3">
                  <input type="checkbox" checked={module.completed}
                         className="w-5 h-5 text-blue-600 border-gray-300 rounded" />
                  <div>
                    <p className={`font-medium ${
                      module.completed ? 'line-through text-gray-500' : 'text-gray-900'
                    }`}>
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

          {/* Resources */}
          <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {week.resources.map((resource, index) => (
              <a key={index} href={resource.url}
                 className="flex items-center justify-between p-4 bg-blue-50
                            rounded-lg hover:bg-blue-100 transition-colors">
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
```

---

## 7️⃣ Job Recommendations Page

### Layout Structure

```
┌──────────┬──────────────────────────────────────┐
│          │  Navbar                              │
│          ├──────────────────────────────────────┤
│          │  Page Header                         │
│  Sidebar │                                      │
│          │  Stats Grid (4 cards)                │
│          │                                      │
│          │  ┌────────┬───────────────────────┐  │
│          │  │        │                       │  │
│          │  │ Filter │   Job Cards List      │  │
│          │  │ Panel  │                       │  │
│          │  │        │   ┌─────────────────┐ │  │
│          │  │Location│   │ Google          │ │  │
│          │  │Level   │   │ Frontend Eng    │ │  │
│          │  │Type    │   │ 92% Match       │ │  │
│          │  │Salary  │   └─────────────────┘ │  │
│          │  │        │                       │  │
│          │  │[Apply] │   ┌─────────────────┐ │  │
│          │  │        │   │ Microsoft       │ │  │
│          │  └────────┴───│ Full Stack Dev  │──┤
│          │              │ 88% Match       │  │
│          │              └─────────────────┘  │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Job Card Component

```jsx
<Card hover>
  <div className="flex flex-col sm:flex-row gap-4">

    {/* Company Logo */}
    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700
                    rounded-xl flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-2xl">{job.logo}</span>
    </div>

    {/* Job Info */}
    <div className="flex-1">

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between
                      gap-2 mb-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.role}</h3>
          <p className="text-gray-700 font-medium">{job.company}</p>
        </div>

        {/* Match Score + Bookmark */}
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

      {/* Meta Info Row */}
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

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, index) => (
          <Badge key={index} variant="primary" size="sm">
            {skill}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="primary">Apply Now</Button>
        <Button variant="outline">View Details</Button>
      </div>

    </div>

  </div>
</Card>
```

### Filter Sidebar

```jsx
<Card className="lg:w-64 flex-shrink-0">

  <div className="flex items-center gap-2 mb-6">
    <Filter className="w-5 h-5 text-gray-700" />
    <h2 className="text-lg font-bold text-gray-900">Filters</h2>
  </div>

  <div className="space-y-6">

    {/* Location Filter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Location
      </label>
      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option>All Locations</option>
        <option>Remote</option>
        <option>California</option>
        <option>New York</option>
        <option>Washington</option>
      </select>
    </div>

    {/* Experience Level */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Experience Level
      </label>
      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option>All Levels</option>
        <option>Entry Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>
    </div>

    {/* Job Type Checkboxes */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Job Type
      </label>
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

    {/* Salary Range Slider */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Salary Range
      </label>
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
```

---

## 8️⃣ Skill Gap Analyzer Page

### Layout Structure

```
┌──────────┬──────────────────────────────────────┐
│          │  Navbar                              │
│          ├──────────────────────────────────────┤
│          │  Page Header                         │
│  Sidebar │                                      │
│          │  Stats Grid (4 cards)                │
│          │                                      │
│          │  ┌───────────────┬────────────────┐  │
│          │  │               │                │  │
│          │  │  Your Current │  Target Skills │  │
│          │  │  Skills       │  Analysis      │  │
│          │  │               │                │  │
│          │  │  Progress Bars│  Gap Indicators│  │
│          │  │               │                │  │
│          │  └───────────────┴────────────────┘  │
│          │                                      │
│          │  Personalized Recommendations        │
│          │  ┌────────────────────────────────┐  │
│          │  │ TypeScript (HIGH PRIORITY)     │  │
│          │  │ Reason: Required by 85% jobs   │  │
│          │  │ Resources: 2 courses           │  │
│          │  │ [Start Learning]               │  │
│          │  └────────────────────────────────┘  │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Current Skills Card

```jsx
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

        <ProgressBar
          progress={skill.level}
          color={skill.level >= 80 ? 'emerald' : skill.level >= 60 ? 'blue' : 'amber'}
        />

      </div>
    ))}
  </div>
</Card>
```

### Target Skills Analysis Card

```jsx
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

          {/* Dual Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full flex">
              <div className="bg-emerald-500"
                   style={{ width: `${(skill.current / skill.required) * 100}%` }}></div>
            </div>
          </div>
        </div>

      </div>
    ))}
  </div>
</Card>
```

### Recommendations Card

```jsx
<Card>
  <div className="flex items-center gap-2 mb-6">
    <TrendingUp className="w-6 h-6 text-amber-600" />
    <h2 className="text-xl font-bold text-gray-900">Personalized Recommendations</h2>
  </div>

  <div className="space-y-4">
    {recommendations.map((rec, index) => (
      <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-blue-100
                                  rounded-xl border border-blue-200">

        {/* Header */}
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

        {/* Resources */}
        <div className="space-y-2 mb-4">
          {rec.resources.map((resource, idx) => (
            <div key={idx} className="flex items-center justify-between p-3
                                      bg-white rounded-lg">
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
```

---

## 9️⃣ AI Interview Coach Page

### Layout Structure

```
┌──────────┬──────────────────────────────────────┐
│          │  Navbar                              │
│          ├──────────────────────────────────────┤
│          │  Page Header                         │
│  Sidebar │                                      │
│          │  ┌────────────────┬──────────────┐   │
│          │  │                │              │   │
│          │  │  Chat Area     │  Sidebar     │   │
│          │  │                │              │   │
│          │  │  ┌──────────┐  │  Session     │   │
│          │  │  │AI Message│  │  Stats       │   │
│          │  │  └──────────┘  │              │   │
│          │  │                │  Improvement │   │
│          │  │    ┌────────┐  │  Tips        │   │
│          │  │    │User Msg│  │              │   │
│          │  │    └────────┘  │  Quick       │   │
│          │  │                │  Actions     │   │
│          │  │  ──────────    │              │   │
│          │  │                │              │   │
│          │  │  Suggestions   │              │   │
│          │  │  Input Bar     │              │   │
│          │  │  [Send]        │              │   │
│          │  └────────────────┴──────────────┘   │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

### Chat UI Component

```jsx
<div className="grid lg:grid-cols-3 gap-6 flex-1">

  {/* Chat Column (2/3) */}
  <div className="lg:col-span-2 flex flex-col">
    <Card className="flex-1 flex flex-col" padding="none">

      {/* Messages Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${
            message.sender === 'user' ? 'flex-row-reverse' : ''
          }`}>

            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full flex items-center
                            justify-center flex-shrink-0 ${
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

            {/* Message Bubble */}
            <div className={`flex-1 max-w-2xl ${
              message.sender === 'user' ? 'text-right' : ''
            }`}>
              <div className={`inline-block p-4 rounded-2xl ${
                message.sender === 'ai'
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-blue-600 text-white'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>

              {/* Rating Buttons (AI messages only) */}
              {message.sender === 'ai' && (
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => handleRating(message.id, 'good')}
                          className={`p-1.5 rounded-lg transition-colors ${
                            message.rating === 'good'
                              ? 'bg-emerald-100 text-emerald-600'
                              : 'hover:bg-gray-100 text-gray-400'
                          }`}>
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleRating(message.id, 'bad')}
                          className={`p-1.5 rounded-lg transition-colors ${
                            message.rating === 'bad'
                              ? 'bg-red-100 text-red-600'
                              : 'hover:bg-gray-100 text-gray-400'
                          }`}>
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">

        {/* Quick Suggestions */}
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestions.map((suggestion, index) => (
            <button key={index} onClick={() => setInputValue(suggestion)}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm
                               hover:bg-blue-100 transition-colors">
              {suggestion}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex gap-2">
          <input type="text" value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Ask a practice question or request feedback..."
                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

          <Button onClick={handleSend} variant="primary" className="px-6">
            <Send className="w-5 h-5" />
          </Button>
        </div>

      </div>

    </Card>
  </div>

  {/* Sidebar Column (1/3) */}
  <div className="space-y-6">

    {/* Session Stats */}
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

    {/* Improvement Tips */}
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Improvement Tips</h2>
      <div className="space-y-3">
        {improvements.map((tip, index) => (
          <div key={index} className="p-3 bg-gradient-to-br from-blue-50 to-blue-100
                                      rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h3>
            <p className="text-xs text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </Card>

    {/* Quick Actions */}
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      <div className="space-y-2">
        <Button variant="outline" fullWidth size="sm">View Past Sessions</Button>
        <Button variant="outline" fullWidth size="sm">Export Progress</Button>
        <Button variant="outline" fullWidth size="sm">Schedule Mock Interview</Button>
      </div>
    </Card>

  </div>

</div>
```

---

## 🎯 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px   /* Mobile landscape, small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large desktop */

/* Common Patterns */
Mobile-first approach:
  Base: mobile styles
  sm: tablet adjustments
  lg: desktop layout

Example:
className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
className="text-base md:text-lg lg:text-xl"
className="px-4 sm:px-6 lg:px-8"
```

### Responsive Layout Rules

**Sidebar**
- Mobile: Hidden by default, drawer overlay when opened
- Desktop (lg+): Fixed sidebar visible

**Grid Cards**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Navigation**
- Mobile: Hamburger menu
- Desktop: Full menu visible

**Forms**
- Mobile: Full width inputs, stacked labels
- Desktop: Inline labels possible

---

## 🧩 Component Code Examples

### StatCard Component

```jsx
interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  value: string | number;
  label: string;
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'error' | 'info';
  };
}

export default function StatCard({
  icon: Icon,
  iconBgColor,
  iconColor,
  value,
  label,
  badge
}: StatCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        {badge && <Badge variant={badge.variant}>{badge.text}</Badge>}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </Card>
  );
}

// Usage
<StatCard
  icon={Award}
  iconBgColor="bg-blue-100"
  iconColor="text-blue-600"
  value="92%"
  label="ATS Score"
  badge={{ text: "+12%", variant: "success" }}
/>
```

### Modal Component

```jsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40
                      transition-opacity duration-300"
           onClick={onClose}></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg transform transition-all duration-300
                         scale-100 opacity-100">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Body */}
          <div className="mb-6">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
              {footer}
            </div>
          )}

        </Card>
      </div>
    </>
  );
}

// Usage
<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Action"
  footer={
    <>
      <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
      <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

### Toast Notification

```jsx
interface ToastProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
  const styles = {
    success: 'bg-emerald-50 border-emerald-500 text-emerald-700',
    error: 'bg-red-50 border-red-500 text-red-700',
    warning: 'bg-amber-50 border-amber-500 text-amber-700',
    info: 'bg-blue-50 border-blue-500 text-blue-700',
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <X className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3
                     rounded-lg border-l-4 shadow-lg ${styles[type]}
                     animate-slide-in-bottom`}>
      {icons[type]}
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="ml-4 hover:opacity-70">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
```

---

## 🔄 Navigation Flow

```
Landing Page
    ├─→ Login Page
    │       └─→ Dashboard
    └─→ Register Page
            └─→ Dashboard

Dashboard (Main Hub)
    ├─→ Resume Upload
    │       └─→ Skill Gap Analysis
    │               └─→ Learning Path
    ├─→ Learning Path
    ├─→ Job Recommendations
    ├─→ Skill Gap Analysis
    ├─→ AI Interview Coach
    └─→ Settings

Sidebar Navigation (Always Accessible)
    - Dashboard
    - Upload Resume
    - Learning Path
    - Job Matches
    - Skill Gap
    - AI Coach
    - Portfolio
    - Settings
```

---

## 📦 Implementation Checklist

### Phase 1: Foundation
- [x] Design system (colors, typography, spacing)
- [x] Base components (Button, Input, Card, Badge)
- [x] Layout components (Navbar, Sidebar, Footer)
- [x] Responsive grid system

### Phase 2: Pages
- [x] Landing Page
- [x] Login/Register Pages
- [x] Dashboard Page
- [x] Resume Upload Page
- [x] Learning Path Page
- [x] Job Recommendations Page
- [x] Skill Gap Analysis Page
- [x] AI Interview Coach Page

### Phase 3: Features
- [ ] Form validation
- [ ] Loading states
- [ ] Error handling
- [ ] Toast notifications
- [ ] Modal dialogs
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Filters and sorting

### Phase 4: Enhancements
- [ ] Animations (Framer Motion)
- [ ] Chart visualizations
- [ ] Drag & drop file upload
- [ ] Real-time chat updates
- [ ] Keyboard shortcuts
- [ ] Accessibility improvements

---

## 🎨 Design Tokens (Tailwind Config Extension)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#10b981',
          600: '#059669',
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
};
```

---

## 🚀 Performance Optimization

### Image Optimization
- Use next-gen formats (WebP, AVIF)
- Lazy load images below fold
- Proper sizing with responsive images

### Code Splitting
- Lazy load page components
- Dynamic imports for heavy components
- Chunk optimization

### Caching Strategy
- Service worker for offline support
- Cache API responses
- Optimize bundle size

---

## ✅ Accessibility Guidelines

### Keyboard Navigation
- Tab order follows visual layout
- Focus indicators visible
- Skip to main content link

### Screen Reader Support
- Semantic HTML elements
- ARIA labels where needed
- Alt text for images

### Color Contrast
- WCAG AA compliant (4.5:1 for text)
- Don't rely on color alone
- Test with colorblind simulators

---

## 📊 Metrics & Analytics

### Track User Actions
- Button clicks
- Page views
- Form submissions
- Feature usage

### Performance Metrics
- Page load time
- Time to interactive
- First contentful paint
- Core Web Vitals

---

## 🎯 Summary

This specification provides a **complete, production-ready frontend design** for SkillSync, covering:

✅ **9 fully designed pages** with detailed layouts
✅ **Complete design system** (colors, typography, spacing)
✅ **20+ reusable components** with code examples
✅ **Responsive breakpoints** for mobile, tablet, desktop
✅ **Animation system** with transitions and micro-interactions
✅ **Navigation flow** and user journey
✅ **Accessibility** and performance guidelines

**Ready for immediate React + Tailwind implementation.**
