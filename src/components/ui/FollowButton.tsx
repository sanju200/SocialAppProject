"use client"
import { Loader2Icon } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function FollowButton( userId:{userId: string}) {
    const[isLoading, setIsLoading] = useState(false);

    const handleFollow = async () => {

    }
  return (
    <Button
    size="sm"
    variant={"secondary"}
    onClick={handleFollow}
    disabled={isLoading}
    className="w-20"
    >
        {isLoading ? <Loader2Icon className="w-4 h-4 animate-spin"/> : "Follow"}
      
    </Button>
  )
}

export default FollowButton
