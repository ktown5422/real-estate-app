import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import loginBg from "@/public/loginbg.jpg";

export default function Page() {
  return (
    <main className="app-shell grid min-h-[calc(100vh-120px)] items-center gap-8 py-8 lg:grid-cols-[1fr_440px]">
      <section className="relative hidden h-[calc(100vh-160px)] overflow-hidden rounded-lg shadow-[0_24px_80px_rgba(18,28,38,0.16)] lg:block">
        <Image
          src={loginBg}
          alt="Modern home interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-8 left-8 max-w-lg text-white">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75">Create your workspace</p>
          <h1 className="text-5xl font-bold tracking-tight">Search, save, and publish with one account.</h1>
          <p className="mt-4 leading-7 text-white/85">A cleaner way to browse homes and manage your property listings.</p>
        </div>
      </section>

      <section className="panel panel-pad mx-auto w-full max-w-md">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase text-primary">Get started</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Create your NestFind account</h2>
        </div>
        <SignUp />
      </section>
    </main>
  );
}
