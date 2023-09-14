'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
	Session,
	createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';

export default function ShelvesPage() {
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

	useEffect(() => console.log('session', session), []);

	return (
		<main className='flex flex-col min-h-screen items-center'>
			<h1 className='text-4xl font-bold'>My bookshelves</h1>
			<p>{session?.user.id}</p>
		</main>
	);
}
