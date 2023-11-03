/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead } from '../astro_7f2237b0.mjs';
import 'html-escaper';
import 'clsx';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const oiacLogo = {"src":"/_astro/oiac-logo-removebg-preview.8307ea43.webp","width":542,"height":460,"format":"webp"};

const $$Astro$c = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-teal-200 text-teal-700 text-sm md:text-md lg:text-lg xl:text-xl mx-auto px-8 py-2"><div class="container flex items-center justify-between"><div class="min-w-18 w-18"><a href="#"><img class=" w-18 h-16"${addAttribute(oiacLogo.src, "src")} alt="OIAC Logo"></a></div><div class="hidden md:flex space-x-8 items-center justify-between transition duration-300"><div><a href="/" class=" hover:text-green-600">Home</a></div><div><a href="#" class=" hover:text-green-600">About Us</a></div><div><a href="/prayertimes" class=" hover:text-green-600">Prayer Times</a></div><div><a href="#" class=" hover:text-green-600">Programs</a></div><div><a href="#" class=" hover:text-green-600">Events</a></div><div><a href="#" class=" hover:text-green-600">Contact Us</a></div></div><div class="hidden md:block"><a class=" bg-teal-700 hover:bg-green-600 text-green-100 rounded-lg px-4 py-2" href="#">Donate</a></div><div class="block md:hidden"><button class="mobile-menu-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mobile-icon w-10 h-10 block hover:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${addAttribute(1.5, "stroke-width")} stroke="currentColor" class="close-mobile-icon w-10 h-10 hidden text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div><div class="mobile-menu hidden text-lg flex bottom-0 left-0 w-full h-screen px-6 py-6"><div class="flex flex-col gap-8"><a href="#" class="block hover:text-green-950">Home</a><a href="#" class="block hover:text-green-950">About Us</a><a href="#" class="block hover:text-green-950">Prayer Times</a><a href="#" class="block hover:text-green-950">Programs</a><a href="#" class="block hover:text-green-950">Events</a><a href="#" class="block hover:text-green-950">Contact Us</a></div></div></nav>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Nav.astro", void 0);

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clo0kf2c97pnm01t4g8sva2ni/master",
  cache: new InMemoryCache()
});

let currentDay = (/* @__PURE__ */ new Date()).getDate();
let currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
async function getPrayerTimesForCurrentDay() {
  const result = await client.query({
    query: gql`
            query MyQuery($month:Int!, $day:Int!) {
                prayerTimes(where: {month: $month, AND: {day: $day}}) {
                month
                day
                fajrBegins
                fajrJamah
                sunrise
                zuhrBegins
                zuhrJamah
                asrBegins
                asrJamah
                maghribBegins
                maghribJamah
                ishaBegins
                ishaJamah
                }
            }`,
    variables: { month: currentMonth, day: currentDay }
  });
  let prayerTimesForCurrentDay;
  prayerTimesForCurrentDay = result.data.prayerTimes[0];
  return prayerTimesForCurrentDay;
}
async function getPrayerTimesForCurrentMonth() {
  const result = await client.query({
    query: gql`
            query MyQuery($month:Int!) {
                prayerTimes(where: {month: $month}) {
                month
                day
                fajrBegins
                fajrJamah
                sunrise
                zuhrBegins
                zuhrJamah
                asrBegins
                asrJamah
                maghribBegins
                maghribJamah
                ishaBegins
                ishaJamah
                }
            }`,
    variables: { month: currentMonth }
  });
  let prayerTimesForCurrentMonth = [];
  prayerTimesForCurrentMonth = result.data.prayerTimes;
  return prayerTimesForCurrentMonth;
}

const $$Astro$b = createAstro();
const $$NavPrayerTimes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NavPrayerTimes;
  const prayerTimesForCurrentDay = await getPrayerTimesForCurrentDay();
  return renderTemplate`${maybeRenderHead()}<div class="bg-teal-100 p-2 text-xs md:hidden"><div class="container flex justify-between"><div class="p-1"><h4 class="font-bold bg-emerald-500 text-gray-50 px-2 rounded-md text-center mb-1">Fajr</h4><h6 class="text-gray-500">${prayerTimesForCurrentDay.fajrBegins}</h6><h6 class="font-bold">${prayerTimesForCurrentDay.fajrJamah}</h6></div><div class="p-1"><h4 class="font-bold bg-emerald-500 text-gray-50 px-2 rounded-md text-center mb-1">Dhuhr</h4><h6 class="text-gray-500">${prayerTimesForCurrentDay.zuhrBegins}</h6><h6 class="font-bold">${prayerTimesForCurrentDay.zuhrJamah}</h6></div><div class="p-1"><h4 class="font-bold bg-emerald-500 text-gray-50 px-2 rounded-md text-center mb-1">Asr</h4><h6 class="text-gray-500">${prayerTimesForCurrentDay.asrBegins}</h6><h6 class="font-bold">${prayerTimesForCurrentDay.asrJamah}</h6></div><div class="p-1"><h4 class="font-bold bg-emerald-500 text-gray-50 px-2 rounded-md text-center mb-1">Maghrib</h4><h6 class="text-gray-500">${prayerTimesForCurrentDay.maghribBegins}</h6><h6 class="font-bold">${prayerTimesForCurrentDay.maghribJamah}</h6></div><div class="p-1"><h4 class="font-bold bg-emerald-500 text-gray-50 px-2 rounded-md text-center mb-1">Isha</h4><h6 class="text-gray-500">${prayerTimesForCurrentDay.ishaBegins}</h6><h6 class="font-bold">${prayerTimesForCurrentDay.ishaJamah}</h6></div></div></div><div class="bg-cyan-200 p-2 text-xs md:hidden"><div class="container flex space-x-8"><div class="p-1"><h4 class="font-bold bg-cyan-500 text-gray-50 px-2 rounded-md text-center mb-1">Sunrise</h4><h6 class="text-gray-500">${prayerTimesForCurrentDay.sunrise}</h6></div><div class="p-1"><h4 class="font-bold bg-cyan-500 text-gray-50 px-2 rounded-md text-center mb-1">Jummah 1</h4><h6 class="font-bold">02:00 PM</h6></div><div class="p-1"><h4 class="font-bold bg-cyan-500 text-gray-50 px-2 rounded-md text-center mb-1">Jummah 2</h4><h6 class="font-bold">03:00 PM</h6></div></div></div><div class="bg-teal-100 mx-auto px-8 py-2 text-sm md:text-md lg:text-lg xl:text-xl hidden md:block"><div class="container space-x-2 flex "><div class="flex border border-teal-500 rounded-lg w-full"><div class="font-bold bg-teal-300 text-teal-700 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 rounded-l-lg "><h4 class="mt-2">Fajr</h4></div><div class="px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 text-teal-600"><h6>${prayerTimesForCurrentDay.fajrBegins}</h6><h6 class="text-teal-800 font-bold">${prayerTimesForCurrentDay.fajrJamah}</h6></div></div><div class="flex border border-teal-500 rounded-lg w-full"><div class="font-bold bg-teal-300 text-teal-700 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 rounded-l-lg "><h4 class="mt-2">Dhuhr</h4></div><div class="px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 text-teal-600"><h6>${prayerTimesForCurrentDay.zuhrBegins}</h6><h6 class="text-teal-800 font-bold">${prayerTimesForCurrentDay.zuhrJamah}</h6></div></div><div class="flex border border-teal-500 rounded-lg w-full"><div class="font-bold bg-teal-300 text-teal-700 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 rounded-l-lg "><h4 class="mt-2">Asr</h4></div><div class="px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 text-teal-600"><h6>${prayerTimesForCurrentDay.asrBegins}</h6><h6 class="text-teal-800 font-bold">${prayerTimesForCurrentDay.asrJamah}</h6></div></div><div class="flex border border-teal-500 rounded-lg w-full"><div class="font-bold bg-teal-300 text-teal-700 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 rounded-l-lg "><h4 class="mt-2">Maghrib</h4></div><div class="px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 text-teal-600"><h6>${prayerTimesForCurrentDay.maghribBegins}</h6><h6 class="text-teal-800 font-bold">${prayerTimesForCurrentDay.maghribJamah}</h6></div></div><div class="flex border border-teal-500 rounded-lg w-full"><div class="font-bold bg-teal-300 text-teal-700 px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 rounded-l-lg "><h4 class="mt-2">Isha</h4></div><div class="px-1 md:px-1 lg:px-2 xl:px-3 2xl:px-4 text-teal-600"><h6>${prayerTimesForCurrentDay.ishaBegins}</h6><h6 class="text-teal-800 font-bold">${prayerTimesForCurrentDay.ishaJamah}</h6></div></div></div></div><div class="bg-cyan-200 mx-auto px-8 py-2 text-sm md:text-md lg:text-lg xl:text-xl hidden md:block"><div class="container flex space-x-2"><div class="flex border border-cyan-500 rounded-lg"><div class="font-bold bg-cyan-300 text-cyan-700 px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-5 rounded-l-lg "><h4 class="p-2">Sunrise</h4></div><div class="px-1 py-2 md:px-2 lg:px-3 xl:px-4 2xl:px-5 text-cyan-600"><h6>${prayerTimesForCurrentDay.sunrise}</h6></div></div><div class="flex border border-teal-500 rounded-lg"><div class="font-bold bg-cyan-300 text-cyan-700 px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-5 rounded-l-lg "><h4 class="p-2">Jummah 1</h4></div><div class="px-1 py-2 md:px-2 lg:px-3 xl:px-4 2xl:px-5 text-cyan-600"><h6 class="text-cyan-800 font-bold">02:00 PM</h6></div></div><div class="flex border border-cyan-500 rounded-lg"><div class="font-bold bg-cyan-300 text-cyan-700 px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-5 rounded-l-lg "><h4 class="p-2">Jummah 2</h4></div><div class="px-1 py-2 md:px-2 lg:px-3 xl:px-4 2xl:px-5 text-cyan-600"><h6 class="text-cyan-800 font-bold">03:00 PM</h6></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/NavPrayerTimes.astro", void 0);

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="w-full fixed top-0">${renderComponent($$result, "Nav", $$Nav, {})}${renderComponent($$result, "NavPrayerTimes", $$NavPrayerTimes, {})}</div><div class="h-[200px]"></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro();
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<div class="px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container grid grid-cols-1 content-stretch mt-5"><div class=""><h4 class="font-bold text-cyan-600">Welcome To</h4></div><div class=""><h1 class="text-6xl font-bold text-blue-950">Omar Ibn Al Khattab Centre</h1></div><div class="mt-5"><h3 class="text-lg text-sky-600">Striving to serve the best interests of Islam and the Muslims of Edmonton</h3></div><div class="mt-5"><h6 class="text-emerald-500">6005 103A St NW, Edmonton</h6></div></div><div class="container flex flex-wrap items-start"><div class="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">5 DAILY PRAYERS</div><div class="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">COUNSELLING WITH OUR IMAM ABOUT LIFE RELATED ISSUES</div><div class="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">PRAYER AREA FOR SISTERS WITH SEPARATE ENTERANCE</div><div class="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">VARIOUS SOCIAL ACTIVITIES</div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Welcome.astro", void 0);

const hifzImage = {"src":"/_astro/OIAC-Hifz-Program.5c34f87c.webp","width":660,"height":854,"format":"webp"};

const karateImage = {"src":"/_astro/OIAC-KARATE-scaled.1ff3222f.webp","width":660,"height":880,"format":"webp"};

const quranIntensiveImage = {"src":"/_astro/OIAC-Quran-Intensive-1.15cc8c01.webp","width":768,"height":768,"format":"webp"};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$LatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LatestPosts;
  return renderTemplate(_a || (_a = __template(["", '<div class="px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="flex justify-between"><h4 class="text-2xl">LATEST POSTS</h4><a class="text-lg" href="#">See all posts</a></div><div class="flex flex-wrap justify-between mt-5"><div class="border border-black-100 rounded-md w-full md:w-[50%] lg:w-[33%] h-[700px]"><div><img class="rounded-md h-[500px]"', ' alt="OIAC Hifz Program"></div><div class="p-5"><h4 class="text-2xl">After School Hifz Program</h4><ul><li>Three Classes per week</li><li>Kids will be taught Islamic Etiquettes and Adab</li></ul></div></div><div class="border border-black-100 rounded-md w-full md:w-[50%] lg:w-[33%] h-[700px]"><div><img class="rounded-md h-[500px]"', ' alt="Karate Class"></div><div class="p-5"><h4 class="text-2xl">Karate Class</h4><ul><li>Ages - 6 years and up</li><li>$100 per month</li></ul></div></div><div class="border border-black-100 rounded-md w-full md:w-[50%] lg:w-[33%] h-[700px]"><div><img class="rounded-md h-[500px]"', ` alt="Quran Summer Camp"></div><div class="p-5"><h4 class="text-2xl">Summer Quran Intensive Camp</h4><ul><li>Quran Memorization with proper Tajweed</li><li>Full month of July and August</li></ul></div></div></div><!-- <div class="w-full h-[500px] bg-gray-800 rounded-xl my-5">
            <img class="postImageContainer w-full h-[500px]" />
        </div> --></div></div><!-- 
<script>
    let postImages = [
    '../assets/OIAC-Hifz-Program.webp',
    '../assets/OIAC-KARATE-scaled.webp',
    '../assets/OIAC-Quran-Intensive-1.webp'
    ]

    let postImageContainer = document.querySelector('.postImageContainer')

    let setImage = () => {
        
    }

    postImages.map(postImage => {
        postImageContainer.src = postImage
    })

<\/script> -->`])), maybeRenderHead(), addAttribute(hifzImage.src, "src"), addAttribute(karateImage.src, "src"), addAttribute(quranIntensiveImage.src, "src"));
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/LatestPosts.astro", void 0);

const $$Astro$7 = createAstro();
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Events;
  return renderTemplate`${maybeRenderHead()}<div class="px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="bg-cyan-100 border-cyan-400 md:hidden rounded-xl text-cyan-600"><div class="bg-cyan-200 p-10 font-semibold tracking-wide text-left rounded-t-2xl text-xl text-cyan-800"><h4>Events at OIAC - October 2023</h4></div><div class="p-5 border-b border-cyan-300"><h6 class="italic text-sm">SAT / SUN, 11:00 AM - 03:00 PM</h6><h4 class="text-xl font-bold">Weekend Islamic School</h4><p class="text-md">Students will learn Quran/ Arabic /Islamic Studies</p></div><div class="p-5 border-b border-cyan-300"><h6 class="italic text-sm">OCT 14, 06:45 PM</h6><h4 class="text-xl font-bold">Family Potluck</h4><p class="text-md">Talk by Br Asif Followed by a potluck</p></div><div class="p-5 border-b border-cyan-300"><h6 class="italic text-sm">CLASS 1 : SAT, SUN, 03:30 PM - 05:30 PM</h6><h6 class="italic text-sm">CLASS 2 : TUE, WED, THU, 05:30 PM - 07:30 PM</h6><h4 class="text-xl font-bold">After School Hifz</h4><p class="text-md">Memorization, revision of Quran with Shiekh Yousef or Sheikh Musab</p></div><div class="p-5 border-b border-cyan-300"><h6 class="italic text-sm">CLASS 1 : SUN, 05:30 PM - 07:30 PM</h6><h6 class="italic text-sm">CLASS 2 : WED, 05:30 PM - 07:30 PM</h6><h4 class="text-xl font-bold">Quran Class for Women</h4><p class="text-md">Memorization, revision and Tajweed</p><p class="text-md text-italic">Free for dedicated sisters</p></div><div class="p-5 border-b border-cyan-300"><h6 class="italic text-sm">CLASS 1 (Quran) : MON, 05:30 PM - 07:30 PM</h6><h6 class="italic text-sm">CLASS 2 (Arabic & Islamic Studies/Fiqh) : SAT, 05:30 PM - 07:30 PM</h6><h4 class="text-xl font-bold">Deen Class for Adults</h4><p class="text-md">For those who have always wanted to learn the Deen and Quran</p><p class="text-md text-italic">Free for dedicated brothers</p></div><div class="p-5 border-b border-cyan-300"><h6 class="italic text-sm">SUN, TUE, THU, 05:30 PM - 07:30 PM</h6><h4 class="text-xl font-bold">Arabic Class</h4><p class="text-md">Students will learn to speak and communicate in Arabic</p></div><div class="p-1"><p>&nbsp;</p></div></div><div class="bg-cyan-100 text-cyan-600 rounded-lg my-3 hidden md:block"><div class="bg-cyan-200 text-cyan-800 rounded-t-lg font-bold text-4xl mt-2 py-10 px-3 text-center"><h4 class="text-left pl-5">Events at OIAC - October 2023</h4></div><div class="grid grid-cols-[20vw_minmax(70vw,_1fr)_70vw] text-xl my-2 border-b border-cyan-200 py-5"><div class="text-center pl-5"><h4 class="text-xl font-bold">SAT / SUN</h4><h4 class="text-lg">11:00 AM - 03:00 PM</h4></div><div class="text-left pl-5"><h3 class="text-2xl font-bold">Weekend Islamic School</h3><p class="text-lg">Students will learn Quran/ Arabic /Islamic Studies</p></div></div><div class="grid grid-cols-[20vw_minmax(70vw,_1fr)_70vw] text-xl my-2 border-b border-cyan-200 py-5"><div class="text-center pl-5"><h3><span class="text-4xl mr-2">14</span><span class="text-2xl">OCT</span></h3><h4 class="text-lg">SAT</h4><h4 class="text-lg">06:45 PM</h4></div><div class="text-left pl-5"><h3 class="text-2xl font-bold">Family Potluck</h3><p class="text-lg">Talk by Br Asif Followed by a potluck</p></div></div><div class="grid grid-cols-[20vw_minmax(70vw,_1fr)_70vw] text-xl my-2 border-b border-cyan-200 py-5"><div class="text-center pl-5"><div class="mb-3"><h4 class="text-xl font-bold">SAT, SUN</h4><h4 class="text-lg">03:30 PM - 05:30 PM</h4></div><div><h4 class="text-xl font-bold">TUE, WED, THU</h4><h4 class="text-lg">05:30 PM - 07:30 PM</h4></div></div><div class="text-left pl-5"><h3 class="text-2xl font-bold">After School Hifz</h3><p class="text-lg">Memorization, revision of Quran with Shiekh Yousef or Sheikh Musab</p><div class="mt-5"><h4 class="text-xl">Class 1</h4><h4 class="text-lg">SUN - 03:30 PM - 05:30 PM</h4><h4 class="text-lg">TUE - 05:30 PM - 07:30 PM</h4><h4 class="text-lg">THU - 05:30 PM - 07:30 PM</h4></div><div class="mt-5"><h4 class="text-xl">Class 2</h4><h4 class="text-lg">SAT - 03:30 PM - 05:30 PM</h4><h4 class="text-lg">SUN - 03:30 PM - 05:30 PM</h4><h4 class="text-lg">WED - 05:30 PM - 07:30 PM</h4></div></div></div><div class="grid grid-cols-[20vw_minmax(70vw,_1fr)_70vw] text-xl my-2 border-b border-cyan-200 py-5"><div class="text-center pl-5"><div class="mb-3"><h4 class="text-xl font-bold">SUN</h4><h4 class="text-lg">05:30 PM - 07:30 PM</h4></div><div><h4 class="text-xl font-bold">WED</h4><h4 class="text-lg">05:30 PM - 07:30 PM</h4></div></div><div class="text-left pl-5"><h3 class="text-2xl font-bold">Quran Class for Women</h3><p class="text-lg">Memorization, revision and Tajweed</p><p class="text-lg">Free for dedicated sisters</p><div class="mt-5"><h4 class="text-lg">SUN - 05:30 PM - 07:30 PM</h4><h4 class="text-lg">WED - 05:30 PM - 07:30 PM</h4></div></div></div><div class="grid grid-cols-[20vw_minmax(70vw,_1fr)_70vw] text-xl my-2 border-b border-cyan-200 py-5"><div class="text-center pl-5"><div class="mb-3"><h4 class="text-xl font-bold">MON</h4><h4 class="text-lg">05:30 PM - 07:30 PM</h4></div><div><h4 class="text-xl font-bold">SAT</h4><h4 class="text-lg">05:30 PM - 07:30 PM</h4></div></div><div class="text-left pl-5"><h3 class="text-2xl font-bold">Deen Class for Adults</h3><p class="text-lg">For those who have always wanted to learn the Deen and Quran</p><p class="text-lg">Free for dedicated brothers</p><div class="mt-5"><h4 class="text-lg">MON - 05:30 PM - 07:30 PM (Quran)</h4><h4 class="text-lg">SAT - 05:30 PM - 07:30 PM (Arabic & Islamic Studies/Fiqh)</h4></div></div></div><div class="grid grid-cols-[20vw_minmax(70vw,_1fr)_70vw] text-xl my-2 border-b border-cyan-200 py-5"><div class="text-center pl-5"><div class="mb-3"><h4 class="text-xl font-bold">SUN, TUE, THU</h4><h4 class="text-lg">05:30 PM - 07:30 PM</h4></div></div><div class="text-left pl-5"><h3 class="text-2xl font-bold">Arabic Class</h3><p class="text-lg">Students will learn to speak and communicate in Arabic</p></div></div><div class="p-1 rounded-b-lg"></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Events.astro", void 0);

const donateImage = {"src":"/_astro/donate-image.7473dbca.jpg","width":3832,"height":5748,"format":"jpg"};

const $$Astro$6 = createAstro();
const $$Donate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Donate;
  return renderTemplate`${maybeRenderHead()}<div class="px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="bg-blue-950 rounded-xl text-gray-100 p-5"><div class="p-2 md:p-20 flex flex-wrap space-x-2 md:space-x-12 lg:space-x-24"><div class="w-full md:w-[40%] lg:w-[50%] xl:w-[60%]"><h4 class="text-4xl mb-10">Donate</h4><p class="mb-3">Help us to improve our services and to offer much more to our community by donating generously.</p><p class="mb-3">Your donations big or small makes a significant impact.</p><p class="mb-16">Jazakumullah Khair for your continous donations and support.</p><button class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded">
Donate
</button></div><div class="hidden md:block flex-shrink-0"><img class="resize-none rounded-3xl h-[400px]"${addAttribute(donateImage.src, "src")} alt="Donate"></div></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Donate.astro", void 0);

const volunteerImage = {"src":"/_astro/volunteer.b2a22298.jpg","width":6432,"height":4288,"format":"jpg"};

const $$Astro$5 = createAstro();
const $$Volunteer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Volunteer;
  return renderTemplate`${maybeRenderHead()}<div class="px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="bg-gray-600 rounded-xl text-gray-100 p-5"><div class="p-2 md:p-20 flex flex-wrap space-x-2 md:space-x-6 lg:space-x-12"><div class="hidden md:block md:w-[40%] flex-shrink-0"><img class="resize-none rounded-3xl h-[600px] w-[450px] object-cover"${addAttribute(volunteerImage.src, "src")} alt="Volunteer"></div><div class="w-full md:w-[50%]"><h4 class="text-4xl mb-10">Volunteer with us</h4><p class="mb-3">We encourage you to share your experience and time to one of our many Projects in our Masjid.</p><p class="mb-3">Please fill in your details and let us get back to you.</p><p class="mb-16">Jazakumullah Khair.</p><form class="w-full max-w-lg"><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block uppercase tracking-wide text-xs font-bold mb-2" for="volunteer-name">
Name
</label><input class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-name"></div></div><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block uppercase tracking-wide text-xs font-bold mb-2" for="volunteer-phone">
Phone
</label><input class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-phone"></div></div><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block uppercase tracking-wide text-xs font-bold mb-2" for="volunteer-email">
Email
</label><input class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-email"></div></div><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block uppercase tracking-wide text-xs font-bold mb-2" for="volunteer-expertise">
Your Expertise
</label><input class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-expertise"></div></div><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block uppercase tracking-wide text-xs font-bold mb-2" for="volunteer-message">
Message
</label><textarea class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-message"></textarea></div></div><button class="bg-emerald-500 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded">
Submit
</button></form></div></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Volunteer.astro", void 0);

const blankProfilePicture = {"src":"/_astro/blank-profile-picture.4064371d.png","width":1280,"height":1280,"format":"png"};

const $$Astro$4 = createAstro();
const $$Imams = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Imams;
  return renderTemplate`${maybeRenderHead()}<div class="bg-cyan-600 px-4 p-2 md:px-8 md:py-2 mx-auto mt-5"><div class="container mt-5"><div class="rounded-xl text-gray-100 p-5"><h4 class="text-4xl mb-10">Our Imams</h4><div class="flex flex-wrap md:justify-between"><div class="w-full m-5 md:w-[48%] md:m-[1%] lg:w-[31%]"><img${addAttribute(blankProfilePicture.src, "src")} alt="profile picture" class="rounded-full m-1 w-[50%] mx-auto"><h4 class="text-2xl text-center my-5">SHAIKH AHMED SAEED</h4><p class="my-3">Over 10 years of experience as an Imam, a teacher of Quran and Islamic Studies, proficient in Quran recitation and Hadeeth sciences.</p></div><div class="w-full m-5 md:w-[48%] md:m-[1%] lg:w-[31%]"><img${addAttribute(blankProfilePicture.src, "src")} alt="profile picture" class="rounded-full m-1 w-[50%] mx-auto"><h4 class="text-2xl text-center my-5">SHAIKH AHMED SAEED</h4><p class="my-3">Over 10 years of experience as an Imam, a teacher of Quran and Islamic Studies, proficient in Quran recitation and Hadeeth sciences.</p></div><div class="w-full m-5 md:w-[48%] md:m-[1%] lg:w-[31%]"><img${addAttribute(blankProfilePicture.src, "src")} alt="profile picture" class="rounded-full m-1 w-[50%] mx-auto"><h4 class="text-2xl text-center my-5">SHAIKH AHMED SAEED</h4><p class="my-3">Over 10 years of experience as an Imam, a teacher of Quran and Islamic Studies, proficient in Quran recitation and Hadeeth sciences.</p></div></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Imams.astro", void 0);

const $$Astro$3 = createAstro();
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Newsletter;
  return renderTemplate`${maybeRenderHead()}<div class="bg-blue-950 px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="rounded-xl text-gray-100 p-5 md:p-20"><h2 class="text-4xl font-bold mb-5">Sign up for our Newsletter</h2><p class="text-lg my-5">Be among the first to know our updates.</p><form class="email-subscribe-form w-full max-w-lg"><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block uppercase tracking-wide text-xs font-bold mb-2" for="newsletter-email">
Email
</label><input class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="newsletter-email" required></div></div><div><button type="submit" class="email-subscribe bg-emerald-500 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded">
Submit
</button></div><div class="h-[50px] py-5"><div class="alert-div hidden min-w-[20rem] text-center p-3 rounded-xl border-4"></div></div></form></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Newsletter.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<div class="bg-teal-700 px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="rounded-xl text-gray-100 p-5 md:p-20 flex flex-wrap gap-5"><div><h2 class="text-4xl font-bold mb-5">Contact us</h2><address>
6005 103A ST NW,
                    EDMONTON, AB, T6H 2J7
</address><p>
info@oiacentre.com
</p><p>(587)-882-3202</p></div><div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.3800328656503!2d-113.49702972331762!3d53.49740637233341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a019ec68d083eb%3A0x6bdf135f8917097d!2sOmar%20Ibn%20Al-Khattab%20Centre%20(OIAC)!5e0!3m2!1sen!2sca!4v1697516400175!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-xl w-[300px] md:w-[500px] lg:w-[800px] h-[200px]"></iframe></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Contact.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-800 px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container"><div class="rounded-xl text-gray-100 p-1 md:px-20 md:py-5 flex flex-wrap gap-10"><div class="w-full md:w-[45%]"><div class="mb-5"><img class=" w-32 h-28 mx-auto"${addAttribute(oiacLogo.src, "src")} alt="OIAC Logo"></div><h4 class="w-full text-4xl my-5 mx-auto">Omar Ibn Al Khattab Centre</h4><p class="w-full">
Our aim and purpose at the Omar Ibn Al Khattab Centre is to serve the best interests of Islam and the Muslims of Edmonton
</p></div><div class="w-full md:w-[45%] flex flex-wrap gap-12 md:gap-12 justify-between mt-1 md:mt-10"><div class="w-full md:w-[50%] mx-auto md:mx-2"><ul class="text-xl"><li><a href="">Home</a></li><li><a href="">About Us</a></li><li><a href="">Prayer Times</a></li><li><a href="">Programs</a></li><li><a href="">Events</a></li><li><a href="">Contact Us</a></li></ul></div><div class="w-full md:w-[50%] mx-auto md:mx-2"><ul class="text-xl"><li><a href="">Facebook</a></li><li><a href="">Instagram</a></li><li><a href="">Youtube</a></li></ul></div></div></div><div class="text-white p-2 md:px-20 md:py-2"><p><span>&copy;</span> All Rights Reserved</p></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderComponent($$result, "Welcome", $$Welcome, {})}${renderComponent($$result, "LatestPosts", $$LatestPosts, {})}${renderComponent($$result, "Events", $$Events, {})}${renderComponent($$result, "Donate", $$Donate, {})}${renderComponent($$result, "Volunteer", $$Volunteer, {})}${renderComponent($$result, "Imams", $$Imams, {})}${renderComponent($$result, "Newsletter", $$Newsletter, {})}${renderComponent($$result, "Contact", $$Contact, {})}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/pages/index.astro", void 0);

const $$file = "/Users/ibrahim/Documents/Projects/oiac-website/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, getPrayerTimesForCurrentMonth as a, getPrayerTimesForCurrentDay as g, index as i };
