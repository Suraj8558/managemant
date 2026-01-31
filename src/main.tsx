import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { AppRoutes } from './app/routes/AppRoutes'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider  client={queryClient}> 
    <RouterProvider router={AppRoutes} />
    </QueryClientProvider>
  </StrictMode>,
)
