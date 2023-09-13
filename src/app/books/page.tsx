'use client';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function BookSearchPage() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchResults, setSearchResults] = useState<any[]>([]);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm((prev) => event.target.value);
	}

	return (
		<main className='flex min-h-screen flex-col items-center p-24 space-y-4'>
			<h1 className='text-4xl font-bold text-center'>Book Search Page</h1>
			<form className='flex flex-col border border-slate-400 p-2 rounded-md'>
				<label htmlFor='book-search'>Search for a book</label>
				<div className='flex flex-row space-x-2 justify-center items-center '>
					<input
						type='text'
						id='book-search'
						name='book-search'
						className='border-2 border-gray-500 rounded-md'
						value={searchTerm}
						onChange={handleInputChange}
					/>
					<button className='px-2 py-3'>
						<FaSearch />
					</button>
				</div>
			</form>
		</main>
	);
}
