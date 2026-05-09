import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {

  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
      e.preventDefault()

      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await axios.post('http://localhost:9000/api/user/login',{
        email,
        password
      },{withCredentials:true})

      console.log(response.data)

      if (response.data.success) {
        navigate("/");
      } else {
        alert(response.data.message);
      }
  
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex items-center justify-center p-6">
      <section
        className="w-full max-w-[440px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-800"
        role="region"
        aria-labelledby="user-login-heading"
      >
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-100 text-blue-600 font-bold shadow-sm dark:bg-blue-400/10 dark:text-blue-300">
              U
            </div>
            <h1 className="m-0 text-base font-semibold">Welcome back</h1>
          </div>

          <h2 id="user-login-heading" className="text-2xl font-semibold tracking-tight mb-2">
            Sign in as User
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Access your account to continue.
          </p>

          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-1.5">
              <label htmlFor="user-login-email" className="text-sm font-medium">
                Email
              </label>
              <input
              name="email"
                id="user-login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="user-login-password" className="text-sm font-medium">
                Password
              </label>
              <input
              name="password"
                id="user-login-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <input type="checkbox" className="size-4 rounded border-gray-300 dark:border-gray-700 accent-blue-600" /> Remember me
              </label>
              <a href="#forgot" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:translate-y-[1px] transition dark:focus:ring-blue-500/40"
            >
              Sign in
            </button>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              New here?{' '}
              <a href="/user/register" className="text-blue-600 hover:underline dark:text-blue-400">
                Create a user account
              </a>
              <div className="mt-1">
                or{' '}
                <a href="/food-partner/login" className="text-blue-600 hover:underline dark:text-blue-400">
                  sign in as a food partner
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}