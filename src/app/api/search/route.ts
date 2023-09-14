import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('q');
	// replace spaces in query with + sign

	console.log(
		`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&maxResults=20`
	);

	try {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
		);

		const { totalItems, items } = await response.json();

		return NextResponse.json({ totalItems, items });
	} catch (error: any) {
		console.log('Error: ', error);
		return NextResponse.json({ error: error.message });
	}
}

('https://www.google.com/search?tbm=bks&q=the+way+of+kings');
