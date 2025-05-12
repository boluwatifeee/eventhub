import { Link } from '@tanstack/react-router'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { BellIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar } from './ui/avatar'

export default function Header() {
  return (
    <header className="p-2 flex justify-between items-center gap-2 bg-white text-black border-b border-[#E5E4E2]">
      <div>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p className="text-[#808080]">Manage your events and track RSVPs</p>
      </div>
      <div className="flex gap-x-2 items-center">
        <Input placeholder="Search events..." />
        <Button>
          <BellIcon />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-x-1">
            <Avatar>
              <AvatarFallback className="p-1 border border-[#E5E4E2] rounded-full">
                BL
              </AvatarFallback>
            </Avatar>
            <p>Boluwatife</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
