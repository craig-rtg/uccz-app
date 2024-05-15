<script>
// @ts-nocheck

	import MainMenu from '$lib/components/MainHeader.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import dove from '$lib/images/icons/dove.png';
	import Carousel from '$lib/components/Carousel-1.svelte'

	import ruwadzano from '$lib/images/other/ruwadzano-01.jpg';
	import cmf from '$lib/images/other/cmf.png';
	import cyf from '$lib/images/other/cyf-agm-01.jpg';
	import sunday from '$lib/images/other/ruwadzano-01.jpg';


	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mb-12">
<!--
_____________________ Hero Section __________________________________
-->

<div class="relative bg-gray-200">
	<div class="absolute inset-0">
		<Carousel />
	</div>
	
	<div class="relative bg-black bg-opacity-50 w-full h-[560px]">
		<div class="py-12 px-2 md:p-12">
			<MainMenu />
		</div>
	
		<div class="text-gray-100 px-8 md:px-16 -mt-12">
			<div class="my-3">
				<img src="{dove}" class="w-20" alt="Dove Icon">
			</div>
			<div class="my-3 text-xl text-gray-50 w-fit bg-blue-600 bg-opacity-40 p-1 font-semibold">
				Embracing Togetherness
			</div>
			<div class="my-1 text-3xl md:text-5xl font-bold">
				That They May All Be One
			</div>
			<div class="my-2 md:my-6 font-light text-xs md:text-sm md:w-2/3">
				A union of believers grounded in the mystical union of Christ and His Church. 
				The Bible speaks of a two-way transaction that occurs when a person is regenerated. 
				Every converted person becomes “in Christ” at the same time Christ enters into the 
				believer. Thus if I am in Christ and you are in Christ, He being in us, 
				then we are profoundly united in Christ.
			</div>
			<div class="bg-cyan-800 text-gray-50 my-4 md:my-0 w-32 px-5 py-2 rounded-md">
				Contact Us
			</div>
	
		</div>
	 </div>
</div>


<div class="-mt-12 md:-mt-20 relative">
	<div class="grid grid-cols-2 gap-4 p-4 md:p-12">
		<div class="bg-gray-50 rounded-md p-4 col-span-2 md:col-span-1">
			<div class="grid grid-cols-12 gap-4">
				<div class="col-span-3">
					<div class="bg-opacity-30">
						<div class="bg-cyan-300 rounded-t-md bg-opacity-30 text-lg py-1 h-8 text-center">
							<svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
							</svg>							  
						</div>
						<div class="bg-cyan-300 bg-opacity-30 text-lg py-1 h-8 text-center">
							April
						</div>
						<div class="bg-slate-700 rounded-b-md text-gray-50 p-1 h-8 text-center">
							0000 Hrs
						</div>
					</div>
				</div>
				<div class="col-span-9">
					<div class="text-sm text-blue-500 mb-2 bg-gray-300 w-fit p-0.5 font-thin">
						Upcoming !
					</div>
					<div class="text-lg mb-2 font-semibold">
						Event:Ruwadzano RAGM
					</div>
					<div class="text-md underline">
						Event Details
					</div>
				</div>
			</div>
		</div>
		<div class="bg-gray-50 rounded-md p-4 hidden md:col-span-1">
			<div class="grid grid-cols-12 gap-4">
				<div class="col-span-3">
					<div class="bg-opacity-30">
						<div class="bg-cyan-300 rounded-t-md bg-opacity-30 text-lg py-1 h-8 text-center">
							<svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
							</svg>
						</div>
						<div class="bg-cyan-300 bg-opacity-30 text-lg py-1 h-8 text-center">
							April
						</div>
						<div class="bg-slate-700 rounded-b-md text-gray-50 p-1 h-8 text-center">
							0000 Hrs
						</div>
					</div>
				</div>
				<div class="col-span-9">
					<div class="text-sm text-blue-500 mb-2 bg-gray-300 w-fit p-0.5 font-thin">
						Upcoming !
					</div>
					<div class="text-lg mb-2 font-semibold">
						Event:Ruwadzano RAGM
					</div>
					<div class="text-md underline">
						Event Details
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="container px-2 md:px-12">
	<div class="grid grid-cols-12 gap-6">
		<div class="col-span-12 md:col-span-5 flex h-64 md:h-full rounded-md pl-8 md:pl-4">
			<div class="bg-blue-500 bg-center bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')] relative w-11/12 scale-x-110 h-4/5 mt-1 rounded-md">
			</div>
			<div class=" bg-[url('$lib/images/gradient/bg-grad-01.png')] bg-cover w-80 h-4/5 mt-[40px] -ml-48 rounded-md">
			</div>
		</div>
		<div class="col-span-12 md:col-span-7 px-8 md:px-0">
			<div class="font-semibold text-md uppercase text-blue-700">
				About UCCZ
			</div>
			<div class="font-bold text-3xl text-gray-900 w-4/5 my-4">
				Working towards the betterment of communities beyond...
			</div>
			<div class="h-1 w-32 bg-gray-200 flex justify-between overflow-hidden mt-4">
                <div class="w-12 h-full bg-slate-400" />
				<div class="w-12 h-full bg-blue-700" />
                <div class="w-12 h-full bg-slate-400" />
			</div>

			<div class="text-sm w-4/5 mt-4">
				UCCZ, United Church of Christ in Zimbabwe, is a Christian denomination
				 located in Zimbabwe. It is a member of the World Council of Churches and the
				  All Africa Conference of Churches. The UCCZ has a rich history that dates back
				   to the early 20th century when American missionaries from the American Board
				    of Commissioners for Foreign Missions (ABCFM) established the church in the
					 region.
			</div>
			<div class="font-bold text-lg w-4/5 my-4">
				<i>The name of the Lord is a strong tower; the righteous run into it and are safe.</i>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div>
					<div class="bg-blue-500 rounded-full p-2 w-10">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
						</svg>						  
					</div>
					<div class="font-bold text-lg text-gray-500 my-4">
						The "UKAMA" Concept
					</div>
					<div>
						Embracing friendship and sharing each other’s joys and burdens
					</div>
				</div>

				<div>
					<div class="bg-blue-500 rounded-full p-2 w-10">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
						</svg>													
					</div>
					<div class="font-bold text-lg text-gray-500 my-4">
						That They May All Be One
					</div>
					<div>
						...The body does not consist of one member but of many.
					</div>
				</div>

			</div>

		
			<div class="bg-cyan-800 text-gray-50 my-8 w-32 px-5 py-2 rounded-md">
				Learn More
			</div>
		</div>

	</div>
</div>

<!-- 
<div class="mt-8 bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')]
 h-[560px] w-full bg-cover">
	<div class="bg-gray-900 bg-opacity-20 w-full h-full my-auto flex justify-center ">
		<div class="items-center w-full my-auto">
			<div class="my-6 text-center text-3xl text-gray-50 w-2/3">
				God, our Creator, has stored within our minds and personalities, 
				great potential strength and ability. Prayer helps us tap and develop these powers.
			</div>
			<div class="my-6 content-center items-center">
				<div class="bg-cyan-800 text-gray-50 w-32 px-5 py-2 rounded-md">
					Contact Us
				</div>
			</div>
		</div>

	</div>
</div> -->

<div class="mt-8 bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')]
 h-[450px] w-full bg-cover">
	<div class="bg-gray-900 bg-opacity-20 h-[450px] w-full flex items-center" align="center">
		<div class="">
			<div class="bg-blue-500 rounded-full p-2 w-12">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-50">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
				  </svg>																				
			</div>
			<div class="my-2 md:my-6 text-center font-extrabold text-xl md:text-3xl text-gray-50 w-2/3">
				"Charity is a virtue with which when our affections are perfectly ordered, it unites us to God.
				For by it we demonstrate our love for God.” 
			</div>
			<div class="my-6 md:my-16 content-center items-center">
				<div class="bg-gray-900 bg-opacity-15 font-semibold border-2 border-blue-500 text-gray-50 w-fit px-5 py-2 rounded-md">
					GIVE TODAY
				</div>
			</div>
		</div>
	</div>
</div>

<div class="my-16">
	<div class="flex justify-center text-blue-600 font-semibold uppercase">
		Councils
	</div>
	<div class="flex justify-center text-xl md:text-3xl font-extrabold">
		Our Spiritual Councils
	</div>
	<div class="flex justify-center text-3xl font-extrabold">
		<div class="h-1 w-32 bg-gray-200 flex justify-between overflow-hidden mt-4">
			<div class="w-12 h-full bg-slate-400" />
			<div class="w-12 h-full bg-blue-700" />
			<div class="w-12 h-full bg-slate-400" />
		</div>
	</div>
	<div class="flex justify-end -mt-3 md:-mt-12 mr-8">
		<div class="bg-blue-500 transform rotate-45 p-2 h-10 w-10 rounded">
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50 transform -rotate-45">
				<path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
			  </svg>																						  
		</div>
		<div class="bg-blue-500 transform rotate-45 p-2 h-10 w-10 ml-4 rounded">	
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50 transform -rotate-45">
				<path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
			  </svg>																						  
		</div>
	</div>
	<div class="flex flex-wrap mx-4 mt-8">
		<div class="w-full my-2 md:my-0 sm:w-1/2 md:w-1/3 px-4">
		  <div class="bg-white rounded-lg border-b-4 border-blue-500">
			<div class="bg-slate-500 bg-cover bg-center bg-[url('$lib/images/other/ruwadzano-01.jpg')] h-48 w-full rounded-t-lg"></div>
			<div class="flex justify-center text-lg font-semibold my-4">
				Ruwadzano
			</div>
			<div class="flex justify-center px-8 pb-8">
				A women's fellowship within the UCCZ that focuses 
				on promoting spiritual growth, empowerment, and community 
				development among women. Ruwadzano, which means "fellowship" 
				in the Shona language, aims to unite women within the church 
				and empower them to contribute positively to their families, 
				churches, and society.
			</div>
		  </div>
		</div>
		<div class="w-full my-2 md:my-0 sm:w-1/2 md:w-1/3 px-4">
		  <div class="bg-white rounded-lg border-b-4 border-blue-500">
			<div class="bg-slate-500 bg-cover bg-[url('$lib/images/other/cmf.png')] h-48 w-full rounded-t-lg"></div>
			<div class="flex justify-center text-lg font-semibold my-4">
				Men`s Fellowship
			</div>
			<div class="flex justify-center px-8 pb-8">
				Men's fellowship within , is a council that focuses 
				on promoting spiritual growth, empowerment, and community 
				development among men. As the name "fellowship" suggests,
				the council aims to empower men within UCCZ 
				to contribute positively to their families, business,
				churches, society and in any other disciplines beyond the recited.
			</div>
		  </div>
		</div>
		<div class="w-full my-2 md:my-0 sm:w-1/2 md:w-1/3 px-4">
		  <div class="bg-white rounded-lg border-b-4 border-blue-500">
			<div class="bg-slate-500 bg-cover bg-center bg-[url('$lib/images/other/cyf.jpg')] h-48 w-full rounded-t-lg"></div>
			<div class="flex justify-center text-lg font-semibold my-4">
				CYF
			</div>
			<div class="flex justify-center px-8 pb-8">
				CYF, the Christian Youth fellowship, is dedicated to fostering
				 spiritual growth, empowerment, and community development among
				  young adults. Its primary objective is to bring together young 
				  adults in the United Church Of Christ and empower them to make 
				  positive contributions to their families, churches, society, 
				  and beyond.
			</div>
		  </div>
		</div>
	  </div>
</div>

<div class="mt-24 bg-[url('$lib/images/banners/banner-03.png')]
 h-[450px] w-full bg-cover bg-bottom">
	<div class="h-[450px] w-full grid grid-cols-12 gap-4 px-4">
		<div class="hidden md:flex col-span-4 justify-center">
			<div class="w-11/12 mb-24 -mt-10 rounded-md bg-blue-500" align="center">
				<div class="bg-slate-800 rounded-full my-8 p-2.5 h-12 w-12">
					  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
						<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
					  </svg>																								  
				</div>
				<div class="my-4 text-center font-bold text-3xl text-gray-50">
					Call Us 
				</div>
				<div class="h-1 w-32 bg-gray-200 flex justify-between overflow-hidden my-8">
					<div class="w-12 h-full bg-blue-500" />
					<div class="w-12 h-full bg-gray-50" />
					<div class="w-12 h-full bg-blue-500" />
				</div>

				<div class="font-light text-base text-gray-50 my-12">
					UCCZ Head Office 34 2nd Ave, <br>Harare, Zimbabwe
				</div>

				<div class="font-bold text-2xl text-gray-50 mb-4 my-4">
					+263(242) 8937373
				</div>

				<div class="font-light text-base text-gray-50 my-8">
					info@uccz.org
				</div>

				<!-- <div>
					<input placeholder="email@example.com" type="email" class="w-11/12 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
					<textarea placeholder="Your Message" class="w-11/12 my-3 border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>

					<div class="w-11/12 bg-gray-900 bg-opacity-15 font-semibold border-2 border-blue-500 text-gray-50 px-5 py-2 rounded-md">
						Submit
					</div>
				</div> -->
			</div>
		</div>
		<div class="col-span-12 md:col-span-8 p-3 md:p-20">
			<div class="text-blue-300 font-semibold uppercase my-3">
				Get In Touch
			</div>
			<div class="text-3xl font-extrabold text-gray-50 my-6">
				Don't Hesitate To Contact Us
			</div>
			<div class="text-3xl font-extrabold my-4">
				<div class="h-1 w-32 bg-gray-200 flex justify-between overflow-hidden mt-4">
					<div class="w-12 h-full bg-slate-400" />
					<div class="w-12 h-full bg-blue-700" />
					<div class="w-12 h-full bg-slate-400" />
				</div>
			</div>
			<div class="font-light text-base text-gray-50 my-8">
				Being of one kingdom, together we belong. In Him we both function. We are 
				all members of His body, His workmanship, chosen and called unto Him, the Alpha & Omega.
			</div>
			<div class="w-fit bg-gray-900 bg-opacity-15 font-semibold border-2 border-blue-500 text-gray-50 px-5 py-2 rounded-md">
				Contact Us
			</div>
		</div>
		
	</div>
</div>

</section>
