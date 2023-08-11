/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns:{
				fluid: "repeat(auto-fit, minmax(15rem,1fr))",
			},
			colors:{
				mintGreen:"var(--mintGreen)",
				mintGreen1:"var(--mintGreen1)",
				azureWebGreen:"var(--azureWebGreen)",
				mindaro:"var(--mindaro)",
				mindaro1:"var(--mindaro1)",
				mindaro2:"var(--mindaro2)",
				mindaro3:"var(--mindaro3)",
				teaGreen:"var(--tea-green)",
				pakistanGreen:"var(--pakistan-green)",
				lightGreen1:"var(--light-green1)",
				lightGreen2:"var(--light-green2)",
				nonPhotoBlue:"var(--non-photo-blue)",
				azureWeb:"var(--azure-web)",
				verdigris:"var(--verdigris)",
				persianGreen:"var(--persian-green)",
				asparagus:"var(--asparagus)",
				biceBlue:"var(--bice-blue)",
			}
		},
	},
	plugins: [],
}
