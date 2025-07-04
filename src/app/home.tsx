import ModeToggle from '@/components/ModeToggle'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from 'react-bootstrap'

function Home() {
  return (
     <div>
      <SignedOut>
        <SignInButton >
          <Button>
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      
      <ModeToggle />
    </div>
  )
}

export default Home;
