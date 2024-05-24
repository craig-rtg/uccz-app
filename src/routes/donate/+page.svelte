<script>
// @ts-nocheck

	import care from '$lib/images/icons/care.png';
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
              <img src="{care}" class="w-20" alt="Dove Icon">
            </div>
            <div class="my-3 text-base text-gray-50 w-fit bg-blue-600 bg-opacity-20 p-1 font-light">
              Home / Donate
            </div>
            <div class="my-8 text-4xl font-bold">
              #Given To Give !
            </div>
  
            <!-- <div class="bg-cyan-800 text-gray-50 w-fit px-5 py-2 rounded-md">
              Learn More
            </div> -->
    
          </div>
        </div>
    </div>
</div>
<div class="bg-gray-100 py-10">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8">Support Our Ministry</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-2xl font-bold mb-4">Why Donate?</h2>
        <p class="text-gray-700 mb-6">
          Your donation helps us continue our important work of spreading the
          gospel, serving the community, and supporting those in need. Every
          gift, no matter the size, makes a difference.
        </p>
        <p class="text-gray-700 mb-6">
          Your donation is tax-deductible, and you'll receive a receipt for your
          records.
        </p>
        <p class="text-gray-700 mb-6">
          By supporting our ministry, you're investing in the lives of people
          and the advancement of God's Kingdom.
        </p>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-4">Donation Options</h2>
        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 class="text-xl font-bold mb-2">One-Time Donation</h3>
          <form class="space-y-4">
            <div>
              <label for="amount" class="block text-gray-700 font-bold mb-2">
                Donation Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                min="5"
                step="5"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount (minimum $5)"
                required
              />
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Donate Now
            </button>
          </form>
        </div>
        <!-- <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-2">Recurring Donation</h3>
          <form class="space-y-4">
            <div>
              <label for="amount" class="block text-gray-700 font-bold mb-2">
                Donation Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                min="5"
                step="5"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount (minimum $5)"
                required
              />
            </div>
            <div>
              <label for="frequency" class="block text-gray-700 font-bold mb-2">
                Donation Frequency:
              </label>
              <select
                id="frequency"
                name="frequency"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select frequency</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Set Up Recurring Donation
            </button>
          </form>
        </div> -->
      </div>
    </div>
  </div>
</div>