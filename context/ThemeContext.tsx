import { ReactNode } from 'react'
import { createContext, useContext } from 'react'

export type ThemeProps = {
  children?: JSX.Element | JSX.Element[],
  theme?: any
}

export type ThemeReturnTypes = {
  theme?: any
}

const ThemeContext = createContext<ThemeReturnTypes>({})

export function useThemeProvider() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children, theme }: ThemeProps) {

  return (
    <ThemeContext.Provider
      value={{
        theme: theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
