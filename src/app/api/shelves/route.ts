import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	// const id = searchParams.get('id');

	try {
		// const response = await fetch(
		// 	`https://www.googleapis.com/books/v1/users/${id}/bookshelves`
		// );

		// FIXME - this is a a temporary hack to get around Google User ID issue.
		const response = await fetch(
			`https://www.googleapis.com/books/v1/users/104271749682172392847/bookshelves/2/volumes`
		);

		const data = await response.json();
		console.log('data: ', data);

		return NextResponse.json({ data });
	} catch (error: any) {
		console.log('Error: ', error);
		return NextResponse.json({ error: error.message });
	}
}
