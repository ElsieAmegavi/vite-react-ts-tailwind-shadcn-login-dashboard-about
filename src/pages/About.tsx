import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        About This Demo
      </h1>
      
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle>Tech Stack Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            This demo showcases a modern React application built with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Vite - Next Generation Frontend Tooling</li>
            <li>React - A JavaScript library for building user interfaces</li>
            <li>Tailwind CSS - A utility-first CSS framework</li>
            <li>shadcn/ui - Re-usable components built with Radix UI and Tailwind</li>
            <li>React Router - Declarative routing for React applications</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} 