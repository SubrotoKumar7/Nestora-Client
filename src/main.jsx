import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router'
import AuthProvider from './context/AuthProvider'
import { ToastContainer, Zoom } from 'react-toastify'
import '@smastrom/react-rating/style.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-center" autoClose={2000} transition={Zoom}/>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
