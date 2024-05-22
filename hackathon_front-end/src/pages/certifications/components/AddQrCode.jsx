// File path: src/components/AddQrCode.jsx

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
    const { names } = state == null ? { value: "tes" } : state;

    console.log("qr", names);

    const [user, setUser] = useState([{ nom: 'toto' }, { nom: 'titi' }]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [position, setPosition] = useState("bottom");
    const [tableNames, setTableNames] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [updateFormState, setUpdateFormState] = useState(false);
    const [deleteFormState, setDeleteFormState] = useState(false);

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleAddUser = () => {
        const newUser = {
            firstname,
            lastname,
            email,
            phone,
            role,
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

                            <Card className="w-[350px] h-[300px]">
                                <DropdownMenu className="flex justify-end">
                                    <DropdownMenuTrigger asChild className="flex justify-end">
                                        <Button className="flex justify-end" style={{ backgroundColor: "white" }}>
                                            <BiDotsVerticalRounded size={25} color='black' />
                                        </Button>
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
                                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                    <img
                                        alt=""
                                        src="https://th.bing.com/th/id/OIP.WaCOgSUgMm-RNN1PhMBPWgHaEK?rs=1&pid=ImgDetMain"
                                        className="h-56 w-96 object-cover px-2"
                                        width={82}
                                    />
                                    <div className="bg-white p-4 sm:p-6">
                                        <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
                                        <a href="#">
                                            <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                                        </a>
                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                            dignissimos. Molestias explicabo corporis voluptatem?
                                        </p>
                                    </div>
                                </article>
                            </Card>
                            <UpdateForm updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} />
                            <DeleteForm deleteFormState={deleteFormState} setDeleteFormState={setDeleteFormState} />

                </div>
            ))}
            <Dialog>
                <DialogTrigger>
                    <Card className="w-[350px] h-[300px] border-dashed grid place-content-center">
                        <CardHeader className="text-center">
                            <CardTitle className="text-lg">Add Certifications for your Formation</CardTitle>
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
                        <DialogDescription>Create a new Intervenant</DialogDescription>
                        <div className="flex flex-col gap-3 items-center justify-center pt-4">
                            <div className="flex gap-6">
                                <Input type="text" placeholder="Matricule" className="w-[585px] p-2 border border-gray-300 rounded-md" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                                <Input type="text" placeholder="Intitul_certification" className="w-72 p-2 border border-gray-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" placeholder="organisma_certification" className="w-72 p-2 border border-gray-300 rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="flex gap-6">
                                <Select onValueChange={handleRoleChange}>
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
                                        <SelectValue placeholder="domaine" />
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
                                        <SelectValue placeholder="intervenant" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Interne</SelectItem>
                                        <SelectItem value="dark">Externe</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <DialogClose>
                                <Button variant="outline" className="justify-end items-end bg-black text-white" onClick={handleAddUser}>Add Certifications</Button>
                            </DialogClose>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddQrCode;
