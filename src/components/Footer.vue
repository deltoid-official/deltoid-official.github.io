<script setup lang="ts">
import '/src/styles/link-hover.css'
import links from './data'
import moment from 'moment'

const date = moment(Date.now()).format('LL')
</script>

<template>
	<div class="">
		<div class="bg-[#021D3B]">
			<nav class="lg:grid flex-col grid-cols-footer py-[2em] content-center items-center bg-[#001E4B] rounded-bl-[4em] flex md:grid">
				
				<div class="items-center flex font-raleway flex-col">
					<div class="flex flex-col gap-14">

						<div class="font-bold text-2xl flex content-center items-center gap-2 uppercase">
							<img src="../assets/deltoid/deltoid_logo.svg" alt="" width="40">
							Deltoid 
						</div>

						<div class="text-2xl italic">
							Communication made easier 
						</div>

					</div>
				</div>

				<div class="items-center flex flex-col">
					<div class="flex flex-col">

						<div class="flex gap-[1.3em] mt-2">
							<span v-for="x in links" class="w-fit">
								<a :href="x.link" target="_blank">
									<i :class="x.icons + ' transition duration-100 hover:brightness-50 text-[30px]'"></i>
								</a>
							</span>					
						</div>

						<div class="mt-[2em] text-lg mb-4">
							Get in touch <br>
							<div>
								<a href="mailto:deltoidcommissions@gmail.com" class="relative">
									<div class="link-hover"> <i class="fas fa-envelope mr-1"></i> deltoidcommissions@gmail.com </div>
								</a>
							</div>
							<div class="flex gap-2 items-center">
								Bulacan, Philippines <img src="../assets/philippines.svg" alt="" width="30">	
							</div>
						</div>	

					</div>
				</div>

			</nav>			
		</div>
		<div class="bg-[#001E4B]">
			<div class="p-8 lg:px-[10em] bg-[#021D3B] rounded-tr-[4em] flex ">

				<div class="flex flex-col gap-2">
					<div>&copy; Deltoid 2022</div>
					<div class="font-light text-[0.75em]">
						DELTOID aims to help clients deliver messages effectively through multimedia and texts to improve the quality of communication.
					</div>					
				</div>

				<div class="flex text-center w-1/2 justify-center items-center">
					<div class="lg:visible invisible"> Date: <span class="font-bold">{{ date }}</span> </div>
				</div>		

			</div>
		</div>
	</div>
</template>
