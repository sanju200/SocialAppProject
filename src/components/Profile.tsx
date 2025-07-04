import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

function Profile() {
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
      
     
    </div>
  )
}

export default Profile
