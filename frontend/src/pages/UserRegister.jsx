
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function UserRegister() {

  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const response = await axios.post('http://localhost:9000/api/user/register',{
      fullName,
      email,
      password
    },{withCredentials:true}) //this is for store the token in cookie

    console.log(response.data)
    navigate("/")

    
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex items-center justify-center p-6">
      <section
        className="w-full max-w-[440px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-800"
        role="region"
        aria-labelledby="user-register-heading"
      >
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-100 text-blue-600 font-bold shadow-sm dark:bg-blue-400/10 dark:text-blue-300">
              U
            </div>
            <h1 className="m-0 text-base font-semibold">Create your account</h1>
          </div>

          <h2 id="user-register-heading" className="text-2xl font-semibold tracking-tight mb-2">
            Sign up as User
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Join us to start ordering your favorites.
          </p>

          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-1.5">
              <label htmlFor="user-name" className="text-sm font-medium">
                Full name
              </label>
              <input
              name="fullName"
                id="user-name"
                type="text"
                placeholder="Jane Doe"
                autoComplete="name"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="user-email" className="text-sm font-medium">
                Email
              </label>
              <input
              name='email'
                id="user-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="user-password" className="text-sm font-medium">
                Password
              </label>
              <input
              name="password"
                id="user-password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200/60 dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:translate-y-[1px] transition dark:focus:ring-blue-500/40"
              
        >
              Create account
            </button>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              Already have an account?{' '}
              <a href="/user/login" className="text-blue-600 hover:underline dark:text-blue-400">
                Sign in
              </a>
              <div className="mt-1">
                or{' '}
                <a href="/food-partner/register" className="text-blue-600 hover:underline dark:text-blue-400">
                  sign up as a food partner
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}