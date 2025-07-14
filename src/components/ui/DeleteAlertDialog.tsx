import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@radix-ui/react-alert-dialog';
import { Loader2Icon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { Button } from 'react-bootstrap';
import { AlertDialogHeader, AlertDialogFooter } from './alert-dialog';

interface DeleteAlertDialogProps {
    isDeleting: boolean;
    onDelete: () => Promise<void>;
    title?: string;
    description?: string;
}

function DeleteAlertDialog({isDeleting, onDelete, title="Delete Post", description="This action cannot be undone."}: DeleteAlertDialogProps) {
  return (
     <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-red-500 -mr-2"
        >
          {isDeleting ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <Trash2Icon className="size-4" />
          )}
        </Button>
      </AlertDialogTrigger >
      <AlertDialogContent className="position-absolute border w-[400px] p-4">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='border px-4 py-2 rounded-md'>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 border px-4 py-2 rounded-md"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAlertDialog
