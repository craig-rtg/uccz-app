<script>
    // @ts-nocheck
    import { fade, fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
  
    let isInView;
    export let data;
  </script>
  
  <div
    class="wrapper"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >
    {#if isInView}
      <div in:fly={{ x: 100, duration: 2000 }} out:fade class="box">
        {data}
      </div>
    {/if}
  </div>