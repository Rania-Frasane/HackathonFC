
import {useState} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiSolidEdit } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { IoCheckmarkOutline } from "react-icons/io5"
import { Switch } from '@/components/ui/switch'
import UpdateForm from "./updateForm";
export const columns = [
    {
        accessorKey: "id",
        header: "Id",

    },
    {
        accessorKey: "themes_id",
        header: "themes_id",
      },

    {
        accessorKey: "entreprises_id",
        header: "entreprises_id",

    },

    {
        accessorKey: "anne",
        header: "annee",

    },

    {
        accessorKey: "description",
        header: "description",

    },

    {
        accessorKey: "nbPartici",
        header: "nbPartici",

    },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      const [updateFormState, setUpdateFormState] = useState(false);

      return (
        <>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => setUpdateFormState(true)}>Update</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="flex gap-2">
        <Button onClick={() => setUpdateFormState(true)} className="bg-black text-white" >
            <BiSolidEdit size={20}/>
        </Button>


            <Dialog className="items-center justify-center">
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white"><BiSolidTrash size={20}/></Button>
      </DialogTrigger>

  <DialogContent className="sm:max-w-[425px] items-center justify-center ">
    <DialogHeader className="items-center justify-center ">
    <MdErrorOutline size={80}/>
      <DialogTitle className="flex items-center text-[1.7rem]"> Are you sure ?</DialogTitle>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-2 items-center gap-4">
        <Button>Yes</Button>
        <Button>No</Button>
      </div>
    </div>
  </DialogContent>


    </Dialog>
        </div>



        <UpdateForm updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} />
        </>
      )
    },
  },
]


