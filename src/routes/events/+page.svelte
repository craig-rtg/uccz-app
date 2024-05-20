<script>
// @ts-nocheck
	import bible from '$lib/images/icons/bible.png';
  import MainMenu from '$lib/components/MainHeader.svelte';
  import { onMount } from 'svelte';
  
  let calendarData = [];

  // Function to generate calendar data for every four months from now
  function generateCalendarData() {
    let currentDate = new Date();
    for (let i = 0; i < 4; i++) {
      let nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      let month = nextMonth.toLocaleString('default', { month: 'long' });
      let year = nextMonth.getFullYear();
      let daysInMonth = new Date(year, nextMonth.getMonth() + 1, 0).getDate();

      calendarData.push({
        month: month,
        year: year,
        daysInMonth: daysInMonth
      });
    }
  }

  // Call the function to generate calendar data on component mount
  onMount(() => {
    generateCalendarData();
  });
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
              Home / Events
            </div>
            <div class="my-8 text-4xl font-bold">
              Upcoming Meeting Events
            </div>
  
            <!-- <div class="bg-cyan-800 text-gray-50 w-fit px-5 py-2 rounded-md">
              Learn More
            </div> --> 
   
          </div>
        </div>
    </div>
</div>

<!-- Calendar HTML -->
<div class="max-w-md mx-auto bg-white rounded-lg shadow overflow-hidden p-4">
  <h2 class="text-xl font-semibold mb-4">Next Four Months Calendar</h2>
  <!-- Loop through the calendar data and render each month -->
  {#each calendarData as { month, year, daysInMonth }}
    <div class="mb-8">
      <h3 class="text-lg font-semibold mb-2">{month} {year}</h3>
      <div class="grid grid-cols-7 gap-1">
        <!-- Weekdays -->
        <div class="text-sm font-medium text-gray-500">Sun</div>
        <div class="text-sm font-medium text-gray-500">Mon</div>
        <div class="text-sm font-medium text-gray-500">Tue</div>
        <div class="text-sm font-medium text-gray-500">Wed</div>
        <div class="text-sm font-medium text-gray-500">Thu</div>
        <div class="text-sm font-medium text-gray-500">Fri</div>
        <div class="text-sm font-medium text-gray-500">Sat</div>
        <!-- Calendar Dates -->
        {#each Array.from({ length: daysInMonth }, (_, index) => index + 1) as day}
          <div class="text-sm font-medium text-gray-800">{day}</div>
        {/each}
      </div>
    </div>
  {/each}
</div>
