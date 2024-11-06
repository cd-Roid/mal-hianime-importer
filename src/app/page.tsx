"use client"
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn('mal', { callbackUrl: '/' })}>Authenticate</button>

    </div>
  );
}
