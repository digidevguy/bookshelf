'use client';
import {
	Session,
	createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export default function Account() {
	const [session, setSession] = useState<Session>();
	const supabase = createClientComponentClient();

	useEffect(() => {
		const fetchSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			if (session) {
				setSession(session);
			}
		};
		fetchSession();
	});

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold text-center'>Account page</h1>
			<div></div>
		</main>
	);
}
