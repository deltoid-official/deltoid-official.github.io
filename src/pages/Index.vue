<script setup>
const sendMessage = () => {
	document.location.href = "mailto:deltoidcommissions@gmail.com";
}
</script>

<template>
	<div>
		<div class="flex items-center flex-col gap-1 my-[4em] mx-9 lg:mx-0">
			<img src="../assets/deltoid/deltoid_document_logo.webp" alt="" width="330" class="rounded-full border-solid border-4 border-white">
			<div class="font-bold text-6xl mt-8 uppercase">Deltoid</div>
			<div class="font-light text-2xl italic text-center">Communication made easier</div>
			<div class="text-2xl uppercase font-bold mt-4 text-center">Multimedia and Writing Services</div>
			<div class="mt-6 flex flex-col gap-3 items-center">
				<div class="text-lg">Feel free to ask us questions.</div>
				<button @click="sendMessage" 
					class="bg-[#1AA3FF] shadow-2xl py-2 px-6 rounded-3xl 
					active:brightness-50 active:translate-y-1 transition-brightness 
					flex items-center gap-2 justify-center">
					<i class="fas fa-paper-plane"></i> Send Message
				</button>				
			</div>
		</div>
		<Footer class="footer" />
	</div>
</template>

<style>
.transition-brightness {
	transition: filter 200ms;
	filter: brightness(1.0);
}
.transition-brightness:hover {
	filter: brightness(0.75);
}
</style>