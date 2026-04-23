import { SignIn } from "@clerk/nextjs";
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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75">NestFind access</p>
          <h1 className="text-5xl font-bold tracking-tight">Pick up your search where you left off.</h1>
          <p className="mt-4 leading-7 text-white/85">Save homes, manage listings, and contact property owners from one polished workspace.</p>
        </div>
      </section>

      <section className="panel panel-pad mx-auto w-full max-w-md">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase text-primary">Welcome back</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Sign in to NestFind</h2>
        </div>
        <SignIn />
      </section>
    </main>
  );
}
