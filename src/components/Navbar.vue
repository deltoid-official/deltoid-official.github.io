<template>
	<div>
		<nav class="flex justify-around bg-[#001E4B] py-4 items-center">
			<div class="justify-center flex font-raleway font-bold text-2xl uppercase">
				<router-link to="/" class="flex items-center content-center lg:ml-0 ml-4">
					<img src="../assets/deltoid/deltoid_logo.svg" alt="" width="40">
					<div class=ml-3>Deltoid</div>
				</router-link>
			</div>
			<div class="justify-center flex gap-6">
				<router-link to="/about" class="relative">
					<div class="link-hover">About</div>
				</router-link>
				<router-link to="/contact" class="relative">
					<div class="link-hover">Contact</div>
				</router-link>
			</div>
			<div class="justify-center flex gap-6">
				<router-link to="/signup" class="relative">
					<div class="link-hover">Signup</div>
				</router-link>
				<router-link to="/" class="relative">
					<div class="link-hover">Login</div>
				</router-link>
			</div>
		</nav>
	</div>
</template>

