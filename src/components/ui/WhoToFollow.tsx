import { getRandomUsers } from '@/actions/user.action';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';
import React from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import FollowButton from './FollowButton';

async function WhoToFollow() {
    const users = await getRandomUsers();

    // if(users?.length === 0) return null;

    console.log("random users ", users);

    return (
      <div>
        <Card className='border rounded-lg p-4'>
          <CardHeader>
              <CardTitle>
                <div className='pb-4 font-semibold'>
                  Who to Follow 
                </div>
              </CardTitle>
          </CardHeader>
          <CardBody>
              <div className="space-y-4">
            {users?.map((user) => (
              <div key={user.id} className="flex gap-2 items-center justify-between ">
                <div className="flex items-center gap-1">
                  <Link href={`/profile/${user.username}`}>
                    <Avatar>
                      <AvatarImage src={user.image ?? "/avatar.png"} className='rounded-full w-10'/>
                    </Avatar>
                  </Link>
                  <div className="text-xs">
                    <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                      {user.name}
                    </Link>
                    <p className="text-muted-foreground">@{user.username}</p>
                    <p className="text-muted-foreground">{user._count.followers} followers</p>
                  </div>
                </div>
                <FollowButton userId={user.id} />
              </div>
            ))}
          </div>
          </CardBody>
        </Card>
      </div>
    )
}

export default WhoToFollow
