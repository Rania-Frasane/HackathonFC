import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./../../../components/ui/avatar"

  export function RecentSales() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Barbecued Burgers</p>

          </div>
          {/* <div className="ml-auto font-medium">199.00 MAD</div> */}
        </div>
        <div className="flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="border border-black rounded-full w-9 h-9"/>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Pepperoni Pizza</p>
            {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
          </div>
          {/* <div className="ml-auto font-medium">39.00 MAD</div> */}
        </div>
        <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Sandwich Italien</p>
            {/* <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p> */}
          </div>
          {/* <div className="ml-auto font-medium">299.00  MAD</div> */}
        </div>
        <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Donuts Oreo</p>
            {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
          </div>
          {/* <div className="ml-auto font-medium">99.00  MAD</div> */}
        </div>
        <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="border border-black rounded-full w-9 h-9"/>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Chicken House Burger</p>
            {/* <p className="text-sm text-muted-foreground">sofia.davis@email.com</p> */}
          </div>
          {/* <div className="ml-auto font-medium">39.00  MAD</div> */}
        </div>
      </div>
    )
  }
