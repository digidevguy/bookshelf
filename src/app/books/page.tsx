'use client';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function BookSearchPage() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [numResults, setNumResults] = useState<number>(0);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm((prev) => event.target.value);
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			const results = await fetch(`/api/search?q=${searchTerm}`);
			const { totalItems, items } = await results.json();
			setSearchResults(items);
			setNumResults(totalItems);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => console.log(searchResults), [searchResults]);

	return (
		<main className='flex min-h-screen flex-col items-center p-24 space-y-4'>
			<h1 className='text-4xl font-bold text-center'>Book Search Page</h1>
			<form
				className='flex flex-col border border-slate-400 p-2 rounded-md'
				onSubmit={handleSubmit}
			>
				<label htmlFor='book-search'>Search for a book</label>
				<div className='flex flex-row space-x-2 justify-center items-center '>
					<input
						type='text'
						id='book-search'
						name='book-search'
						className='border-2 border-gray-500 rounded-md p-2'
						value={searchTerm}
						onChange={handleInputChange}
					/>
					<button className='px-2 py-3'>
						<FaSearch />
					</button>
				</div>
			</form>
			{numResults ? (
				<div>
					<p>{numResults}</p>
				</div>
			) : null}
			<div className='flex flex-col space-y-4 p-2'>
				{searchResults.map((book) => (
					<div key={book.id} className='flex flex-row space-x-4 items-center'>
						<div className='w-32 h-48'>
							<Image
								src={book.volumeInfo.imageLinks.thumbnail}
								alt={book.volumeInfo.title}
								// width={128}
								// height={193}
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div>
							<h2 className='text-2xl font-bold'>{book.volumeInfo.title}</h2>
							<h3 className='text-md font-semibold'>
								{book.volumeInfo.subtitle}
							</h3>
							<p>{book.volumeInfo.authors}</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
