
<script>
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
            Home / About UCCZ
          </div>
          <div class="my-8 text-4xl font-bold">
            Who We Are !
          </div>

          <!-- <div class="bg-cyan-800 text-gray-50 w-fit px-5 py-2 rounded-md">
            Learn More
          </div> -->
  
        </div>
      </div>
  </div>
  <section class="bg-white pb-12">
      <div class="container mx-auto py-10 px-4 sm:px-6 lg:px-32">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                  <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-3xl">About Us</h2>
                  <p class="mt-4 text-gray-600 text-base">
                    The UCCZ, or United Church of Christ in Zimbabwe, is a Christian 
                    denomination in Zimbabwe. It is a member of the World Council of Churches 
                    and the All Africa Conference of Churches. The UCCZ was established in 1893 
                    and has since grown to become one of the largest Protestant denominations in
                     Zimbabwe. It is known for its commitment to social justice, community development, 
                     and the empowerment of its members. The UCCZ places a strong emphasis 
                     on education, healthcare, and sustainable development initiatives, and actively 
                     engages in advocacy for human rights and equality.
                  </p>
                  <div class="mt-8">
                      <a href="/contact-us" class="text-cyan-600 hover:text-cyan-800 font-medium">Get In Touch Through Our Head Office
                          <span class="ml-2">&#8594;</span></a>
                  </div>
              </div>
              <div class="mt-6 md:-mt- relative">
                  <!-- svelte-ignore a11y-img-redundant-alt -->
                  <!-- <img src="https://images.pexels.com/photos/6869055/pexels-photo-6869055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us Image" class="object-cover rounded-lg shadow-md"> -->
                  <div class="bg-blue-500 bg-center bg-[url('https://img.freepik.com/free-photo/low-angle-shot-church-interior-with-mesmerizing-medieval-art_181624-7761.jpg?t=st=1715015502~exp=1715019102~hmac=625388a96fa87a4b0253396b09707ec3c333a1c705b4f36519df0ddaad01b0df&w=900')] relative w-11/12 scale-x-110 h-[300px] first-letter:mt-1 rounded-md">
                  </div>
                  <div class=" bg-[url('$lib/images/gradient/bg-grad-01.png')] bg-cover w-11/12 h-[280px] -mt-[350px] ml-20 rounded-md">
                  </div>
              
              </div>
          </div>
      </div>
  </section>
  
  <section class="mt-">
      <div class="py-12 bg-gray-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
              <div class="lg:text-center items-center">
                  <h2
                      class="font-heading mb-4 bg-cyan-200 text-black px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font">
                      Mission Satement
                  </h2>
                  <p class="font-heading w-4/5  md:mx-auto mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    "To proclaim the Gospel of Jesus Christ and to bring about the transformation of individuals, communities, and society as a whole"
                  </p>
                  <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                      Our Objectives
                  </p>
              </div>
  
              <div class="mt-10">
                  <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      <div class="relative">
                          <dt>
                              <div
                                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6 mt-1">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                              </div>
                              <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Christian Education</p>
                          </dt>
                          <dd class="mt-2 ml-16 text-base text-gray-500">
                            The church seeks to provide teachings, trainings, and resources to help individuals grow in faith and live out of its principles in their daily lives.
                          </dd>
                      </div>
                      <div class="relative">
                          <dt>
                              <div
                                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6 mt-1">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                              </div>
                              <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Spiritual Growth & Nourishment
                              </p>
                          </dt>
                          <dd class="mt-2 ml-16 text-base text-gray-500"> The UCCZ aims to create and deepen spaces for meaningful worship, prayer, and spiritual growth. 
                          </dd>
                      </div>
                      <div class="relative">
                          <dt>
                              <div
                                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6 mt-1">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
  
                              </div>
                              <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Community Outreach and Service
                              </p>
                          </dt>
                          <dd class="mt-2 ml-16 text-base text-gray-500">  UCCZ strives to be a relevant and compassionate presence in the communities it serves. 
                          </dd>
                      </div>
                      <div class="relative">
                          <dt>
                              <div
                                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6 mt-1">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
  
                              </div>
                              <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Missionary Work and Evangelism
                              </p>
                          </dt>
                          <dd class="mt-2 ml-16 text-base text-gray-500">The church is committed to sharing the message of the Gospel and making disciples of all nations. 
                          </dd>
                      </div>
                  </dl>
              </div>
  
          </div>
      </div>
  </section>
  <div class="bg-white py-24 sm:py-5 lg:py-10">
      <div class="mx-auto max-w-7xl px-1 lg:px-10">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Empowering Christians Globally</h2>
            <p class="px-8 md:px-0 mt-2 text-lg leading-8 text-gray-600">
              Equipping and enabling believers from diverse backgrounds and regions to live out their faith with confidence, impact their communities, and be of utmost value in this world. 
            </p>
          </div>
          <dl class="p-10 mt-5 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col bg-gray-200 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">Active Members</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">50000+</dd>
            </div>
            <div class="flex flex-col bg-gray-200 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">Conferences</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">6</dd>
            </div>
            <div class="flex flex-col bg-gray-200 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">Spritual Councils</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">5</dd>
            </div>
            <div class="flex flex-col bg-gray-200 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">Churches</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">100+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  
    <section class="bg-gray-800 text-gray-100 py-5 hidden">
      <div class="container flex flex-col justify-center p-4 mx-auto md:p-5">
        <h2 class="mb-12 text-4xl font-bold text-center sm:text-4xl">Frequently Asked Questions</h2>
        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">How can I place an order?</summary>
            <div class="px-4 pb-4">
              <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">What payment methods do you accept?</summary>
            <div class="px-4 pb-4">
              <p>We accept various payment methods, including PayNow, DPO and Paylater. You can choose the payment option that is most convenient for you during the checkout process.</p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">How long does shipping take?</summary>
            <div class="px-4 pb-4">
              <p>Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and delivery can take 1-2 business days within Harare . You will receive a tracking notification once your order is shipped.</p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">Can I return a product if I'm not satisfied?</summary>
            <div class="px-4 pb-4">
              <p>Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please contact our customer support at <a href="." class="underline">bookings@gatewaystream.com</a> for assistance.</p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">Do you offer international shipping?</summary>
            <div class="px-4 pb-4">
              <p>Currently, we only provide shipping services within Zimbabwe. However, we may consider expanding our shipping options to international locations in the future. Please stay updated with our website for any changes in shipping destinations.</p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">What is your customer support contact?</summary>
            <div class="px-4 pb-4">
              <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at +263 772 298 779 during our business hours, Monday to Sunday from 8am am to 5 pm. You can also contact us via email at <a href="." class="underline">bookings@gatewaystream.com</a>.</p>
            </div>
          </details>
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
            <div class="px-4 pb-4">
              <p>You can find our detailed terms and conditions by visiting our 
                <a href="." class="underline">Terms of Service</a> 
                page on our website. It includes information about our policies, user guidelines, and more.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
    
</div>
