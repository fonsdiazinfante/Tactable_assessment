import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  
  )
}

export default MyApp
