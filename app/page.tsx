"use client"

import { useEffect, useRef } from "react"
import { Github } from "lucide-react"

// Custom X logo component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
)

export default function Home() {
  const gradientCanvasRef = useRef<HTMLCanvasElement>(null)
  const noiseCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Gradient canvas setup
    const gradientCanvas = gradientCanvasRef.current
    if (!gradientCanvas) return

    const gradientCtx = gradientCanvas.getContext("2d")
    if (!gradientCtx) return

    // Noise canvas setup
    const noiseCanvas = noiseCanvasRef.current
    if (!noiseCanvas) return

    const noiseCtx = noiseCanvas.getContext("2d")
    if (!noiseCtx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      gradientCanvas.width = width
      gradientCanvas.height = height

      noiseCanvas.width = width
      noiseCanvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create soft gradient
    const createSoftGradient = () => {
      const centerX = gradientCanvas.width / 2
      const centerY = gradientCanvas.height / 2
      const radius = Math.min(gradientCanvas.width, gradientCanvas.height) * 0.4

      const gradient = gradientCtx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)

      // Much softer gradient with lower opacity
      gradient.addColorStop(0, "rgba(147, 51, 234, 0.25)")
      gradient.addColorStop(0.6, "rgba(147, 51, 234, 0.05)")
      gradient.addColorStop(1, "rgba(147, 51, 234, 0)")

      gradientCtx.fillStyle = gradient
      gradientCtx.fillRect(0, 0, gradientCanvas.width, gradientCanvas.height)
    }

    // Create noise mask
    const createNoiseMask = () => {
      // Clear previous noise
      noiseCtx.clearRect(0, 0, noiseCanvas.width, noiseCanvas.height)

      // Create noise pattern
      const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Very subtle noise
        const value = Math.floor(Math.random() * 20)
        data[i] = value // R
        data[i + 1] = value // G
        data[i + 2] = value // B
        data[i + 3] = 10 // Alpha (very transparent)
      }

      noiseCtx.putImageData(imageData, 0, 0)
    }

    // Animation loop
    let animationFrame: number
    const animate = () => {
      gradientCtx.clearRect(0, 0, gradientCanvas.width, gradientCanvas.height)
      createSoftGradient()

      // Only update noise every few frames to reduce eye strain
      if (Math.random() > 0.7) {
        createNoiseMask()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative bg-black text-white overflow-hidden">
      {/* Gradient layer */}
      <canvas ref={gradientCanvasRef} className="absolute inset-0 z-0" />

      {/* Noise layer */}
      <canvas ref={noiseCanvasRef} className="absolute inset-0 z-10" style={{ mixBlendMode: "overlay" }} />

      {/* Content layer - higher z-index to stay above the noise */}
      <div className="z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">wrapper.sh</h1>

        <p className="text-xl mb-8 text-gray-300">An LLM wrapper for your terminal.</p>

        <div className="inline-block px-4 py-2 rounded-full bg-[#9333ea]/10 border border-[#9333ea]/30 text-[#9333ea] font-medium mb-8">
          Coming Soon
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://x.com/icanvardar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9333ea] transition-colors"
            aria-label="X Profile"
          >
            <XLogo className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/icanvardar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9333ea] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  )
}

