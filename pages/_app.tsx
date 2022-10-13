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
    accentColor: string,
    displayFont: string,
    bodyFont: string,
    theme: any,
  };
};

function ThemeTest({ Component, pageProps, themeProps }: ThemedProps) {
  console.log(themeProps)
  const themeStyles = {
    '--background-color': themeProps.bgColor,
    '--text-color': themeProps.textColor,
    '--accent-color': themeProps.accentColor,
    '--display-font': 'display',
    '--body-font': 'body',
  } as React.CSSProperties

  return (
    <AppWrapper>
      <div id="theme-wrapper" style={themeStyles}>
        <Header />
        <style jsx global>{`
          @font-face {
            font-family: 'display';
            src: url(${themeProps.displayFont});
          }
          @font-face {
            font-family: 'body';
            src: url(${themeProps.bodyFont});
          }
        `}</style>
        <div className='flex flex-row justify-center pt-[7%]'>
          <h1 className="text-center text-7xl" style={{
            backgroundColor: 'var(--accent-color)',
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
  const theme = await getThemeUri('0x5BBC122E437A0F418b64454De76A431658C5162B')
  
  const themeProps = {
    bgColor: theme?.project_content?.theme?.colors?.background,
    textColor: theme?.project_content?.theme?.colors?.text,
    accentColor: theme?.project_content?.theme?.colors?.accent,
    displayFont: theme?.project_content?.theme?.fonts?.display,
    bodyFont: theme?.project_content?.theme?.fonts?.body,
    theme: theme
  }

  return { ...appProps, themeProps }
}

export default ThemeTest
