import React from 'react'
import App from 'next/app'
import 'styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { AppWrapper, Header } from './../components'

type ThemedProps = Pick<AppProps, "Component" | "pageProps"> & {
  themeProps: {
    bgColor: string,
    textColor: string,
    fontFamilyA: string,
  };
};

function ThemeTest({ Component, pageProps, themeProps }: ThemedProps) {
  console.log(themeProps)
  const themeStyles = {
    '--background-color': themeProps.bgColor,
    '--text-color': themeProps.textColor,
    '--font-a': themeProps.fontFamilyA,
  } as React.CSSProperties
  
  return (
    <AppWrapper>
      <div id="theme-wrapper" style={themeStyles}>
        <Header />
        <main className="px-6">
          <Component {...pageProps} />
        </main>
      </div>
    </AppWrapper>
  )
}

ThemeTest.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const themeProps = {
    bgColor: 'pink',
    textColor: 'brown',
    fontFamilyA: 'helvetica',
  }
  return { ...appProps, themeProps }
}

export default ThemeTest
