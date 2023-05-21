import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/globals.css'
// Next Auth
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { pageProps: { session: any } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

