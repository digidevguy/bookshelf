import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('q');

	try {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle`
		);

		const data = await response.json();

		return NextResponse.json(data);
	} catch (error: any) {
		console.log('Error: ', error);
		return NextResponse.json({ error: error.message });
	}
}
