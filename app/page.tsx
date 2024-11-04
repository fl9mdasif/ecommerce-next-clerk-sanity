'use client'
import { useUser } from "@clerk/nextjs";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import Image from "next/image";


export default function Home() {

  const { isSignedIn, user } = useUser();

  console.log('user', user)
  if (!isSignedIn) {
    return <p>Please sign in to view your profile.</p>;
  }
  return (

    <div className=" text-red-600 h-full w-full flex flex-col justify-center items-center ">
      <p className="inline">
        hello world
      </p>
      <p>{user?.id}</p>
      <p>{user.primaryEmailAddress?.emailAddress}</p>

    </div>
  );
}
