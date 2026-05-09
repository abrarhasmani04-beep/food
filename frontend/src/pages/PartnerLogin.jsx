import React from 'react';

export default function PartnerLogin() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex items-center justify-center p-6">
      <section
        className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-800"
        role="region"
        aria-labelledby="partner-login-heading"
      >
        <div className="p-6 md:p-7">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold shadow-sm dark:bg-blue-400/10 dark:text-blue-300">
              FP
            </div>
            <h1 id="partner-login-heading" className="text-xl font-semibold tracking-tight">
              Partner Sign In
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Access your partner dashboard
            </p>
          </div>

          <form className="grid gap-4" noValidate>
            <div className="grid gap-1.5">
              <label htmlFor="partner-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="partner-email"
                type="email"
                placeholder="partner@restaurant.com"
                autoComplete="email"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="partner-password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="partner-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:translate-y-[1px] transition dark:focus:ring-blue-500/40"
            >
              Sign in
            </button>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              New partner?{' '}
              <a href="/food-partner/register" className="text-blue-600 hover:underline dark:text-blue-400">
                Create a partner account
              </a>
              <div className="mt-3">
                <a href="/user/login" className="text-blue-600 hover:underline dark:text-blue-400">
                  User sign in
                </a>
              </div>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}
