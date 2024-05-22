import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../../../components/ui/avatar"
  import { ScrollArea } from "@/components/ui/scroll-area"

  export function RecentSalesOrders() {
    return (
        <ScrollArea className="h-[350px] w-full rounded-md  p-4">
      <div className="space-y-8">
        <div className="flex items-center">
        <img src="https://th.bing.com/th/id/OIP.8MJgw49NgTeBLs1BFzqS0gHaHa?rs=1&pid=ImgDetMain" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Barbecued Burgers</p>

          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img src="https://th.bing.com/th/id/R.599cc030a0e3ce187201ff43d9d86911?rik=%2f6cgA3e42Qv35A&pid=ImgRaw&r=0" className="border border-black rounded-full w-9 h-9"/>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Pepperoni Pizza</p>
            {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">39.00 MAD</div>
        </div>
        <div className="flex items-center">
        <img src="https://th.bing.com/th/id/R.d0d1b9d90bd17cb8a253d9d5e2758b1d?rik=ADIRTnI%2fQFWe%2bA&pid=ImgRaw&r=0" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Sandwich Italien</p>
            {/* <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p> */}
          </div>
          <div className="ml-auto font-medium">299.00  MAD</div>
        </div>
        <div className="flex items-center">
        <img src="https://th.bing.com/th/id/R.93b5aac57788a53d991ae4e47891e793?rik=FoYePez4RgHdQg&pid=ImgRaw&r=0" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Donuts Oreo</p>
            {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">99.00  MAD</div>
        </div>
        <div className="flex items-center">
        <img src="https://th.bing.com/th/id/OIP.m93SV6ox1swkqRaBnEzbHgHaHa?rs=1&pid=ImgDetMain" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Chicken House Burger</p>
            {/* <p className="text-sm text-muted-foreground">sofia.davis@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">39.00  MAD</div>
        </div>
      </div>
      </ScrollArea>
    )
  }
