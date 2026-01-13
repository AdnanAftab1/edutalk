"use client"


import { Dialog } from "@/components/ui/dialog";
import Navbar from "./comps/Navbar";
import { ArrowRight, Hand } from 'lucide-react';
import { DialogContent, DialogTrigger, DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Home() {
  return (
    <div className="min-h-screen bg-saas-black text-white ">
      <Navbar />
      <main>
        <div className="relative bg-gradient-to-b from-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center  delay-500 duration-600 animate-fade">
          {/* Orange glow effects */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
          <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

          <div className="section-container relative z-10 text-center w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
              <div className="animate-fade-down">
                

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Enhance academic communication with <span className="bg-gradient-to-r  from-orange-400 to-orange-600 bg-clip-text text-transparent">Edutalk</span>
                </h1>

                <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                  Achieve effective academic communication
                </p>  

                <div className="flex flex-col sm:flex-row gap-4 justify-center mx-4 ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-[#F97316] hover:bg-orange-600 flex  flex-row text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                        Register Now
                        <ArrowRight className="ml-2 mt-1 h-4 w-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="absolute -bottom-20">
                      <Register />
                    </DialogContent>
                  </Dialog>



                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="border-[#F97316] p-2 px-4 rounded-xl ease-in-out duration-400 text-[#F97316] hover:bg-gradient-to-r  hover:from-[#F97316] hover:to-orange-600 hover:text-white">
                        Login
                      </button>
                    </DialogTrigger>
                    <DialogContent className="absolute bottom-20">
                      <Login />
                    </DialogContent>
                  </Dialog>

                </div>
              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
}


import { useRef } from "react";

function Register() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "Parent" // Default role
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setMsg({ type: "error", text: "Passwords don't match" });
      setLoading(false);
      return;
    }

    if (!fileInputRef.current?.files?.[0]) {
      setMsg({ type: "error", text: "Authorization file required" });
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirmPassword", formData.confirmPassword);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("role", formData.role); // Added role
    formDataToSend.append("authorizationFile", fileInputRef.current.files[0]);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        setMsg({ type: "success", text: data.message });
        setFormData({ 
          name: "", 
          email: "", 
          password: "", 
          confirmPassword: "", 
          phoneNumber: "",
          role: "Parent"
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setMsg({ type: "error", text: data.error });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl">
      <DialogTitle className="text-2xl font-semibold mb-4 text-center">Create Account</DialogTitle>

      {msg && (
        <div className={`p-3 mb-4 text-sm rounded-lg text-center font-medium ${
          msg.type === "error" 
            ? "bg-red-500/20 border border-red-500/40 text-red-300" 
            : "bg-green-500/20 border border-green-500/40 text-green-300"
        }`}>
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full flex justify-between items-center">
          <label htmlFor="name" className="text-sm font-medium min-w-[80px]">Name</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none" 
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="email" className="text-sm font-medium min-w-[80px]">Email</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none" 
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="phoneNumber" className="text-sm font-medium min-w-[80px]">Phone</label>
          <input 
            id="phoneNumber" 
            name="phoneNumber"
            type="tel" 
            placeholder="+9876543210"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none" 
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="password" className="text-sm font-medium min-w-[80px]">Password</label>
          <input 
            id="password" 
            name="password"
            type="password" 
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none" 
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="confirm" className="text-sm font-medium min-w-[80px]">Confirm</label>
          <input 
            id="confirm" 
            name="confirmPassword"
            type="password" 
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:outline-none" 
          />
        </div>

        {/* ROLE SELECT */}
        <div className="w-full flex justify-between items-center">
          <label htmlFor="role" className="text-sm font-medium min-w-[80px]">Role</label>
          <select 
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg text-white focus:border-orange-400 focus:outline-none cursor-pointer appearance-none"
          >
            <option value="Parent" className="bg-orange-400/60 text-white font-semibold">Parent</option>
            <option value="Teacher" className="bg-orange-400/60 text-white font-semibold">Teacher</option>
            <option value="Admin" className="bg-orange-400/60 text-white font-semibold">Admin</option>
          </select>
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="files" className="text-sm font-medium min-w-[80px]">File</label>
          <input 
            id="files" 
            ref={fileInputRef}
            type="file" 
            accept=".pdf,.doc,.docx"
            disabled={loading}
            className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 mx-2 px-3 py-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#F97316] file:text-white hover:file:bg-orange-600 cursor-pointer" 
          />
        </div>

        <div className="w-full flex justify-center items-center pt-2">
          <button 
            type="submit"
            disabled={loading}
            className="bg-[#F97316] hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex flex-row text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}




function Login() {
  const [username,setuser]=useState("");
  const [password,setpass]=useState("");
  const router=useRouter();


  async function HandleLogin(){
try{
  
    console.log("Login Started")
       const res = await axios.post("/api/login", {
        username,
        password,
      });
    
      console.log(res);
      
    if(res.status===200){
      if(res.data.role=='Parent'){
      router.push('/parent');
    }else if(res.data.role=='Teacher'){
      router.push('/teacher');
    }else if(res.data.role=='Admin'){
      router.push('/admin');
    }
    }
    
    console.log("Login Done");

}catch{
  alert("Error")
}

  }


  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl">
      <DialogTitle className="text-2xl font-semibold mb-4 text-center">
        Login
      </DialogTitle>

      <div className="space-y-4">
        <div className="w-full flex justify-between">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg"
            onChange={(e)=>setuser(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-between">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg"
            onChange={(e)=>setpass(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="bg-[#F97316] hover:bg-orange-600 flex flex-row text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            onClick={HandleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
