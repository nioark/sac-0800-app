import React from "react";

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (event.currentTarget.checkValidity()) {
  }
  // Implementation for form submission
};

export default function LoginForm() {
  return (
    <div className="w-[550px] px-8 md:px-32 lg:px-24">
      <form onSubmit={onSubmit} className="rounded-md bg-white p-5 shadow-2xl">
        <h1 className="mb-1 text-2xl font-bold text-gray-800">Bem vindo!</h1>
        <p className="mb-8 text-sm font-normal text-gray-600">
          Entre na sua conta
        </p>
        <div className="mb-8 flex items-center rounded-2xl border-2 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            id="email"
            className="w-full border-none bg-white pl-2 text-slate-800 outline-none"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-12 flex items-center rounded-2xl border-2 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="w-full border-none bg-white pl-2 text-slate-800 outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="mb-2 mt-5 block w-full rounded-2xl bg-indigo-600 py-2 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-indigo-700">
          Login
        </button>
        {/* <div className="mt-4 flex justify-between">
        <span className="ml-2 cursor-pointer text-sm transition-all duration-500 hover:-translate-y-1 hover:text-blue-500">Forgot Password ?</span>
        <a href="#" className="ml-2 cursor-pointer text-sm transition-all duration-500 hover:-translate-y-1 hover:text-blue-500">Don't have an account yet?</a>
        </div> */}
      </form>
    </div>
  );
}
