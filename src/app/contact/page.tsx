export default function ContactPage() {
	return (
		<main className='max-w-xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-4'>Contact</h1>

			<p className='text-lg text-gray-700 mb-4'>
				For commissions, exhibition invites, or inquiries, feel free to reach
				out:
			</p>

			<ul className='text-md text-gray-800 mb-8 space-y-2'>
				<li>
					📧 Email:{' '}
					<a
						href='mailto:scarrjam@gmail.com'
						className='text-blue-600 underline hover:text-blue-800'
					>
						scarrjam@gmail.com
					</a>
				</li>
				<li>
					📸 Instagram:{' '}
					<a
						href='https://www.instagram.com/scarrjam/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 underline hover:text-blue-800'
					>
						@scarrjam
					</a>
				</li>
			</ul>

			{/* Optional form section */}
			<form
				action='https://formspree.io/f/YOUR_ID' // ← Replace with your Formspree ID or remove
				method='POST'
				className='flex flex-col gap-4'
			>
				<input
					type='text'
					name='name'
					placeholder='Your name'
					required
					className='border p-2 rounded'
				/>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					required
					className='border p-2 rounded'
				/>
				<textarea
					name='message'
					placeholder='Your message'
					required
					className='border p-2 rounded h-32'
				/>
				<button
					type='submit'
					className='bg-black text-white py-2 rounded hover:opacity-90'
				>
					Send Message
				</button>
			</form>
			<section className='mt-12'>
				<h2 className='text-2xl font-bold mb-4 text-center'>Instagram Feed</h2>

				<div className='w-full aspect-[3/2] overflow-hidden rounded shadow'>
					<div
						className='w-full h-[350px] rounded shadow overflow-hidden'
						dangerouslySetInnerHTML={{
							__html: `<iframe 
								src="https://snapwidget.com/embed/1096005" 
								class="w-full h-full border-none"
								allowtransparency="true"
								scrolling="no"
								title="Instagram Grid"
							></iframe>`,
						}}
					/>
				</div>
			</section>
		</main>
	);
}
