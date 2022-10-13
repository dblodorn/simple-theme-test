import Readme from './../../README.md'
import { useThemeProvider } from "context/ThemeContext"

export function Hero() {
  
  const { theme } = useThemeProvider()
  return (
    <section id="hero" className='pa--hero h-screen max-h-[70vmin] flex items-center'>
      <article className='w-full max-w-[884px] m-auto'><p>{theme?.theme?.description}</p></article>
    </section>
  )
}