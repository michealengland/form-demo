import { PasswordInput } from '../components/PasswordInput';

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
          <PasswordInput id="password" label="Password" />
          <PasswordInput id="passwordConfirm" label="Password Confirm" msg="Passwords do not match."/>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
