import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import DataProvider from '@/context/dataContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps}  key={router.asPath} />
      </Layout>
    </DataProvider>
  )
  
}
