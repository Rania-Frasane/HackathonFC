import React,{useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Uploader from "./uploader";
import { Button } from "@/components/ui/button"

export default function UpdateForm({updateFormState, setUpdateFormState}) {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [role,setRole] = useState("");
    const [password,setPassword] = useState(""); // État pour stocker le rôle sélectionné
    const [modalOpen, setModalOpen] = useState(false);
    const [position, setPosition] = React.useState("bottom")
    const [tableNames, setTableNames] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [qrValue, setQrValue] = useState("");
    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleAddUser = () => {
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            role: role // Utilisation de l'état du rôle sélectionné
        };

        setUsersList([...usersList, newUser]);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setRole("");
        console.log(usersList);
        setModalOpen(false);
    };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState} className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
        <DialogContent className="max-w-[50rem]">
                    <DialogHeader>
                        <DialogTitle>Update User</DialogTitle>
                        <DialogDescription >Create a new user Lorem ipsum dolor sit amet consectetur </DialogDescription>
                         <div className="flex flex-col gap-3 items-center justify-center pt-4">
                        <div className="flex gap-6">
                                <Input type="text" placeholder="Matricule" className="w-[585px] p-2 border border-gray-300 rounded-md" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                                <Input type="text" placeholder="Nom" className="w-72 p-2 border border-gray-300 rounded-md" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                <Input type="text" placeholder="Prenom" className="w-72 p-2 border border-gray-300 rounded-md" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                                <Input type="text" placeholder="Email" className="w-72 p-2 border border-gray-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" placeholder="Adresse" className="w-72 p-2 border border-gray-300 rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                                <Input type="text" placeholder="téléphone" className="w-72 p-2 border border-gray-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" placeholder="date de naissance" className="w-72 p-2 border border-gray-300 rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                                <Input type="text" placeholder="genre" className="w-72 p-2 border border-gray-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" placeholder="lieu d'affectation" className="w-72 p-2 border border-gray-300 rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="flex gap-6">
                            <Select>
                                <SelectTrigger className="w-[585px]">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Interne</SelectItem>
                                    <SelectItem value="dark">Externe</SelectItem>
                                </SelectContent>
                                </Select>
                            </div>
                            <div className="flex gap-3">
                                <Select>
                                <SelectTrigger className="w-72">
                                    <SelectValue placeholder="les diplomes" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Interne</SelectItem>
                                    <SelectItem value="dark">Externe</SelectItem>
                                </SelectContent>
                                </Select>

                                <Select>
                                <SelectTrigger className="w-72">
                                    <SelectValue placeholder="certification" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Interne</SelectItem>
                                    <SelectItem value="dark">Externe</SelectItem>
                                </SelectContent>
                                </Select>
                            </div>
                            <DialogClose>
                                <Button variant="outline" className="justify-end items-end bg-black text-white" onClick={handleAddUser}>Add Intervenant</Button>
                            </DialogClose>
                        </div>
                    </DialogHeader>
                </DialogContent>
    </Dialog>
  )
}
