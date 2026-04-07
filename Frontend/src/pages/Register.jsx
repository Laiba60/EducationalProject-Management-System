import React from 'react';
const Register = () => {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen flex items-center justify-center p-6">

      <main className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-2xl min-h-[700px]">

        {/* LEFT SIDE */}
        <section className="hidden md:flex flex-col justify-between p-12 bg-[#2e3132] text-white relative">

          <div className="z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-[#bb8c4b] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">account_balance</span>
              </div>
              <span className="text-2xl font-extrabold text-[#bb8c4b]">
                FYP Curator
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight mb-6">
              Your Thesis, <br />
              <span className="text-[#bb8c4b]">Elegantly Managed.</span>
            </h1>

            <p className="text-[#c6c4db] text-lg max-w-md">
              Join the premier digital workspace for academic excellence.
            </p>
          </div>

          <div className="z-10">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvLOXfE6l87uo0ASP5043pm2ClJotMC3ntW_35Pb36sdvCBH4j6QabOiaLvn1w6Y_suDTPU609lp-KNK9LWGwL5mBg7oK1uCqKPvCa7yupMS8gfCaDIENuk6S8znAJmnLB4j3q2s43u6uq99wI1Qfpfj_WyOvpZbvO9AlNUzXzYRJbcXzvduCfx2I6fleYFOuQfZ1xCJnALrGmRAcIbZu_74e2KzlMHbts9iegMc0vRyRDRx6H6uUIvl1lUhd8l4IplpT3MrimN-A"
                alt=""
              />
              <div>
                <p className="text-sm">"The standard for project governance."</p>
                <p className="text-xs text-[#bb8c4b] uppercase mt-1">
                  Dean of Research
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7e571a]/20 blur-[120px] rounded-full"></div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white">
          <div className="max-w-md w-full mx-auto">

            <header className="mb-10">
              <h2 className="text-xl font-bold text-[#191c1d] mb-2">
                Create Account
              </h2>
              <p className="text-[#5d5c70]">
                Enter your credentials to begin your journey.
              </p>
            </header>

            <form className="space-y-6">

              {/* NAME */}
              <div>
                <label className="text-[#4f4539] font-medium">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40">person</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-[#edeeef] rounded-xl text-[#191c1d] focus:ring-1 focus:ring-[#7e571a]/20 outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-[#4f4539] font-medium">Email</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-[#edeeef] rounded-xl text-[#191c1d]"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-[#4f4539] font-medium">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-3 bg-[#edeeef] rounded-xl text-[#191c1d]"
                    type="password"
                  />
                </div>
              </div>

              {/* ROLE */}
              <div>
                <label className="text-[#4f4539] font-medium">Role</label>
                <select className="w-full p-3 bg-[#edeeef] rounded-xl text-[#191c1d]">
                  <option>Student</option>
                  <option>Teacher</option>
                </select>
              </div>

              {/* BUTTON */}
              <button className="w-full py-4 bg-gradient-to-r from-[#7e571a] to-[#bb8c4b] text-white font-bold rounded-xl">
                Register
              </button>

            </form>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Register;