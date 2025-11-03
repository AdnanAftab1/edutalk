import { Dialog } from "@/components/ui/dialog";
import Navbar from "./comps/Navbar";
import { ArrowRight } from 'lucide-react';
import { DialogContent, DialogTrigger, DialogTitle } from "@radix-ui/react-dialog";


export default function Home() {
  return (
    <div className="min-h-screen bg-saas-black text-white ">
      <Navbar />
      <main>
        <div className="relative bg-gradient-to-b from-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center">
          {/* Orange glow effects */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
          <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

          <div className="section-container relative z-10 text-center w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
              <div className="animate-fade-down">
                <span className="inline-block bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#F97316]/20">
                  Introducing Sassland 2.0
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                  Transform Your Business With Our <span className="bg-gradient-to-r  from-orange-400 to-orange-600 bg-clip-text text-transparent">SaaS Solution</span>
                </h1>

                <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                  Streamline your operations, boost productivity, and enhance customer satisfaction with our cutting-edge SaaS platform. Experience seamless integration and unparalleled support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mx-4 ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-[#F97316] hover:bg-orange-600 flex  flex-row text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                        Register Now
                        <ArrowRight className="ml-2 mt-1 h-4 w-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="absolute bottom-20">
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

function Register() {
  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl">
      <DialogTitle className="text-2xl font-semibold mb-4 text-center">
        Create Account
      </DialogTitle>

      <div className="space-y-4">
        <div className="w-full flex justify-between">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg" />
        </div>
        <div className="w-full flex justify-between">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg" />
        </div>
        <div className="w-full flex justify-between">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg" />
        </div>
        <div className="w-full flex justify-between">
          <label htmlFor="confirm">Confirm Password</label>
          <input id="confirm" type="password" placeholder="Re-enter password" className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg" />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="bg-[#F97316] hover:bg-orange-600 flex  flex-row text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">Register</button>
        </div>
      </div>
    </div>
  );
}

function Login() {
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
          />
        </div>

        <div className="w-full flex justify-between">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-white/20 backdrop-blur-md border-white/30 mx-2 px-2 rounded-lg"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="bg-[#F97316] hover:bg-orange-600 flex flex-row text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
