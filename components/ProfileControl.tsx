import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type ProfileControlPropsT = {
  profileUrl: string;
};

export default function ProfileControl({ profileUrl }: ProfileControlPropsT) {
  const { data: session } = useSession();
  
  return (
    <Link href={profileUrl}>
      <Image
        className="rounded-full outline outline-2 outline-white"
        src={session?.user?.image}
        width={40}
        height={40}
        alt="profile user image"
      onClick={()=>signOut()}/>
    </Link>
  );
}
