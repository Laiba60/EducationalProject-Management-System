import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
              <span className="text-2xl font-extrabold text-[#bb8c4b]">FYP Curator</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight mb-6">
              Your Thesis, <br />
              <span className="text-[#bb8c4b]">Elegantly Managed.</span>
            </h1>

            <p className="text-[#c6c4db] text-lg max-w-md">
              Join the premier digital workspace for academic excellence.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-4">
              {[
                { icon: 'person_add', text: 'Create your account in seconds' },
                { icon: 'folder_open', text: 'Manage your FYP projects' },
                { icon: 'group', text: 'Collaborate with supervisors' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#bb8c4b]/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#bb8c4b] text-base">{item.icon}</span>
                  </div>
                  <p className="text-[#c6c4db] text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="z-10">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvLOXfE6l87uo0ASP5043pm2ClJotMC3ntW_35Pb36sdvCBH4j6QabOiaLvn1w6Y_suDTPU609lp-KNK9LWGwL5mBg7oK1uCqKPvCa7yupMS8gfCaDIENuk6S8znAJmnLB4j3q2s43u6uq99wI1Qfpfj_WyOvpZbvO9AlNUzXzYRJbcXzvduCfx2I6fleYFOuQfZ1xCJnALrGmRAcIbZu_74e2KzlMHbts9iegMc0vRyRDRx6H6uUIvl1lUhd8l4IplpT3MrimN-A"
                alt="Dean"
              />
              <div>
                <p className="text-sm">"The standard for project governance."</p>
                <p className="text-xs text-[#bb8c4b] uppercase mt-1">Dean of Research</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7e571a]/20 blur-[120px] rounded-full"></div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white overflow-y-auto">
          <div className="max-w-md w-full mx-auto">

            {/* Mobile Logo */}
            <div className="md:hidden flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-[#bb8c4b] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">account_balance</span>
              </div>
              <span className="text-xl font-extrabold text-[#bb8c4b]">FYP Curator</span>
            </div>

            <header className="mb-8">
              <h2 className="text-xl font-bold text-[#191c1d] mb-2">Create Account</h2>
              <p className="text-[#5d5c70]">
                Already have an account?{' '}
                <Link to="/" className="text-[#7e571a] font-semibold hover:underline transition-all">
                  Login here
                </Link>
              </p>
            </header>

            {/* Error */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500 text-lg">error</span>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Full Name */}
              <div>
                <label className="block text-[#4f4539] font-medium mb-1.5 text-sm">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40 text-xl">person</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-[#edeeef] rounded-xl text-[#191c1d] focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-white outline-none transition-all placeholder:text-[#5d5c70]/40"
                    placeholder="John Doe"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              
              <div>
                <label className="block text-[#4f4539] font-medium mb-1.5 text-sm">Academic Email</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40 text-xl">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-[#edeeef] rounded-xl text-[#191c1d] focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-white outline-none transition-all placeholder:text-[#5d5c70]/40"
                    placeholder="email@university.edu"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[#4f4539] font-medium mb-1.5 text-sm">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40 text-xl">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-3 bg-[#edeeef] rounded-xl text-[#191c1d] focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-white outline-none transition-all placeholder:text-[#5d5c70]/40"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Min. 6 characters"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5d5c70]/40 hover:text-[#7e571a] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[#4f4539] font-medium mb-1.5 text-sm">Confirm Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40 text-xl">lock_reset</span>
                  <input
                    className="w-full pl-12 pr-12 py-3 bg-[#edeeef] rounded-xl text-[#191c1d] focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-white outline-none transition-all placeholder:text-[#5d5c70]/40"
                    type={showConfirm ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5d5c70]/40 hover:text-[#7e571a] transition-colors"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showConfirm ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-[#4f4539] font-medium mb-1.5 text-sm">Role</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40 text-xl">badge</span>
                  <select
                    className="w-full pl-12 pr-4 py-3 bg-[#edeeef] rounded-xl text-[#191c1d] focus:ring-1 focus:ring-[#7e571a]/20 focus:bg-white outline-none transition-all appearance-none"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#5d5c70]/40 text-xl pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-[#7e571a] to-[#bb8c4b] text-white font-bold rounded-xl shadow-lg shadow-[#bb8c4b]/20 hover:shadow-[#bb8c4b]/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </>
                )}
              </button>

            </form>

            <p className="mt-6 text-center text-xs text-[#5d5c70]">
              By registering, you agree to our{' '}
              <a href="#" className="text-[#7e571a] hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-[#7e571a] hover:underline">Privacy Policy</a>
            </p>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Register;
