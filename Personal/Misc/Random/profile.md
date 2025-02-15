<script setup>
  const api = useApi()
  const global = useGlobalStore()
  const route = useRoute()
  const router = useRouter()

  const DATA_SET_VERTICAL_BAR_CHART_1 = [
    68.106, 26.762, 94.255, 72.021, 74.082, 64.923, 85.565, 32.432, 54.664, 87.654, 43.013, 91.443,
  ]

  const labels_vertical_bar_chart = [
    'January',
    'February',
    'Mart',
    'April',
    'May',
    'Jun',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dataVerticalBarChart = {
    labels: labels_vertical_bar_chart,
    datasets: [
      {
        label: 'Revenue',
        data: DATA_SET_VERTICAL_BAR_CHART_1,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  }
  const configVerticalBarChart = {
    type: 'bar',
    data: dataVerticalBarChart,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Last 12 Months',
        },
      },
    },
  }

  const currentItem = await api.get('producer', route.params.producer)

  onMounted(() => {
    console.log('route.params', route.params)
    console.log('currentItem', currentItem)
  })

  function handleEditClick() {
    global.toast('default', 'This feature is not available yet.')
  }
</script>

<template>
  <!-- section 1 -->
  <div class="h-full p-4 pt-25">
    <div
      class="fixed top-16 left-64 min-w-[calc(100vw-256px)] flex justify-between items-center bg-base-100 p-4 border-[1.5px] !border-l-[0px] border-base-content/10 z-10"
    >
      <div class="flex gap-4 items-center">
        <router-link to="/producers" class="btn btn-ghost">
          <Icon name="arrow_left" />
        </router-link>
        <h2 class="!mb-0 text-lg font-bold ml-4 w-full">{{ producer.name }}</h2>
      </div>
      <div class="flex items-center">
        <button @click="handleEditClick" class="btn btn-ghost ml-2">
          <Icon name="edit" />
        </button>
      </div>
    </div>

    <div class="relative w-full min-w-0 break-words bg-base-100 mb-4 cell">
      <div class="px-0 w-full">
        <div class="flex flex-wrap justify-center w-full">
          <div class="w-full flex justify-center">
            <div class="relative w-full flex flex-col items-center justify-end">
              <div class="bg-base-content/20 w-full h-64 rounded-t-[6px]"></div>
              <img
                src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                class="rounded-full border-none absolute w-[150px] border-[1.5px] border-base-content/10 mb-[-75px]"
              />
            </div>
          </div>
          <div class="text-center my-6 mt-24">
            <h3 class="text-4xl font-bold leading-normal my-2">Mike Thompson</h3>
            <div class="badge badge-primary badge-outline rounded-full">Member</div>
          </div>
          <div class="w-full text-center mt-0">
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                <span class="text-sm text-slate-400">Photos</span>
              </div>
              <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                <span class="text-sm text-slate-400">Followers</span>
              </div>

              <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                <span class="text-sm text-slate-400">Following</span>
              </div>
            </div>
          </div>
        </div>
        <div class="px-12">
          <div class="mt-12 py-6 border-t border-base-content/10 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 w-full flex justify-center">
                <p class="font-light leading-relaxed text-slate-600 mb-4 mt-4 text-base max-w-[60%]">
                  An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick
                  Murphy writes, performs and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section 2 -->
    <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
      <div class="w-full flex flex-col 2xl:w-1/3">
        <div class="flex-1 bg-white rounded-lg cell p-8">
          <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul class="mt-2 text-gray-700">
            <li class="flex border-y py-2">
              <span class="font-bold w-24">Full name:</span>
              <span class="text-gray-700">Amanda S. Ross</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Birthday:</span>
              <span class="text-gray-700">24 Jul, 1991</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Joined:</span>
              <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Mobile:</span>
              <span class="text-gray-700">(123) 123-1234</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Email:</span>
              <span class="text-gray-700">amandaross@example.com</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Location:</span>
              <span class="text-gray-700">New York, US</span>
            </li>
            <li class="flex border-b py-2">
              <span class="font-bold w-24">Languages:</span>
              <span class="text-gray-700">English, Spanish</span>
            </li>
            <li class="flex items-center border-b py-2 space-x-2">
              <span class="font-bold w-24">Elsewhere:</span>
              <a href="#" title="Facebook">
                <svg
                  class="w-5 h-5"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 506.86 506.86"
                >
                  <path
                    class="cls-1"
                    d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                  ></path>
                  <path
                    class="cls-2"
                    d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                  ></path>
                </svg>
              </a>
              <a href="#" title="Twitter">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 333333 333333"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                    fill="#1da1f2"
                  ></path>
                </svg>
              </a>
              <a href="#" title="LinkedIn">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 333333 333333"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                    fill="#0077b5"
                  ></path>
                </svg>
              </a>
              <a href="#" title="Github">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0"
                  height="0"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-1 bg-white rounded-lg cell mt-4 p-8">
          <h4 class="text-xl text-gray-900 font-bold">Activity log</h4>
          <div class="relative px-4">
            <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">Profile informations changed.</p>
                <p class="text-xs text-gray-500">3 min ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Connected with
                  <a href="#" class="text-blue-600 font-bold">Colby Covington</a>
                  .
                </p>
                <p class="text-xs text-gray-500">15 min ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Invoice
                  <a href="#" class="text-blue-600 font-bold">#4563</a>
                  was created.
                </p>
                <p class="text-xs text-gray-500">57 min ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Message received from
                  <a href="#" class="text-blue-600 font-bold">Cecilia Hendric</a>
                  .
                </p>
                <p class="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  New order received
                  <a href="#" class="text-blue-600 font-bold">#OR9653</a>
                  .
                </p>
                <p class="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->

            <!-- start::Timeline item -->
            <div class="flex items-center w-full my-6 -ml-1.5">
              <div class="w-1/12 z-10">
                <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div class="w-11/12">
                <p class="text-sm">
                  Message received from
                  <a href="#" class="text-blue-600 font-bold">Jane Stillman</a>
                  .
                </p>
                <p class="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <!-- end::Timeline item -->
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full 2xl:w-2/3">
        <div class="flex-1 bg-white rounded-lg cell p-8">
          <h4 class="text-xl text-gray-900 font-bold">About</h4>
          <p class="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut
            fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum!
            Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!
          </p>
        </div>
        <div class="flex-1 bg-white rounded-lg cell mt-4 p-8">
          <h4 class="text-xl text-gray-900 font-bold">Statistics</h4>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
            <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg cell">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-indigo-600">Total Revenue</span>
                <span
                  class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
                >
                  7 days
                </span>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div>
                  <svg
                    class="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-end">
                    <span class="text-2xl 2xl:text-3xl font-bold">$8,141</span>
                    <div class="flex items-center ml-2 mb-1">
                      <svg
                        class="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                      <span class="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg cell">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-green-600">New Orders</span>
                <span
                  class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
                >
                  7 days
                </span>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div>
                  <svg
                    class="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-end">
                    <span class="text-2xl 2xl:text-3xl font-bold">217</span>
                    <div class="flex items-center ml-2 mb-1">
                      <svg
                        class="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                      <span class="font-bold text-sm text-gray-500 ml-0.5">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg cell">
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-blue-600">New Connections</span>
                <span
                  class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
                >
                  7 days
                </span>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div>
                  <svg
                    class="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-end">
                    <span class="text-2xl 2xl:text-3xl font-bold">54</span>
                    <div class="flex items-center ml-2 mb-1">
                      <svg
                        class="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                      <span class="font-bold text-sm text-gray-500 ml-0.5">7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- chart -->
          <div class="mt-4 h-[414px] w-full"></div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg cell p-8">
      <div class="flex items-center justify-between">
        <h4 class="text-xl text-gray-900 font-bold">Connections (532)</h4>
        <a href="#" title="View All">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8"
      >
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Diane Aguilar</p>
          <p class="text-xs text-gray-500 text-center">UI/UX Design at Upwork</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Frances Mather</p>
          <p class="text-xs text-gray-500 text-center">Software Engineer at Facebook</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Carlos Friedrich</p>
          <p class="text-xs text-gray-500 text-center">Front-End Developer at Tailwind CSS</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Donna Serrano</p>
          <p class="text-xs text-gray-500 text-center">System Engineer at Tesla</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Randall Tabron</p>
          <p class="text-xs text-gray-500 text-center">Software Developer at Upwork</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">John McCleary</p>
          <p class="text-xs text-gray-500 text-center">Software Engineer at Laravel</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Amanda Noble</p>
          <p class="text-xs text-gray-500 text-center">Graphic Designer at Tailwind CSS</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Christine Drew</p>
          <p class="text-xs text-gray-500 text-center">Senior Android Developer at Google</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Lucas Bell</p>
          <p class="text-xs text-gray-500 text-center">Creative Writer at Upwork</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Debra Herring</p>
          <p class="text-xs text-gray-500 text-center">Co-Founder at Alpine.js</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
          <p class="text-xs text-gray-500 text-center">Software Engineer Lead at Microsoft</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Maria Heal</p>
          <p class="text-xs text-gray-500 text-center">Linux System Administrator at Twitter</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Edward Ice</p>
          <p class="text-xs text-gray-500 text-center">Customer Support at Instagram</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Jeffery Silver</p>
          <p class="text-xs text-gray-500 text-center">Software Engineer at Twitter</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Jennifer Schultz</p>
          <p class="text-xs text-gray-500 text-center">Project Manager at Google</p>
        </a>
        <a
          href="#"
          class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
          title="View Profile"
        >
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
            class="w-16 rounded-full"
          />
          <p class="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
          <p class="text-xs text-gray-500 text-center">Team Lead at Facebook</p>
        </a>
      </div>
    </div>

  </div>
</template>

<style>
  .cls-1 {
    fill: #1877f2;
  }
  .cls-2 {
    fill: #fff;
  }
</style>
