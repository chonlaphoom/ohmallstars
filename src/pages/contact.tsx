import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';

const Contact: Component = () => {
	const [formData, setFormData] = createSignal({
		name: '',
		email: '',
		message: '',
	});
	
	const [submitted, setSubmitted] = createSignal(false);

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log('Form submitted:', formData());
		setSubmitted(true);
		
		setTimeout(() => {
			setSubmitted(false);
			setFormData({ name: '', email: '', message: '' });
		}, 3000);
	};

	const updateField = (field: string, value: string) => {
		setFormData({ ...formData(), [field]: value });
	};

	return (
		<div class="max-w-4xl mx-auto px-6 py-16">
			<div class="space-y-16">
				<section>
					<h1 class="text-3xl font-light text-gray-900 mb-2">Contact</h1>
					<p class="text-gray-600">Get in touch</p>
				</section>

				{submitted() ? (
					<div class="text-center py-8">
						<p class="text-gray-900 mb-2">Thank you for your message</p>
						<p class="text-sm text-gray-600">I'll get back to you soon</p>
					</div>
				) : (
					<section class="max-w-2xl mx-auto">
						<form onSubmit={handleSubmit} class="space-y-6">
							<div>
								<label for="name" class="block text-sm text-gray-700 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									value={formData().name}
									onInput={(e) => updateField('name', e.currentTarget.value)}
									required
									class="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none"
								/>
							</div>

							<div>
								<label for="email" class="block text-sm text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formData().email}
									onInput={(e) => updateField('email', e.currentTarget.value)}
									required
									class="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none"
								/>
							</div>

							<div>
								<label for="message" class="block text-sm text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									value={formData().message}
									onInput={(e) => updateField('message', e.currentTarget.value)}
									required
									rows="6"
									class="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none resize-none"
								/>
							</div>

							<button
								type="submit"
								class="w-full py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
							>
								Send
							</button>
						</form>
					</section>
				)}

				<section class="text-center space-y-4 pt-8 border-t border-gray-200">
					<div class="space-y-2">
						<p class="text-sm text-gray-700">Email</p>
						<a href="mailto:your.email@example.com" class="text-gray-900 hover:text-gray-600">
							your.email@example.com
						</a>
					</div>
					<div class="flex justify-center gap-6 text-sm pt-4">
						<a 
							href="https://github.com" 
							target="_blank" 
							rel="noopener noreferrer"
							class="text-gray-600 hover:text-gray-900"
						>
							GitHub
						</a>
						<a 
							href="https://linkedin.com" 
							target="_blank" 
							rel="noopener noreferrer"
							class="text-gray-600 hover:text-gray-900"
						>
							LinkedIn
						</a>
						<a 
							href="https://twitter.com" 
							target="_blank" 
							rel="noopener noreferrer"
							class="text-gray-600 hover:text-gray-900"
						>
							Twitter
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;
