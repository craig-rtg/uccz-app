<script>
// @ts-nocheck

	import Siema from 'siema';
	import { onMount } from 'svelte';
    import dove from '$lib/images/icons/dove.png';
    import care from '$lib/images/icons/dove.png';
    import bible from '$lib/images/icons/dove.png';


	
	let slider, prev, next, radioSlider
	let select = 0
	
	let data = [
		{
            // icon: dove,
            bg: "https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900",
            // subtitle: "Embracing Togetherness",
            // title: "That They May All Be One",
            // text: "A union of believers grounded in the mystical union of Christ and His Church. The Bible speaks of a two-way transaction that occurs when a person is regenerated. Every converted person becomes “in Christ” at the same time Christ enters into the believer. Thus if I am in Christ and you are in Christ, He being in us, then we are profoundly united in Christ."
        },
		{
            // icon: bible,
            bg: "$lib/images/slider/slider-04.jpg",
            // subtitle: "Embracing Togetherness",
            // title: "That They May All Be One",
            // text: "A union of believers grounded in the mystical union of Christ and His Church. The Bible speaks of a two-way transaction that occurs when a person is regenerated. Every converted person becomes “in Christ” at the same time Christ enters into the believer. Thus if I am in Christ and you are in Christ, He being in us, then we are profoundly united in Christ."
        },
		{
            // icon: care,
            bg: "$lib/images/slider/slider-03.jpg",
            // subtitle: "Embracing Togetherness",
            // title: "That They May All Be One",
            // text: "A union of believers grounded in the mystical union of Christ and His Church. The Bible speaks of a two-way transaction that occurs when a person is regenerated. Every converted person becomes “in Christ” at the same time Christ enters into the believer. Thus if I am in Christ and you are in Christ, He being in us, then we are profoundly united in Christ."
        }
	] //end array data
	
	onMount(() => {
		slider = new Siema({
				selector: '.siema',
                autoplay: 0,
				duration: 200,
				easing: 'ease-in-out',
				perPage: 1,
				startIndex: 0,
				draggable: true,
				multipleDrag: true,
				threshold: 20,
				loop: true,
				rtl: false,
				onInit: () => {},
				onChange: () => {},
			}); //end Siema constructor

            setInterval(() => slider.next(), 6000)

		prev = () => {
			slider.prev()
			if (select > 0) {
				select--
			}
		}

		next = () => {
			slider.next()
			if (select >= 0) {
				select++
			}
		}
	}) //end onMount
	
</script>

<div class="siema">
	<!-- {#each data as d} -->
	<div class="bg-[url('{data[0].bg}')] h-[560px] w-full bg-cover">
	</div>
    <div class="bg-[url('{data[1].bg}')] h-[560px] w-full bg-cover">
	</div>
    <div class="bg-[url('{data[2].bg}')] h-[560px] w-full bg-cover">
	</div>
	<!-- {/each} -->
</div>
<!-- <div class='bullet'>
	{#each data as d, i}
		<input 
        bind:this={radioSlider}
        type="radio" 
        id={i} name="slider-radio" 
        value={i}
        checked = { select == i }
        on:click= {() => {slider.goTo(i)}}
		>
    {/each}
</div> -->

<!-- <button on:click={prev}>
	prev
</button>
<button on:click={next}>
	next
</button> -->
<div class="flex justify-end -mt-24 mx-12 relative z-50">
    <button on:click={prev} class="bg-blue-500 p-2 h-10 w-10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>																						  
    </button>
    <button on:click={next} class="bg-blue-500 p-2 h-10 w-10 ml-4 rounded-full">	
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>																						  
    </button>
</div>

<style>
	.slider {
		background-color:lightblue;
		height:300px;
		margin:1rem;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.bullet {
		width:100%;
		display:flex;
		justify-content:center;
	}
	/* input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border-radius: 50%;
		width: 8px;
		height: 8px;
		
		background-color:lightgrey;
		transition: 0.2s all linear;
		margin-right: 5px;

		position: relative;
		top: 4px;
	}
	input:checked {
		background-color:grey;
	} */
</style>








