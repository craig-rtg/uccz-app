<script>
// @ts-nocheck

    import white_logo from '$lib/images/white-gray-logo.png';
    import { clickOutside } from '$lib/utils/events';
    import { page } from '$app/stores';
    import { beforeNavigate } from '$app/navigation';
	// import { globalStore } from '$lib/stores/globalData.js';

	let mobileOpen = false;

	// $: currentRoute = $page.url.pathname;

	const primaryMenuItems = [
		{
			text: 'Hotels, Lodges & Homestays',
			link: '/'
		},
		{
			text: 'Groceries',
			link: 'https://shop.gatewaystream.com/'
		},
		{
			text: 'Liquor',
			link: 'https://liquor.gatewaystream.com/'
		},
		{
			text: 'Eats',
			link: 'https://eats.gatewaystream.com/'
		},
		{
			text: 'Book a Ride',
			link: '/book-a-ride'
		},
		{
			text: 'Events & Tickets',
			link: '/event-tickets'
		},
		{
			text: 'Venues',
			link: '/conference-venues'
		},
		{
			text: 'Insurance',
			link: '/insurance'
		},
		{
			text: 'Music',
			link: 'https://gatewaystreammedia.com/home',
		}
	];


	let userMenuOpen = false;

	// export let session;
	// export let currentUrl;
	// let first_name = "";

	// if(session){
	// 	console.log(session);
	// 	const full_name = session.user.user_metadata.full_name;
	// 	first_name = full_name ? full_name.split(' ')[0] : 'User';
	// }

	beforeNavigate(() => (mobileOpen = false));

	// $: userNotLoggedIn = !session;
</script>
<section class="px-1 md:px-">
    <div class="grid grid-cols-12 gap-2 text-gray-600 font-semibold">
        <div class="col-span-5 -ml-5">
            <div class="flex justify-center">
                <div class="md:flex hidden justify-start gap-8 w-11/12 p-2 px-4 text-blue-50 rounded-md">
                    <a href="/" class="hover:no-underline">
                        <div class="px-3 py-1 hover:scale-105 hover:bg-blue-500 hover:rounded-full hover:text-gray-50">
                            Who We Are
                        </div>
                    </a>
    
                    <a href="/about-us" class="hover:no-underline">
                        <div class="px-3 py-1 hover:scale-105 hover:bg-blue-500 hover:rounded-full hover:text-gray-50">
                            About Us
                        </div>
                    </a>
    
                    <a href="/events" class="hover:no-underline">
                        <div class="px-3 py-1  hover:scale-105 hover:bg-blue-500 hover:rounded-full hover:text-gray-50">
                            Events
                        </div>
                    </a>
                </div>

            </div>

        </div>
        <div class="col-span-2 text-xxl flex justify-center" >
            <!-- <hr> -->
            <!-- <div class="w-24 border-t border-gray-200 mt-4 opacity-50"></div>                 -->
            <div>                
                <div class="-mt-8 relative">
                    <img src="{white_logo}" alt="Logo" class="w-24 h-28">
                </div> 
            </div>
            <!-- <div class="w-24 border-t border-gray-200 mt-4 opacity-50"></div>                 -->
        </div>
        <div class="col-span-5 ">
            <div class="hidden md:flex justify-center  w-full p-2 text-blue-50 rounded-md">
                <div class="flex justify-end gap-8 w-11/12 ">

                    <a href="/news" class="hover:no-underline">
                        <div class="px-3 py-1 hover:scale-105 hover:bg-blue-500 hover:rounded-full hover:text-gray-50">
                            News & Updates
                        </div>
                    </a>
                    <a href="/donate" class="hover:no-underline">
                        <div class="px-3 py-1 hover:scale-105 hover:bg-blue-500 hover:rounded-full hover:text-gray-50">
                            Donate
                        </div>
                    </a>
                    <a href="/contact-us" class="hover:no-underline">
                        <div class="px-3 py-1 hover:scale-105 hover:bg-blue-500 hover:rounded-full hover:text-gray-50">
                            Contact Us
                        </div>
                    </a>
                </div>
            </div>
            <!--
                ______________________ Mobile Menu _______________________
            -->
            <div class="md-hidden flex p-1 justify-end">
                <div class="ml-auto md:block lg:hidden z-50">
                    <button
                        on:click={(e) => {
                            mobileOpen = !mobileOpen;
                        }}
                        aria-label="Open Menu"
                        title="Open Menu"
                        class="p-2 -mt-32 text-gray-50 transition duration-200 rounded focus:outline-none hover:bg-slate-900 focus:bg-slate-900"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>                        
                    </button>
                    <!-- {#key mobileOpen} -->
                    <!-- Mobile menu dropdown -->
                    <div
                        use:clickOutside
                        on:clickOutside={(e) => {
                            mobileOpen = false;
                        }}
                        class="absolute z-20 top-0 left-0 w-full {mobileOpen ? 'block' : 'hidden'}"
                    >
                        <div class="p-3 bg-white border rounded-md shadow">
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <a href="/" aria-label="Uccz" title="Uccz" class="inline-flex items-center">
                                        <img src="{white_logo}" class="h-16" alt="Uccz Logo" />
                                    </a>
                                </div>
                                <div>
                                    <button
                                        on:click={(e) => {
                                            mobileOpen = false;
                                        }}
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    >
                                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <div class="space-y-4">
                                    <!-- {#each primaryMenuItems as menuItem}
                                        <a
                                            href={menuItem.link}
                                            data-sveltekit-preload-data="tap"
                                            class="font-medium tracking-wide h-16 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            <div class="border-b border-gray-200 py-2 px-3">{menuItem.text}</div>
                                        </a>
                                    {/each} -->
    
                                    <!-- svelte-ignore a11y-missing-attribute -->
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
    
                                    <a
                                        href="/"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        <div class="border-b border-t-4 border-gray-200 pb-2 pt-3 px-3">
                                            Who We Are
                                        </div>
                                    </a>
                                    <a
                                        href="/about-us"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        <div class="border-b border-gray-200 pb-2 pt-3 px-3">What We Do</div>
                                    </a>
                                    <a
                                        href="/"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        <div class="border-b border-gray-200 pb-2 pt-3 px-3">Events</div>
                                    </a>
                                    <a
                                        href="/"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        <div class="border-b border-gray-200 pb-2 pt-3 px-3">News & Updates</div>
                                    </a>
                                    <a
                                        href="/"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        <div class="border-b border-gray-200 pb-2 pt-3 px-3">Donate</div>
                                    </a>
                                    <a
                                        href="/"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        <div class="border-b border-gray-200 pb-2 pt-3 px-3">Contact Us</div>
                                    </a>
    
                                    <!-- {#if userNotLoggedIn}
                                        <a
                                            href="/login?next={currentUrl}"
                                            class="font-medium tracking-wide h-16 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            <div class="border-b border-gray-200 py-2 px-3">Login</div>
                                        </a>
                                        <a
                                            href="/register/?next={currentUrl}"
                                            class="font-medium tracking-wide h-16 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            <div class="py-2 px-3">Register</div>
                                        </a>
                                    {:else}
                                        <a
                                            href="/logout?next={currentUrl ?? '/'}"
                                            class="font-medium tracking-wide h-16 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            <div class="py-2 px-3">Logout</div>
                                        </a>
                                    {/if} -->
                                </div>
                            </nav>
                        </div>
                    </div>
                    <!-- {/key} -->
                </div>
            </div>
        </div>    
    </div>
</section>