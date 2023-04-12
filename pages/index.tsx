import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import SearchIcon from "../public/search-icon.svg";
import { Controls } from "@/components/Controls";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className={`min-h-full bg-black  text-white flex ${session ? 'bg-white':''}`}>
      <Head>
        <title>TikTok Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session && session.user ? (
        // <div className="mx-auto items-center justify-center">
        //   <button className="" onClick={() => signOut()}>Go Home</button>
        // </div>
        <></>
      ) : (
        <div className="flex flex-col mx-auto items-center justify-center my-auto h-48 border rounded-md p-2">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => signIn()}
          >
            Sign in
          </button>
          <p className="text-xl mt-5">You need to sign in to access the books</p>
        </div>
      )}
      {/* </div> */}
      {session && session.user ? (
        <main className="relative bg-black text-white max-w-md w-full h-screen mx-auto p-3">
          <nav className="relative">
            <ul className="flex justify-center items-center gap-3">
              <li>
                <Link href={"/"}>Following</Link>
              </li>
              <li>
                <Link className="underline" href={"/"}>
                  For You
                </Link>
              </li>
            </ul>
            <Link href={"/"} className="absolute top-0 right-3">
              <Image
                src={SearchIcon}
                alt="SearchIcon"
                width={"30"}
                height={"30"}
              />
            </Link>
          </nav>
          <Controls />
          <Nav />
        </main>
      ) : (
        <></>
      )}
    </div>
  );
}
