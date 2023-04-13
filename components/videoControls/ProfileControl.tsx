import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

type ProfileControlPropsT = {
  profileUrl: string;
};

export default function ProfileControl ({ profileUrl }: ProfileControlPropsT) {
  const { data: session } = useSession()

  return (
    <Link href={profileUrl}>
      <Image
        className="rounded-full outline outline-1 outline-white p-1 hover:outline-4"
        src={session?.user?.image || './user-icon.svg'}
        width={60}
        height={60}
        alt="profile user image"
      onClick={() => signOut()}/>
    </Link>
  )
}
