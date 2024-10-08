

export default function Home() {
  return (
    <div className="font-sans flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">Form Demo</h1>
        <form className="grid gap-4 bg-slate-50 p-5 text-slate-900">
          <label htmlFor="username">
            Username
            <input id="username" type="text" className="block" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" className="block" />
          </label>
          <label htmlFor="passwordConfirm">
            Password Confirm
            <input id="passwordConfirm" type="password" className="block" />
            <div className="error-display hidden">Passwords do not match.</div>
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
