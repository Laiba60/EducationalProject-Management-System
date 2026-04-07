import React from 'react';


const Login = () => {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body antialiased">
      <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <section className="hidden md:flex md:w-1/2 lg:w-3/5 bg-[#2e3132] relative items-center justify-center p-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#7e571a]/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#bb8c4b]/5 blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="mb-12">
              <h1 className="font-headline text-[#bb8c4b] text-4xl font-extrabold tracking-tighter mb-2">FYP Curator</h1>
              <p className="text-[#e1e3e4] font-label tracking-widest uppercase text-xs">Management Portal</p>
            </div>

            <div className="mb-16 aspect-square w-full max-w-md rounded-xl bg-[#ffffff]/5 backdrop-blur-sm border border-white/5 flex items-center justify-center p-8 overflow-hidden group">
              <img
                alt="Academic Excellence"
                className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV0oTL1cr2OGbSOhaLW-wQ7MtJG3MR7YWKXiMxsxDqZxrfwuyQYeiwzqJyMgEcBnk4NbHqp0PGIqIEKDZ5XICi8b_6zSvEijA-GpKqZXIm2IGyO33LoFQNxpYnmz6ivcKFCZSWj5GoEAtPctnkjgZJiQES9VNu6g-4FQS4-YZiuSFEO4RkhJSYqI8_LknPLemo4it0KXUDyew3e7pYwPStBF8uh-4NqJ3zekRdQtfFP9n-kVMcjF7rSkfFAxN8Se2dG8rp4q79pWU"
              />
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl text-white font-bold leading-tight tracking-tight">
                Transforming Thesis into Excellence.
              </h2>
              <p className="text-[#e1e3e4] text-base max-w-md leading-relaxed">
                A curated digital workspace designed for the sophisticated management of final year academic research and project coordination.
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-12 flex items-center gap-4">
            <span className="text-[#e1e3e4]/40 text-xs font-label">© 2024 THE ACADEMIC CURATOR</span>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 bg-[#f8f9fa]">
          <div className="w-full max-w-md">

            <div className="md:hidden mb-12 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#bb8c4b] rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white text-3xl">school</span>
              </div>
              <h1 className="font-headline text-[#191c1d] text-3xl font-extrabold tracking-tighter">FYP Curator</h1>
            </div>

            <header className="mb-10 text-left">
              <h2 className="font-headline text-lg font-bold text-[#191c1d] mb-2">Welcome Back</h2>
              <p className="text-[#5d5c70] text-base">Access your academic management portal</p>
            </header>

            <form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="block font-label text-base text-[#4f4539] font-medium" htmlFor="email">Academic Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#5d5c70]/60 group-focus-within:text-[#7e571a] transition-colors">mail</span>
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-[#edeeef] border-none rounded-xl focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-[#ffffff] text-[#191c1d] placeholder:text-[#5d5c70]/40 transition-all outline-none"
                    id="email"
                    name="email"
                    placeholder="name@university.edu"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block font-label text-base text-[#4f4539] font-medium" htmlFor="password">Password</label>
                  <a className="text-[#7e571a] font-label text-base hover:underline transition-all" href="#">Forgot Password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#5d5c70]/60 group-focus-within:text-[#7e571a] transition-colors">lock</span>
                  </div>
                  <input
                    className="w-full pl-12 pr-12 py-4 bg-[#edeeef] border-none rounded-xl focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-[#ffffff] text-[#191c1d] placeholder:text-[#5d5c70]/40 transition-all outline-none"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                  <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5d5c70]/40 hover:text-[#7e571a] transition-colors" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center space-x-3 pt-2">
                <div className="relative flex items-center">
                  <input className="w-5 h-5 rounded-md border-[#e7e8e9] bg-[#f3f4f5] text-[#7e571a] focus:ring-[#7e571a]/20 cursor-pointer" id="remember" type="checkbox"/>
                </div>
                <label className="text-[#4f4539] text-base select-none cursor-pointer" htmlFor="remember">Stay logged in for this session</label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="bg-gradient-to-r from-[#7e571a] to-[#bb8c4b] w-full py-4 rounded-xl text-white font-headline font-bold text-lg shadow-lg shadow-[#bb8c4b]/20 hover:shadow-[#bb8c4b]/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                  Login to Portal
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
            </form>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-[#e7e8e9] text-center">
              <p className="text-[#5d5c70] text-base mb-4">New to FYP Curator?</p>
              <button className="w-full py-3 px-6 rounded-xl border border-[#d3c4b4]/30 text-[#4f4539] font-headline font-semibold hover:bg-[#f3f4f5] transition-colors">
                Request Faculty Access
              </button>
              <div className="mt-8 flex justify-center gap-6">
                <a className="text-[#5d5c70]/60 hover:text-[#7e571a] text-xs uppercase tracking-widest font-label transition-colors" href="#">Support</a>
                <a className="text-[#5d5c70]/60 hover:text-[#7e571a] text-xs uppercase tracking-widest font-label transition-colors" href="#">Privacy</a>
                <a className="text-[#5d5c70]/60 hover:text-[#7e571a] text-xs uppercase tracking-widest font-label transition-colors" href="#">System Status</a>
              </div>
            </footer>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;