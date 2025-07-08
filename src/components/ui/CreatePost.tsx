"user client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody } from "react-bootstrap";
import { Avatar, AvatarImage } from "./avatar";
import { Textarea } from "./textarea";
import { ImageIcon, Loader2Icon, SendIcon } from "lucide-react";
import { createPost } from "@/actions/post.action";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";

function CreatePost() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  useEffect(()=>{
    if(isLoaded && isSignedIn) {
      console.log("User loaded ",user);
    }
  }, [isLoaded, isSignedIn])


  const handleSubmit = async () => {
    if(!content.trim() && !imageUrl) return;
    setIsPosting(true);
    try{
      const result = await createPost(content, imageUrl);
      if(result?.success){
        // reset the form
        setContent("");
        setImageUrl("");
        setShowImageUpload(false)
        console.log("Post created successfully");
        toast.success("Post created successfully");
      }
    } catch(error){
      console.error("Failed to create post:", error);
      toast.error("Failed to create post");
    } finally{
      setIsPosting(false);
    }
  };

  return (
    <Card className="mb-6 rounded-lg p-6 border">
      <CardBody className="pb-6">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user?.imageUrl } />
            </Avatar>
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-[100px] resize-none border-none focus-visible:ring-0 p-0 text-base"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPosting}
            />
          </div>

          {(showImageUpload || imageUrl) && (
            <div className="border rounded-lg p-4">
              <ImageUpload
                endPoint="postImage"
                value={imageUrl}
                onChange={(url) => {
                  setImageUrl(url);
                  if (!url) setShowImageUpload(false);
                }}
              />
            </div>
          )}

          <div className="flex item-center justify-between border-t pt-4">
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
                onClick={() => setShowImageUpload(!showImageUpload)}
                disabled={isPosting}
              >
                <ImageIcon className="size-4 mr-2" />
                Photo
              </Button>
            </div>
            <Button
              className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700"
              onClick={handleSubmit}
              disabled={(!content.trim() && !imageUrl) || isPosting}
            >
              {isPosting ? (
                <>
                  <Loader2Icon className="size-4 mr-2 animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <SendIcon className="size-4 mr-2" />
                  Post
                </>
              )}
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CreatePost;
