import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from '../api/Axios';

export const description = "A login page with two columns. The first column has the login form with email and password. There's a Forgot your password link and a link to sign up if you do not have an account. The second column has a cover image.";
export const iframeHeight = "800px";
export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get('/sanctum/csrf-cookie').catch(error => {
      console.error('Could not initialize CSRF protection', error);
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear any previous error messages
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Clear any previous error messages
  };

  const validateInput = () => {
    let isValid = true;
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    }
    return isValid;
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
        console.log(email,password);
      const response = await axios.post('http://localhost:8000/api/login', { email, password });

      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 419) {
        setErrors({ message: 'Session expired. Please refresh the page.' });
      } else if (error.response) {
        setErrors({ message: error.response.data.message });
      } else {
        setErrors({ message: 'Network error. Please try again later.' });
      }
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
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
              {emailError && <span className="text-red-500">{emailError}</span>}
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
              {passwordError && <span className="text-red-500">{passwordError}</span>}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          {errors.message && <div className="text-red-500 text-center mt-2">{errors.message}</div>}
          <div className="mt-4 text-center text-sm">
            Don't have an account? <Link to="/signup" className="underline">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://frenchmania.fr/wp-content/uploads/2018/04/SAM_3384.jpg"
          alt="Login Page Background"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
