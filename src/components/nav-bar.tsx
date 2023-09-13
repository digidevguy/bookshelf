'use client';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
	const supabase = createClientComponentClient();
	const router = useRouter();

	return (
		<nav className='flex flex-row space-x-4 p-4'>
			<Link href='/'>Home</Link>
			<Link href='/account'>Account</Link>
			<button>Sign in with Google</button>
		</nav>
	);
}
