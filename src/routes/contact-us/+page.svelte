
<script>
  // @ts-nocheck

  import bible from '$lib/images/icons/bible.png';
  import MainMenu from '$lib/components/MainHeader.svelte';

	import { enhance } from '$app/forms';
	let working = false;
	let errorMsg = '';
	let successMsg = '';

	// export let data;

	let contactForm = {
		name: '',
		email: '',
		message: ''
	};

	// let { supabase } = data;

	const sendEmailToAdmin = async () => {
		// const { data: func_data, error: func_error } = await supabase.functions.invoke('mailer_one', {
		// 	body: {
		// 		email: 'bookings@gatewaystream.com',
		// 		template_id: 'x2p03478753lzdrn',
		// 		template_context: {
		// 			name: contactForm.name,
		// 			msg: contactForm.message,
		// 			email: contactForm.email,
		// 			enquiry_ref: Math.random().toString().substring(2, 6)
		// 		}
		// 	}
		// });

		window.alert('Message sent successfully. We will get back to you shortly.');
	};
</script>

<div>
    <div class="bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')] 
        h-[450px] w-full bg-cover flex justify-center">
  
      <div class="relative bg-black bg-opacity-50 w-full h-[450px] items-center" align="center">
          <div class="p-12">
            <MainMenu />
          </div>
    
          <div class="text-gray-100 px-16 -mt-12">
            <div class="my-3">
              <img src="{bible}" class="w-20" alt="Dove Icon">
            </div>
            <div class="my-3 text-base text-gray-50 w-fit bg-blue-600 bg-opacity-20 p-1 font-light">
              Home / Contact Us
            </div>
            <div class="my-8 text-4xl font-bold">
              Get In Touch !
            </div>
  
            <!-- <div class="bg-cyan-800 text-gray-50 w-fit px-5 py-2 rounded-md">
              Learn More
            </div> -->
    
          </div>
        </div>
    </div>

<!-- <section
	class="relative xl:px-4 h-44 px-3 md:px-4 pattern-rhombus pattern-cyan-600 pattern-bg-slate-800
    pattern-size-12 pattern-opacity-100 bg-cover"
>
	<div class="relative px-10 md:px-16 h-full flex flex-col justify-center text-sm max-w-screen-xl mx-auto">
		<h1 class="w-full text-left text-3xl lg:text-4xl leading-none font-medium text-white">
			Contact Us
		</h1>
		<div
			class="text-white text-base lg:text-2xl w-full font-light text-left py-3 leading-none px-1"
		>
            Get in Touch
		</div>
	</div>
</section> -->
 

<section class="relative md:px-24 lg:px-20 border-b bg-transparent min-h-max bg-no-repeat bg-cover bg-center" id="contact">
	<div
		class="relative bg-white mx-3 md:px-1 xl:px-4 -mt-8 lg:-mt-4 mb-10 bg-transparent rounded text-sm max-w-screen-xl md:mx-auto"
	>
<!-- <section class="bg-gray-100 " > -->
        <div class="px-4 py-5 sm:px-6 lg:py-8">
            
            <div class="flex items-stretch justify-center">
                <div class=" grid md:grid-cols-2">
                    <div class="h-full p-8 border rounded bg-white">
                        <p class=" mb-12 text-base md:text-lg text-gray-800 ">
                            Take the first step and get in touch. Don’t hesitate, just communicate – reach out and touch base with us.
                        </p>
                        <ul class="mb-6 md:mb-0 mt-10">
                            <li class="flex">
                                <div class="flex h-10 w-10 mt-10 items-center justify-center rounded bg-cyan-600 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="h-6 w-6">
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                        <path
                                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="ml-4 mb-4">
                                    <h3 class="-ml-10 md:-ml-14 mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address
                                    </h3>
                                    <p class="text-gray-600 ">UCCZ Head Office 34 2nd Ave</p>
                                    <p class="text-gray-600 ">Harare, Zimbabwe</p>
                                </div>
                            </li>
                            <li class="flex mt-5">
                                <div class="flex h-10 w-10 mt-10 items-center justify-center rounded bg-cyan-600 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="h-6 w-6 ">
                                        <path
                                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                        </path>
                                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                                    </svg>
                                </div>
                                <div class="ml-4 mb-4 ">
                                    <h3 class="-ml-14 mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact
                                    </h3>
                                    <p class="text-gray-600 ">Mobile: +263 772 2121 212</p>
                                    <p class="text-gray-600 ">Mail: info@uccz.org</p>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div class=" card border h-fit md:max-w-6xl mt-5 px-5 md:mt-0 p-5 md:p-8 rounded md:ml-5" id="form">
                        <h2 class="mb-4 text-xl md:text-2xl font-normal -mt-3  ">Leave Us Message</h2>
                        <form id="contactForm">
                          <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                              <div class="mx-0 mb-1 sm:mb-4">
                                <label for="name" class="pb-1 text-xs uppercase tracking-wider" /><input
                                  type="text"
                                  id="name"
                                  autocomplete="given-name"
                                  placeholder="Your name"
                                  bind:value={contactForm.name}
                                  class="mb-2 w-full rounded border bg-gray-100 border-gray-200 py-2 pl-2 pr-4 shadow sm:mb-0"
                                  name="name"
                                />
                              </div>
                              <div class="mx-0 mb-1 sm:mb-4">
                                <label for="email" class="pb-1 text-xs uppercase tracking-wider" /><input
                                  type="email"
                                  bind:value={contactForm.email}
                                  id="email"
                                  autocomplete="email"
                                  placeholder="Your email address"
                                  class="mb-2 w-full rounded border bg-gray-100 border-gray-200 py-2 pl-2 pr-4 shadow sm:mb-0"
                                  name="email"
                                />
                              </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                              <label for="textarea" class="pb-1 text-xs uppercase tracking-wider" /><textarea
                                id="textarea"
                                name="message"
                                bind:value={contactForm.message}
                                cols="30"
                                rows="5"
                                placeholder="Write your message..."
                                class="mb-2 w-full rounded border bg-gray-100 border-gray-200 py-2 pl-2 pr-4 shadow sm:mb-0"
                              />
                            </div>
                          </div>
                          <div class="text-center">
                            <button
                              on:click={sendEmailToAdmin}
                              disabled={!contactForm.name || !contactForm.email || !contactForm.message}
                              type="submit"
                              class="w-full bg-cyan-600 text-white px-6 py-3 font-xl rounded shadow-lg sm:mb-0"
                              >Send Message</button
                            >
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
</div>
