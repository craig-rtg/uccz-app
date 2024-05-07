<script>
	import MainMenu from '$lib/components/MainHeader.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import dove from '$lib/images/icons/dove.png';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="">
<!--
_____________________ Hero Section __________________________________
-->
<div class="bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')]
 h-[560px] w-full bg-cover">

 <div class="bg-gray-900 bg-opacity-20 w-full h-full">
	<div class="p-12">
		<MainMenu />
	</div>

	<div class="text-gray-100 px-16 -mt-12">
		<div class="my-3">
			<img src="{dove}" class="w-20" alt="Dove Icon">
		</div>
		<div class="my-3 text-xl text-blue-600 font-semibold">
			Embracing Togetherness
		</div>
		<div class="my-1 text-5xl font-bold">
			That They May All Be One
		</div>
		<div class="my-6 font-light text-sm w-2/3">
			A union of believers grounded in the mystical union of Christ and His Church. 
			The Bible speaks of a two-way transaction that occurs when a person is regenerated. 
			Every converted person becomes “in Christ” at the same time Christ enters into the 
			believer. Thus if I am in Christ and you are in Christ, He being in us, 
			then we are profoundly united in Christ.
		</div>
		<div class="bg-cyan-800 text-gray-50 w-32 px-5 py-2 rounded-md">
			Contact Us
		</div>

	</div>
 </div>
</div>


<div class="-mt-20">
	<div class="grid grid-cols-2 gap-4 p-12">
		<div class="bg-gray-50 rounded-md p-4">
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
					<div class="text-lg mb-2 font-semibold">
						Event:Ruwadzano RAGM
					</div>
					<div class="text-md underline">
						Event Details
					</div>
				</div>
			</div>
		</div>
		<div class="bg-gray-50 rounded-md p-4">
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


<div class="container px-12">
	<div class="grid grid-cols-12 gap-6">
		<div class="bg-slate-500 col-span-5 bg-opacity-40 h-full rounded-md">
		</div>
		<div class="col-span-7">
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
				The name of the Lord is a strong tower; the righteous run into it and are safe.
			</div>
			<div class="bg-cyan-800 text-gray-50 w-32 px-5 py-2 rounded-md">
				Contact Us
			</div>
		</div>

	</div>
</div>


<div class="mt-8 bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')]
 h-[560px] w-full bg-cover">
	<div class="bg-gray-900 bg-opacity-20 w-full h-full my-auto flex justify-center">
		<div>
			<div class="my-6 text-3xl text-gray-50 w-2/3">
				God, our Creator, has stored within our minds and personalities, 
				great potential strength and ability. Prayer helps us tap and develop these powers.
			</div>
			<div class="my-6 items-center">
				<div class="bg-cyan-800 text-gray-50 w-32 px-5 py-2 rounded-md">
					Contact Us
				</div>
			</div>
		</div>

	</div>
</div>

</section>
