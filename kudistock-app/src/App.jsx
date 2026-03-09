import { useState } from 'react'
import './App.css'
import Splash from './Splash'
import Onboarding from './Onboarding'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(true)

  const handleSplashFinish = () => {
    setShowSplash(false)
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
  }

  if (showSplash) {
    return <Splash onFinish={handleSplashFinish} />
  }

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />
  }

  return (
    <main className="app-container">
      <h1>Welcome to KudiStocks App</h1>
    </main>
  )
}

export default App
