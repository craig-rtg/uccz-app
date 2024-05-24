<script>
// @ts-nocheck
	import bible from '$lib/images/icons/bible.png';
  import MainMenu from '$lib/components/MainHeader.svelte';
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';


  let plugins = [TimeGrid];
    let options = {
        view: 'timeGridWeek',
        events: [
            // your list of events
        ]
  };

  let buttonText = {
    close: 'Close', 
    dayGridMonth: 'month', 
    listDay: 'list', 
    timeGridDay: 'day', 
    timeGridWeek: 'week', 
    today: 'today'
  }

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

<div class="m-4">
  <Calendar {plugins} {options} />
</div>
  