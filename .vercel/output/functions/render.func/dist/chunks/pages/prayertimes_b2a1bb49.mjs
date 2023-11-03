/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7f2237b0.mjs';
import 'html-escaper';
import 'clsx';
import { g as getPrayerTimesForCurrentDay, a as getPrayerTimesForCurrentMonth, $ as $$Header } from './index_35f7ea1f.mjs';
import '@apollo/client';

const $$Astro = createAstro();
const $$Prayertimes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prayertimes;
  const prayerTimesForCurrentDay = await getPrayerTimesForCurrentDay();
  await getPrayerTimesForCurrentMonth();
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead()}<div class="px-4 p-2 md:px-8 md:py-2 mx-auto"><div class="container mt-5"><div class="bg-emerald-300 border-emerald-400 rounded-xl text-emerald-700 p-5"><h4 class="text-2xl text-emerald-800">Prayer Times</h4><div class="bg-emerald-100 rounded-lg my-3"><div class="grid grid-cols-3 gap-1 border-b border-emerald-500 font-bold text-2xl mt-2 py-5 text-center"><h4 class="text-left pl-5">Salaat</h4><h4>Athan</h4><h4>Iqama</h4></div><div class="grid grid-cols-3 gap-1 border-b border-emerald-300 text-xl my-2 text-center"><label class="font-bold text-left pl-5">Fajr</label><label class="text-emerald-600">${prayerTimesForCurrentDay.fajrBegins}</label><label class="text-emerald-800">${prayerTimesForCurrentDay.fajrJamah}</label></div><div class="grid grid-cols-3 gap-1 border-b border-emerald-300 text-xl my-2 text-center"><label class="font-bold text-left pl-5">Sunrise</label><label class="text-emerald-600">${prayerTimesForCurrentDay.sunrise}</label><label class="text-emerald-800"></label></div><div class="grid grid-cols-3 gap-1 border-b border-emerald-300 text-xl my-2 text-center"><label class="font-bold text-left pl-5">Dhuhr</label><label class="text-emerald-600">${prayerTimesForCurrentDay.zuhrBegins}</label><label class="text-emerald-800">${prayerTimesForCurrentDay.zuhrJamah}</label></div><div class="grid grid-cols-3 gap-1 border-b border-emerald-300 text-xl my-2 text-center"><label class="font-bold text-left pl-5">Asr</label><label class="text-emerald-600">${prayerTimesForCurrentDay.asrBegins}</label><label class="text-emerald-800">${prayerTimesForCurrentDay.asrJamah}</label></div><div class="grid grid-cols-3 gap-1 border-b border-emerald-300 text-xl my-2 text-center"><label class="font-bold text-left pl-5">Maghrib</label><label class="text-emerald-600">${prayerTimesForCurrentDay.maghribBegins}</label><label class="text-emerald-800">${prayerTimesForCurrentDay.maghribJamah}</label></div><div class="grid grid-cols-3 gap-1 border-b border-emerald-300 text-xl my-2 text-center"><label class="font-bold text-left pl-5">Isha</label><label class="text-emerald-600">${prayerTimesForCurrentDay.ishaBegins}</label><label class="text-emerald-800">${prayerTimesForCurrentDay.ishaJamah}</label></div><div class="grid grid-cols-2 gap-1 border-b border-emerald-500 font-bold text-2xl my-2 text-center"><h4 class="font-bold text-left pl-5">Jummah 1</h4><h4>02:00 PM</h4></div><div class="grid grid-cols-2 gap-1 border-b border-emerald-500 font-bold text-2xl my-2 text-center"><h4 class="font-bold text-left pl-5">Jummah 2</h4><h4>03:00 PM</h4></div></div></div></div></div>`;
}, "/Users/ibrahim/Documents/Projects/oiac-website/src/pages/prayertimes.astro", void 0);

const $$file = "/Users/ibrahim/Documents/Projects/oiac-website/src/pages/prayertimes.astro";
const $$url = "/prayertimes";

export { $$Prayertimes as default, $$file as file, $$url as url };
