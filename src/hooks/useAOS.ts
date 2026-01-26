import { useEffect } from 'react'

interface AOSOptions {
  duration?: number
  delay?: number
  once?: boolean
  mirror?: boolean
}

export function useAOS(options: AOSOptions = { duration: 1500 }) {
  useEffect(() => {
    // Dynamically import AOS only when the hook is used
    import('aos').then((AOS) => {
      import('aos/dist/aos.css')
      AOS.init(options)
    })
  }, [options])
}
