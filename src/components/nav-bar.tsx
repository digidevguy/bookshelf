'use client';
import Link from 'next/link';
import {
	Session,
	createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import navigation from '@/app/libs/navigation';

export default function NavBar() {
	const supabase = createClientComponentClient();
	const [session, setSession] = useState<Session | null>(null);
	const router = useRouter();

	useEffect(() => {
		async function getSession() {
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession();

			if (session) {
				setSession(session);
			}
		}
		getSession();
	});

	async function handleGoogleSignIn() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: {
					access_type: 'offline',
					prompt: 'consent',
				},
			},
		});
		if (error) {
			console.error(error);
			return;
		}
		console.log('Data: ', data);
		setTimeout(() => {
			router.push('/account'), 2000;
		});
	}

	async function handleSignOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
			return;
		}
		setSession(null);
		setTimeout(() => {
			router.push('/'), 2000;
		});
	}

	return (
		<nav className='flex flex-row space-x-4 p-4'>
			{navigation.map(({ label, path }) => (
				<Link
					key={label}
					href={path}
					className='p-2 rounded-md hover:bg-slate-400 hover:shadow-md transition duration-2'
				>
					{label}
				</Link>
			))}
			{session ? (
				<button
					onClick={handleSignOut}
					className='p-2 rounded-md hover:bg-slate-400 hover:shadow-md transition duration-2'
				>
					Sign out
				</button>
			) : (
				<button
					onClick={handleGoogleSignIn}
					className='p-2 rounded-md hover:bg-slate-400 hover:shadow-md transition duration-2'
				>
					Sign in with Google
				</button>
			)}
		</nav>
	);
}
