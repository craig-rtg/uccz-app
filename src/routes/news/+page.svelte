<script>
// @ts-nocheck

	import bible from '$lib/images/icons/bible.png';
    import MainMenu from '$lib/components/MainHeader.svelte';

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
              Home / News
            </div>
            <div class="my-8 text-4xl font-bold">
              Blog & Updates
            </div>
  
            <!-- <div class="bg-cyan-800 text-gray-50 w-fit px-5 py-2 rounded-md">
              Learn More
            </div> -->
    
          </div>
        </div>
    </div>
</div>
<main class="container mx-auto px-4 py-8">
  <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">The Importance of Prayer</h2>
        <p class="text-gray-600 mb-4">Discover the transformative power of prayer and how it can deepen your relationship with God.</p>
        <a href="." class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">Overcoming Doubt and Fear</h2>
        <p class="text-gray-600 mb-4">Learn how to confront your doubts and fears with faith and trust in God.</p>
        <a href="." class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">Spiritual Growth through Worship</h2>
        <p class="text-gray-600 mb-4">Explore the transformative power of worship and how it can deepen your spiritual journey.</p>
        <a href="." class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">Finding Joy in the Midst of Trials</h2>
        <p class="text-gray-600 mb-4">Discover how to cultivate joy and peace even during life's most challenging circumstances.</p>
        <a href="." class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">The Transformative Power of Forgiveness</h2>
        <p class="text-gray-600 mb-4">Learn how the act of forgiveness can bring healing and restoration to your life.</p>
        <a href="." class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">Navigating Difficult Relationships with Faith</h2>
        <p class="text-gray-600 mb-4">Discover practical tips for maintaining godly relationships and overcoming conflicts.</p>
        <a href="." class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
      </div>
    </div>
  </section>
</main>