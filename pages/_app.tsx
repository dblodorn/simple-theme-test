import React from 'react'
import App from 'next/app'
import 'styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { AppWrapper, Header } from './../components'
import { getThemeUri } from 'lib/getThemeURI'

type ThemedProps = Pick<AppProps, "Component" | "pageProps"> & {
  themeProps: {
    bgColor: string,
    textColor: string,
    fontFamilyA: string,
    otherColor: string,
    theme: any
  };
};

function ThemeTest({ Component, pageProps, themeProps }: ThemedProps) {

  const themeStyles = {
    '--background-color': themeProps.bgColor,
    '--text-color': themeProps.textColor,
    '--other-color': themeProps.otherColor,
    '--font-a': themeProps.fontFamilyA,
  } as React.CSSProperties

  return (
    <AppWrapper>
      <div id="theme-wrapper" style={themeStyles}>
        <Header />
        <div className='flex flex-row justify-center pt-[7%]'>
          <h1 className="text-center text-7xl" style={{
            backgroundColor: 'var(--other-color)',
            color: 'var(--background-color',
            display: 'inline-block',
            transform: 'rotate(-5deg)',
          }}>{themeProps?.theme?.name}</h1>
        </div>
        <main className="px-6">
          <Component {...pageProps} />
        </main>
      </div>
    </AppWrapper>
  )
}

ThemeTest.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const theme = await getThemeUri()
  
  const themeProps = {
    bgColor: theme?.theme?.colors?.primary,
    textColor: theme?.theme?.colors?.secondary,
    otherColor: theme?.theme?.colors?.tertiary,
    fontFamilyA: 'helvetica',
    theme: theme
  }

  return { ...appProps, themeProps }
}

export default ThemeTest
