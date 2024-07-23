import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-1 flex items-center justify-center h-screen">
    <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
        
        <div className="grid grid-cols-3 gap-x-3">
            
        </div>
    
        <SignUp />
    </div>
</div>

  )
}