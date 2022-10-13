// import { Socials } from "./Socials"
import { DisconnectButton } from "./elements"
import { useThemeProvider } from "context/ThemeContext"

export function Header() {
  const { theme } = useThemeProvider()
  return (
    <header className="flex flex-row justify-between items-center w-full px-6">
      <h2 className="flex flex-row items-center gap-8">
        {theme?.theme?.name}
      </h2>
      {/*<Socials />*/}
      <DisconnectButton />
    </header>
  )
}
