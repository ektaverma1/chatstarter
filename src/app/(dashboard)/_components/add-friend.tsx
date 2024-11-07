import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import React, { useState } from "react";
import { toast } from "sonner";

export function AddFriend() {
    const [open, setOpen] = useState(false);
    const createFriendRequest = useMutation(api.functions.friend.createFriendRequest);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await createFriendRequest({ username: e.currentTarget.username.value});
            toast.success("Friend request sent");
            setOpen(false);
        } catch(error) {
            toast.error("Failed to send friend reuqest");
            description: error instanceof Error ? error.message :"Unknown error"
        }
    }

    return (
        <Dialog open={open}onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm">Add Friend</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Friend</DialogTitle>
                    <DialogDescription>You canadd a friend by username</DialogDescription>
                </DialogHeader>
                <form className="contents" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" type="text" />
                    </div>
                    <DialogFooter>
                        <Button>Send friend request</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}