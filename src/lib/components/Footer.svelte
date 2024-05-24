<script>

	import { enhance } from '$app/forms';

	// import { uiSettings } from '$lib/stores/ui.js';

	let working = false;
	let showPwd = false;
	let successMsg = '';
	let errorMsg = '';
	let showModal = false; //listYourBizModal
</script>

<!-- {#if $uiSettings.showAppDownloadFooter} -->
	<section class="text-gray-600 body-font rounded-b-3xl">
		<div
			class="container max-w-screen-xl border-gray-100 px-4 py-8 mx-auto flex justify-between items-center md:flex-row flex-col"
		>
			<div
				class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
			>
				<h2 class="text-xs text-teal-400 tracking-wide uppercase font-medium title-font mb-1">
					Available on IOS and Android
				</h2>
				<h1 class="text-2xl md:text-3xl font-light title-font text-gray-900">
					Download Your Nduyo Hymnal App for Free !
				</h1>
			</div>
			<div
				class="flex justify-end items-end mr-2 flex-shrink-0 md:space-x-4 md:space-y-0"
			>
			<a href="https://play.google.com/" class="mr-2">
				<button
					class="bg-slate-700 text-white inline-flex py-2 px-5 w-full rounded items-center hover:bg-gray-800 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="w-6 h-6"
						viewBox="0 0 512 512"
					>
						<path
							d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
						/>
					</svg>
					<span class="ml-2 lg:ml-4 flex items-start flex-col leading-none">
						<span class="text-xs text-gray-100 mb-0.5 lg:block">Get it on</span>
						<span class="title-font whitespace-nowrap font-medium">Google Play</span>
					</span>
				</button>
			</a>
			<a href="https://apps.apple.com/">
				<button
					class="bg-slate-700 text-white inline-flex py-2 px-5 w-full rounded items-center hover:bg-gray-800 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="w-6 h-6"
						viewBox="0 0 305 305"
					>
						<path
							d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
						/>
						<path
							d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
						/>
					</svg>
					<span class="ml-2 lg:ml-4 flex items-start flex-col leading-none">
						<span class="text-xs text-gray-200 mb-0.5">Or on the</span>
						<span class="title-font font-medium whitespace-nowrap">App Store</span>
					</span>
				</button>
			</a>
			</div>
		</div>
	</section>
<!-- {/if} -->

<section class="text-gray-600 body-font bg-gray-100 py-10">
	<div
		class="container max-w-screen-xl border-gray-200 flex flex-wrap px-4 py-2 mx-auto items-center text-sm">
		<div
			class="md:w-1/3 md:pr-12 md:py-1 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
			<h1 class="text-lg font-normal title-font mb-2 text-gray-900">
				That They May All Be One.
			</h1>
			<p class="leading-normal text-sm font-light text-center">
				Unity is strength, unity is a harmony, a symphony of different entities.We may not be the same; but we do embrace
				our differences and find strength in our shared sonship in Jesus the Christ.
			</p>
			<!-- <a href="." class="text-gray-800 inline-flex items-center mt-4 text-sm"
				>Looking for Gateway Stream Media?
			</a> -->
		</div>
		<div class="flex flex-col md:w-2/3 md:pl-12">
			<!-- <h2 class="title-font font-light text-gray-800 tracking-wider text-2xl md:text-3xl mb-3">
				Quick Links
			</h2> -->
			<nav class="flex flex-wrap list-none -mb-1 text-xs font-light">
				<li class="lg:w-1/4 mb-2 w-1/2 flex flex-col py-4">
					<h2 class="title-font font-light text-gray-800 tracking-wider text-xl md:text-2xl mb-3">
						Info
					</h2>
					<!-- <p class="text-gray-900 hover:text-gray-800 text-sm font-normal mb-1">About Us</p> -->
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">Who We Are</a
					>
					<a href="/about-us" class="text-gray-600 hover:text-gray-800 mb-1">What We Do</a
					>
					<a href="/events" class="text-gray-600 hover:text-gray-800 mb-1">Events</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">Careers</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">Download Apps</a>
					<!-- <a href="/blog" class="text-gray-600 hover:text-gray-800 mb-1">Our Blog</a> -->
				</li>

				<li class="lg:w-1/4 mb-2 w-1/2 flex flex-col py-4">
					<h2 class="title-font font-light text-gray-800 tracking-wider text-xl md:text-2xl mb-3">
						Useful Links
					</h2>
					<!-- <p class="text-gray-900 hover:text-gray-800 text-sm font-normal mb-1">About Us</p> -->
					<a href="/news" class="text-gray-600 hover:text-gray-800 mb-1">Blog & Updates</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">Support FAQs</a>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">Privacy Policy</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1"
						>Projects</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">Nduyo Dzokudira</a>
					<!-- <a href="/blog" class="text-gray-600 hover:text-gray-800 mb-1">Our Blog</a> -->
				</li>

				<li class="lg:w-1/4 mb-2 w-1/2 flex flex-col py-4">
					<h2 class="title-font font-light text-gray-800 tracking-wider text-xl md:text-2xl mb-3">
						Latest News 
					</h2>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">
						Volunteers 2024 NAGM</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1"
						>GU Project Update</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1"
						>Education Council @Musirizwi </a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">
						UCCM Jubilee celebrations</a
					>
					<a href="/" class="text-gray-600 hover:text-gray-800 mb-1">
						Hatfield  Church Mother`s Day</a
					>
				</li>

				<li class="lg:w-1/4 mb-1 w-1/2 flex flex-col py-4">
					<h2 class="title-font font-light text-gray-800 tracking-wider text-xl md:text-2xl mb-3">
						Get In Touch 
					</h2>
					
					<div class="mb-1">
						+(263) 123 456 789
					</div>
					<div class="mb-1">
						info@uccz.org
					</div>
					<div class="mb-1">
						UCCZ Head Office 34 2nd Ave, <br/>Harare, Zimbabwe
					</div>
					
				</li>

			</nav>
		</div>
	</div>
</section>
<footer class="text-gray-600 px-4 xl:px-4 body-font bg-gray-900">
	<div class="container max-w-screen-xl py-4 mx-auto flex items-center sm:flex-row flex-col">
		<a
			href="."
			class="flex title-font font-medium items-center md:justify-start justify-center text-white"
		>
			<!-- <img src="/logo.png" alt="UCCZ" class="w-20" /> -->
		</a>
		<p
			class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-400 sm:py-2 sm:mt-0 mt-4"
		>
			&copy; {new Date().getFullYear()} United Church Of Christ In Zimbabwe
		</p>
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<a href="https://www.facebook.com/uccz" class="text-teal-400">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
				</svg>
			</a>
			<a href="https://x.com/Uccz" class="ml-3 text-teal-400">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path
						d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
					/>
				</svg>
			</a>
			<a href="https://www.instagram.com/uccz/" class="ml-3 text-teal-400">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
				</svg>
			</a>
			<a
				href="https://www.linkedin.com/company/uccz/mycompany/"
				class="ml-3 text-teal-400"
			>
				<svg
					fill="currentColor"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="0"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path
						stroke="none"
						d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
					/>
					<circle cx="4" cy="4" r="2" stroke="none" />
				</svg>
			</a>
		</span>
	</div>
</footer>
<!-- 
<Modal bind:showModal>
	<h2 slot="header">
		modal
		<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
	</h2>
	<div class="container my-4">
		<div class="flex flex-wrap items-center rounded-xl">
			<div class="w-full self-start rounded-bl-xl p-8">
				<div class="p-4 border rounded-lg mx-4">
					<h3 class="font-heading text-4xl text-gray-900 font-bold tracking-tight mb-4">
						Register.
					</h3>
					<p class="text-md text-gray-500 mb-5">
						<a class="ml-1 inline-block text-cyan-700 hover:text-cyan-900" href="/login">Sign in</a>
						or sign up to list your property and get access to all features of the platform.
					</p>

					<form
						action=""
						method="POST"
						use:enhance={({ form, data, action }) => {
							working = true;
							return async ({ result: { data }, update }) => {
								working = false;
								if (data?.success ?? false) {
									successMsg = 'Success! Redirecting...';

									await new Promise((resolve) => setTimeout(resolve, 4000));
									window.location.href = '/';
								} else {
									errorMsg = data?.error ?? 'An error occured. Please try again later.';
									await new Promise((resolve) => setTimeout(resolve, 8000));
									errorMsg = '';
								}
							};
						}}
					>
						<div class="mb-6">
							<label class="block mb-1.5 text-sm text-gray-900 font-semibold" for=""
								>Full Name</label
							>
							<input
								class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border-2 border-gray-200 focus:border-cyan-500 focus:outline-none rounded-lg"
								type="text"
								name="full_name"
								disabled={working}
								placeholder="Ex. Tawana Mukute"
							/>
						</div>
						<div class="mb-6">
							<label class="block mb-1.5 text-sm text-gray-900 font-semibold" for="">Email</label>
							<input
								class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border-2 border-gray-200 focus:border-cyan-500 focus:outline-none rounded-lg"
								type="email"
								name="email"
								placeholder="Ex. percy@gateway.dev"
								disabled={working}
							/>
						</div>
						<div class="mb-7">
							<div class="flex mb-1.5 items-center justify-between">
								<label class="block text-sm text-gray-900 font-semibold" for="">Password</label>
							</div>
							<div class="relative">
								<input
									class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border-2 border-gray-200 focus:border-cyan-600 focus:outline-none rounded-lg"
									type={showPwd ? 'text' : 'password'}
									name="password"
									placeholder="Enter your password"
									disabled={working}
								/>
								<button
									on:click={(e) => {
										e.preventDefault();
										showPwd = !showPwd;
									}}
									class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100 text-cyan-600"
								>
									{#if !showPwd}
										<EyeAlt />
									{:else}
										<EyeOff />
									{/if}
								</button>
							</div>
						</div>
						<div class="mb-7">
							<div class="flex mb-1.5 items-center justify-between">
								<label class="block text-sm text-gray-900 font-semibold" for=""
									>Verify Password</label
								>
							</div>
							<div class="relative">
								<input
									class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border-2 border-gray-200 focus:border-cyan-600 focus:outline-none rounded-lg"
									type="password"
									name="password_confirmation"
									disabled={working}
									placeholder="Verify password"
								/>
							</div>
						</div>
						<span class="text-xs font-semibold text-gray-900">
							<span>Already have an account?</span>
							<a class="ml-1 inline-block text-cyan-700 hover:text-cyan-900" href="/login"
								>Sign in</a
							>
						</span>

						<button
							class="relative group block w-full mt-4 mb-6 py-3 px-5 text-center text-sm font-semibold text-white bg-cyan-700 rounded-lg overflow-hidden"
							type="submit"
						>
							<div
								class="absolute top-0 right-full w-full h-full bg-gray-800 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
							/>
							<span class="relative">
								{#if working}
									<svg
										class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										/>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
								{:else if successMsg}
									{successMsg}
								{:else if errorMsg}
									{errorMsg}
								{:else}
									Register
								{/if}
                                Register
							</span>
						</button>
						<div class="flex mb-6 items-center">
							<span class="text-sm text-gray-800">
								By signing up, you agree to our <a
									href="/terms"
									class="text-cyan-700 hover:text-cyan-900">Terms of Service</a
								>
								and <a href="/privacy" class="text-cyan-700 hover:text-cyan-900">Privacy Policy</a>.
							</span>
						</div>
					</form>
					<div class="flex mb-6 items-center">
						<div class="w-full h-px bg-gray-300" />
						<span class="mx-4 text-sm font-semibold text-gray-500">Or</span>
						<div class="w-full h-px bg-gray-300" />
					</div>
					<div class="flex flex-wrap mb-6 items-center -mx-2">
						<div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
							<a
								class="inline-flex bg-blue-700 text-white w-full py-3 px-4 items-center justify-center rounded-lg border border-gray-200 transition duration-100"
								href="."
							>
								<Facebook />
								<span class="ml-2 text-sm font-semibold">Sign up with Facebook</span>
							</a>
						</div>
						<div class="w-full md:w-1/2 px-2">
							<a
								class="inline-flex bg-white w-full py-3 px-4 items-center justify-center rounded-lg border border-gray-200 hover:border-gray-300 transition duration-300"
								href="."
							>
								<GoogleCircle class="text-gray-500" />
								<span class="ml-2 text-sm font-semibold text-gray-500">Sign Up with Google</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Modal> -->
