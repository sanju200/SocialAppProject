import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import ClientOnlyCreatePost from "@/components/ui/ClientOnlyCreatePost";
import WhoToFollow from "@/components/ui/WhoToFollow";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {

  const user = await currentUser();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        { user ? <ClientOnlyCreatePost /> : null }
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
