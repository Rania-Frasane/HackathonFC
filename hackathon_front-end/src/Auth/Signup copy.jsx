import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your password link and a link to sign up if you do not have an account. The second column has a cover image.";

export const iframeHeight = "800px";

export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Signupp() {

  const [name, setName] = useState("");
  const [raison, setraison] = useState("");
  const [site, setsite] = useState("");
  const [logo, setlogo] = useState("");
 
  const [representant, setrepresentant] = useState("");

  const [tele1, settele1] = useState("");
  const [tele2, settele2] = useState("");
  const [tele3, settele3] = useState(""); 
  
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [Roles, setRoles] = useState([]);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [resetpassword, setResetPassword] = useState('');
    const [emailreset, setEmailreset] = useState('');
    const [code, setCode] = useState('');
    const [modeemail, setModeEmail]=useState(false)
    const [modecoderesetpassword, setModecoderesetpassword] = useState(false);
    const [modepasswordchange, setModepasswordchange]=useState(false)
  

  // const handleUsernameChange = (e) => setName(e.target.value);
  // const handleadressChange = (e) => setadress(e.target.value);
  // const handleteleChange = (e) => settele(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlenameChange = (e) => setName(e.target.value);
  const handleraisonChange = (e) => setraison(e.target.value);
  const handlesiteChange = (e) => setsite(e.target.value);
  const handlelogoChange = (e) => setlogo(e.target.value);
  const handlerepresentantChange = (e) => setrepresentant(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handletele1Change = (e) => settele1(e.target.value);
  
  const handletele2Change = (e) => settele2(e.target.value);
  const handletele3Change = (e) => settele3(e.target.value);
 
  // const [roles, setRoles] = useState([]);

  useEffect(() => {
    // fetchRole();
  }, []);


// const fetchRole = () => {
//   axios.get('http://localhost:8000/api/getroles')
//     .then(response => setRoles(response.data))
//     .catch(error => console.error('Error fetching roles:', error));
// };
  const sendemail = async (e) => {
    e.preventDefault();
    setError("")
    // if (modeemail && !modecoderesetpassword && !modepasswordchange) {
      try {
        const response = await axios.post(`http://localhost:8000/api/ResetPassword/
        ?email=malak.houali05@gmail.com`);
        if (response.status === 200) {
          setModecoderesetpassword(true)
         
          console.log(modecoderesetpassword)
          console.log("Un mail de réinitialisation a été envoyé ");
        } else {
          console.log("Cette adresse n'est pas enregistrée.");
          setError("Cette adresse n'est pas enregistrée")

        }
      } catch (error) {
        console.error("Error sending email:", error);
        setError("Cette adresse n'est pas enregistrée")
      }
  
  };
  const sendcode = async (e) => {
    e.preventDefault();
    setError("")
      try {
        const response = await axios.post(`http://localhost:8000/api/Code/${code}/${emailreset}`);
       console.log(response.data.message)
        if (response.data.message==='le code est verifié') {
          console.log("Code valide ")
          setModeEmail(false);
          setModecoderesetpassword(false); // Fix here: use setModecoderesetpassword instead of setModecodereset
          setModepasswordchange(true);
        } else {
          console.log("Code invalide");
          setError("Code invalide");

        }
      } catch (error) {
        console.error("Error validating code:", error);
        setError("Error validating code:", error);

      }
    // }
  };
  const changepassword = async (e) => {
    e.preventDefault();
    console.log(resetpassword);
    console.log(emailreset);
    setError("")
    const response = await axios.post('http://localhost:8000/api/changePassword', {
      emailreset: emailreset,
      resetpassword: resetpassword,
    });
    if (response.data.token) {
      console.log('mot de passe changed.');
          setModeEmail(false)
          setModecoderesetpassword(false)
          setModepasswordchange(false)
      navigate('/');
    } else {
      console.log('mot de passe invalid.');
      setError('mot de passe invalid.');

    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.post("http://localhost:8000/api/register", {
        name,
        raison,
        user_id,
        site,
        logo,
        representant,
        tele1,
        tele2,
        tele3,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
     
         {!modeemail && !modecoderesetpassword  && !modepasswordchange && 
      <div className="flex items-center justify-center py-12">
  
        <form onSubmit={handleSubmit} className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Name </Label>
              <Input
                id="username"
                placeholder="Max"
                // value={name}
                onChange={handlenameChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="raison">raison</Label>
              <Input
                id="raison"
                placeholder="raison"
                // value={adress}
                onChange={handleraisonChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="site">site</Label>
              <Input
                id="site"
                placeholder="site"
                // value={adress}
                onChange={handlesiteChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="representant">representant</Label>
              <Input
                id="representant"
                placeholder="representant"
                // value={adress}
                onChange={handlerepresentantChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logo">Logo</Label>
              <Input
              type="file"
                id="logo"
                placeholder="logo"
                // value={tele}
                onChange={handlelogoChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tele1">Téléphone 1</Label>
              <Input
                id="tele1"
                type="Number"
                placeholder="m@example.com"
                // value={email}
                onChange={handletele1Change}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tele2">Téléphone 2</Label>
              <Input
                id="tele2"
                type="Number"
                placeholder="m@example.com"
                // value={email}
                onChange={handletele2Change}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tele3">Téléphone 3</Label>
              <Input
                id="tele3"
                type="Number"
                placeholder="m@example.com"
                // value={email}
                onChange={handletele3Change}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            {/* <select className="form-select" name="" id="" onChange={handleRoleChange}>
  {roles.map(role => (
    <option key={role.id} value={role.id}>{role.name}</option>
  ))}
</select> */}
            <Button type="submit" className="w-full">
              Create an account
            </Button>



            {error && (
              <div className="mt-4 text-center text-sm text-red-500">
                {error}
              </div>
            )}
          </div>
           <p><a href="#" onClick={()=>{setModeEmail(true) ,setError("");}}> Mot de passe oublié</a></p>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>}



      {modeemail && !modecoderesetpassword && !modepasswordchange && (
  <div className="flex items-center justify-center py-12">
    <form onSubmit={sendemail} className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Recuperation mot de passe</h1>
        <p className="text-balance text-muted-foreground">
          Enter your Email
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            // value={email}
            onChange={(e)=>{setEmailreset(e.target.value)}}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Verifier email
        </Button>
        {error && (
          <div className="mt-4 text-center text-sm text-red-500">
            {error}
          </div>
        )}
      </div>
    </form>
  </div>
)}



{modeemail && modecoderesetpassword && !modepasswordchange &&(
 <div className="flex items-center justify-center py-12">
 <form onSubmit={sendcode} className="mx-auto grid w-[350px] gap-6">
   <div className="grid gap-2 text-center">
     <h1 className="text-3xl font-bold">Recuperation mot de passe</h1>
     <p className="text-balance text-muted-foreground">
     Please enter your code
     </p>
   </div>
   <div className="grid gap-4">
   <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={emailreset}
            onChange={(e)=>{setEmailreset(e.target.value)}}
            required
          />
        </div>
     <div className="grid gap-2">
       <Label htmlFor="code">Code de verification</Label>
       <Input
         id="code"
         type="code"
         placeholder="m@example.com"
        //  value={code}
         onChange={(e)=>{setCode(e.target.value)}}
         required
       />
     </div>
     <Button type="submit" className="w-full">
       Verifier code
     </Button>
     {error && (
       <div className="mt-4 text-center text-sm text-red-500">
         {error}
       </div>
     )}
   </div>
 </form>
</div>
)}

{!modeemail && !modecoderesetpassword  && modepasswordchange &&
  (

<div className="flex items-center justify-center py-12">
 <form onSubmit={changepassword} className="mx-auto grid w-[350px] gap-6">
   <div className="grid gap-2 text-center">
     <h1 className="text-3xl font-bold">Recuperation mot de passe</h1>
     <p className="text-balance text-muted-foreground">
     Please enter your new password
     </p>
   </div>
   <div className="grid gap-4">
   <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                // value={password}
                onChange={(e)=>{setResetPassword(e.target.value)}}
                required
              />
            </div>
     <Button type="submit" className="w-full">
       Change
     </Button>
     {error && (
       <div className="mt-4 text-center text-sm text-red-500">
         {error}
       </div>
     )}
   </div>
 </form>
</div>

  )}


















      <div className="hidden bg-muted lg:block">
        {/* <img
          src="https://frenchmania.fr/wp-content/uploads/2018/04/SAM_3384.jpg"
          alt="Cover"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
</div>
);
}
