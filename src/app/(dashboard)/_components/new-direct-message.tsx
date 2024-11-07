import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SidebarGroupAction } from "@/components/ui/sidebar";
import { useMutation } from "convex/react";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";

export function NewDirectMessage() {
  const [open, setOpen] = useState(false);
  const createDirectMessage = useMutation(api.functions.dm.create);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const id = await createDirectMessage({
        username: e.currentTarget.username.value,
      });
      toast.success("Direct Message sent");
      setOpen(false);
      router.push(`/dms/${id}`);
    } catch (error) {
      toast.error("Failed to send message");
      description: error instanceof Error ? error.message : "Unknown error";
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SidebarGroupAction>
          <PlusIcon />
          <span className="sr-only">New Direct Message</span>
        </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Direct Message</DialogTitle>
            <DialogDescription>
              Enter username to start direct message
            </DialogDescription>
          </DialogHeader>
          <form className="contents" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" />
            </div>
            <DialogFooter>
              <Button>Start direct message</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
}
