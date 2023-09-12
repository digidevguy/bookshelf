import NavBar from '@/components/nav-bar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bookshelf',
	description: 'A library app built with Next.js and Supabase Auth.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
