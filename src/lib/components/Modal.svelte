<script>
	// @ts-nocheck

	export let showModal; // boolean
	export let showCloseButton = true; // boolean
	export let showHeader = true; // boolean
	export let theme = 'bg-blue-600 text-white';
	export let closeFill = 'text-white';
	export let dialogClasses = 'min-w-[10em]';
	export let loadingLabel = 'loading';
	export let showLoading = false;

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="{dialogClasses} relative"
>
	{#if showLoading}
		<div
			class="absolute select-none cursor-pointer z-50 w-full h-full bg-gradient-to-b from-[#306b9d] to-transparent text-white flex justify-center items-center"
		>
			<div class="flex items-center justify-center flex-col gap-2">
				<div
					class="w-20 h-20 border-4 border-blue-50 rounded-full animate-spin flex justify-center items-center"
				>
					<div class="w-16 h-16 rounded-full bg-white animate-pulse-slow" />
				</div>
				<span class="animate-pulse-slow">{@html loadingLabel}</span>
			</div>
		</div>
	{/if}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="">
		{#if showHeader}
			<div class="{theme} px-5 relative">
				<slot name="header" />
			</div>
		{/if}

		<div class="">
			<slot />
		</div>
	</div>
	<slot name="footer" />
	{#if showCloseButton}
		<div class="absolute bg-cyan-700 rounded-full shadow border top-3 right-3">
			<button class="p-2 rounded-full" on:click={() => dialog.close()}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 {closeFill}  transition duration-500 hover:rotate-180">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				  </svg>
				  
			</button>
		</div>
	{/if}
</dialog>

<style>
	dialog {
		max-width: 32em;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.597);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
			/* border-right: 4px solid rgb(239 246 255); */
		}
		100% {
			transform: scale(1);
		}
	}

	.animate-pulse-slow {
		animation: pulse 1s ease-in-out infinite;
	}
</style>
