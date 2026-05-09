import React from 'react';

export default function PartnerRegister() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex items-center justify-center p-6">
      <section
        className="w-full max-w-[520px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-800"
        role="region"
        aria-labelledby="partner-register-heading"
      >
        <div className="p-6 md:p-7">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold shadow-sm dark:bg-blue-400/10 dark:text-blue-300">
              FP
            </div>
            <h1 id="partner-register-heading" className="text-xl font-semibold tracking-tight">
              Join as a Food Partner
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Tell us about your business to get started
            </p>
          </div>

          <form className="grid gap-4" noValidate>
            <div className="grid gap-1.5">
              <label htmlFor="business-name" className="text-sm font-medium">
                Business name
              </label>
              <input
                id="business-name"
                type="text"
                placeholder="Your Restaurant LLC"
                autoComplete="organization"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="contact-person" className="text-sm font-medium">
                Contact person
              </label>
              <input
                id="contact-person"
                type="text"
                placeholder="Jane Smith"
                autoComplete="name"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-1.5">
                <label htmlFor="partner-email" className="text-sm font-medium">
                  Business email
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
                <label htmlFor="partner-phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="partner-phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  autoComplete="tel"
                  className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="business-type" className="text-sm font-medium">
                Business type
              </label>
              <select
                id="business-type"
                defaultValue=""
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="bakery">Bakery</option>
                <option value="cloud-kitchen">Cloud kitchen</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="business-address" className="text-sm font-medium">
                Address
              </label>
              <input
                id="business-address"
                type="text"
                placeholder="Street, number, suite"
                autoComplete="street-address"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-1.5">
                <label htmlFor="business-city" className="text-sm font-medium">
                  City
                </label>
                <input
                  id="business-city"
                  type="text"
                  placeholder="City"
                  autoComplete="address-level2"
                  className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="business-state" className="text-sm font-medium">
                  State/Province
                </label>
                <input
                  id="business-state"
                  type="text"
                  placeholder="State"
                  autoComplete="address-level1"
                  className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="partner-password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="partner-password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:translate-y-[1px] transition dark:focus:ring-blue-500/40"
            >
              Create partner account
            </button>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              Already a partner?{' '}
              <a href="/food-partner/login" className="text-blue-600 hover:underline dark:text-blue-400">
                Sign in
              </a>
              <div className="mt-1">
                or{' '}
                <a href="/user/register" className="text-blue-600 hover:underline dark:text-blue-400">
                  Create a user account
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}