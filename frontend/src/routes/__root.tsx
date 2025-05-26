import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/Header'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <AppSidebar />

      <main>
        <Header />
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </SidebarProvider>
  ),
})
