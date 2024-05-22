import React, { createContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import QrCodeTemplate from './QrCodeTemplate';
import TabsDemoCustom from './TabsDemoCustom';
import { FaUserCircle } from "react-icons/fa";
import UpdateForm from './updateForm';
import { MdErrorOutline } from "react-icons/md";
import DeleteForm from './deleteForm';

export const UserContext = createContext();

function AddQrCode() {
    const { state } = useLocation();

    const { names } = state == null ? "tes" : state.value;

    console.log("qr",names)

    const [user, setUser] = useState([{ nom: 'toto' },{ nom: 'titi' }]);
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [role,setRole] = useState("");
    const [password,setPassword] = useState(""); // État pour stocker le rôle sélectionné
    const [modalOpen, setModalOpen] = useState(false);
    const [position, setPosition] = useState("bottom")
    const [tableNames, setTableNames] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [updateFormState, setUpdateFormState] = useState(false);
    const [deleteFormState, setDeleteFormState] = useState(false);
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
        <div className='flex gap-5'>
            {usersList.map((user, index) => (
                <div key={index}>
                    <Dialog>

                    <DialogTrigger >
                 <Card className="w-[250px] h-[300px] ">
                        <DropdownMenu className="flex justify-end ">
                            <DropdownMenuTrigger asChild className="flex justify-end ">
                                <Button className="flex justify-end " style={{backgroundColor:"white"}}><BiDotsVerticalRounded size={25} color='black'/></Button>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuItem onSelect={() => setUpdateFormState(true)}>Update</DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => setDeleteFormState(true)}>Delete</DropdownMenuItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <CardHeader className="flex text-center justify-end">
                            <CardTitle>{user.firstname} {user.lastname}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center m-5   mt-0 ">
                                <FaUserCircle size={130} className="w-19 h-19 m-auto "/>
                                <p>{user.role}</p>
                            </div>
                            <div className="justify-center text-zinc-500">{user.email}</div>
                        </CardContent>
                        <CardFooter className="justify-center"></CardFooter>
                    </Card>
                    <UpdateForm updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} />
                    <DeleteForm deleteFormState={deleteFormState} setDeleteFormState={setDeleteFormState} />
                    </DialogTrigger >
                    <DialogContent className="h-[380px] w-[880px]">
                    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
  <div className="h-32 rounded-lg ">                                <FaUserCircle size={130} className="w-19 h-19 m-auto "/>
</div>
  <div className="h-32 rounded-lg py-4 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore odit animi asperiores suscipit, quidem distinctio libero reprehenderit
  rem eveniet voluptates vel, magnam iure eaque consectetur nulla sint aliquam enim.</div>
</div>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
  <div className="h-32 rounded-lg ">
</div>
  <div className="h-32 rounded-lg pt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore odit animi asperiores suscipit, quidem distinctio libero reprehenderit
  rem eveniet voluptates vel, magnam iure eaque consectetur nulla sint aliquam enim.</div>
</div>
    </DialogHeader>
                    </DialogContent>
                    </Dialog>
                </div>
            ))}
            <Dialog>
                <DialogTrigger>
                    <Card className="w-[250px] h-[300px] border-dashed grid place-content-center">
                        <CardHeader className="text-center">
                            <CardTitle className="text-lg">Add Films for your Cinema</CardTitle>

                        </CardHeader>
                        <CardContent>
                            {tableNames.map((tableName, index) => (
                                <div key={index}>{tableName.nom}</div>
                            ))}
                            <UserContext.Provider value={user}>
                                <button
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#ffffff',
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        console.log('Icon clicked');
                                    }}
                                >
                                    <MdAddBox size={50} style={{ color: '#000' }} />
                                </button>
                            </UserContext.Provider>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[50rem]">
                    <DialogHeader>
                        <DialogTitle>Ajouter un Intervenant</DialogTitle>
                        <DialogDescription >Create a new Intervenant  </DialogDescription>
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
                                    <SelectItem value="Spécialités">Spécialités</SelectItem>
                                    <SelectItem value="Niveau Bac+2">Niveau Bac+2</SelectItem>
                                    <SelectItem value="Bac+3">Bac+3</SelectItem>
                                    <SelectItem value="Bac+5">Bac+5</SelectItem>
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
                            <div className="flex gap-3">
                                <Select>
                                <SelectTrigger className="w-72">
                                    <SelectValue placeholder="Competences" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Débutant">Débutant</SelectItem>
                                    <SelectItem value="intermédiaire">intermédiaire</SelectItem>
                                    <SelectItem value="expert">expert</SelectItem>

                                </SelectContent>
                                </Select>

                                <Input type="text" placeholder="description" className="w-72 p-2 border border-gray-300 rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />

                            </div>
                            <DialogClose>
                                <Button variant="outline" className="justify-end items-end bg-black text-white" onClick={handleAddUser}>Add Intervenant</Button>
                            </DialogClose>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddQrCode;
