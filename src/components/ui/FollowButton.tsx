"use client"
import { toggleFollow } from '@/actions/user.action';
import { Loader2Icon } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

function FollowButton( {userId}:{userId: string}) {
    const[isLoading, setIsLoading] = useState(false);

    const handleFollow = async () => {
        setIsLoading(true);

        try{
            await toggleFollow(userId);
            toast.success("User followed successfully");
        }catch(error){
            toast.error("Error following user");
        }finally{
            setIsLoading(false);
        }
    }

  return (
    <Button
    size="sm"
    variant={"secondary"}
    onClick={handleFollow}
    disabled={isLoading}
    className="w-20 rounded-lg p-4 border"
    >
        {isLoading ? <Loader2Icon className="w-4 h-4 animate-spin"/> : "Follow"}
      
    </Button>
  )
}

export default FollowButton
