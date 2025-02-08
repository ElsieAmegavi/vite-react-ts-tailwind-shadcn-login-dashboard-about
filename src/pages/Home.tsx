import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      {/* Logo section with enhanced hover effects */}
      <div className="flex justify-center gap-8 mb-12">
        <a href="https://vitejs.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={viteLogo} className="h-16 w-16 drop-shadow-[0_0_0.6rem_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={reactLogo} className="h-16 w-16 drop-shadow-[0_0_0.6rem_#61dafbaa]" alt="React logo" />
        </a>
      </div>

      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
        Vite + React + Tailwind + shadcn/ui
      </h1>
      
      <Card className="max-w-md mx-auto bg-gray-800/50 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-200">Counter Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button 
            variant="default" 
            size="lg"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </Button>

          <div className="flex justify-center gap-4">
            <Button 
              variant="secondary"
              className="hover:bg-gray-600 transition-colors duration-300"
            >
              Secondary
            </Button>
            <Button 
              variant="destructive"
              className="hover:bg-red-600 transition-colors duration-300"
            >
              Destructive
            </Button>
            <Button 
              variant="outline"
              className="hover:bg-gray-700 transition-colors duration-300"
            >
              Outline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 