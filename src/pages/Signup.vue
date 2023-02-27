<template>
	<div class='form'>
		<form onsubmit="return false" class="my-14">
			<div class="text-3xl">Sign Up</div>
			<Input 
				label="name" 
				displayLabel="Name" 
				class="my-6"
				placeholder="Enter your name"
			/>
			<Input 
				type="password"
				label="password" 
				displayLabel="Password" 
				class="my-6"
				placeholder="Enter your password"
			/>
		</form> 
	</div>
</template>


<style lang="scss">
.form {
	display: flex;
	justify-content: center;	
}
form {
	padding: 2rem 1.75rem;
	backdrop-filter: blur(2px);
	border-radius: 20px;
	background-color: #ffffff10;
	box-shadow: 5px 5px 12px #ffffff05;
}
input[type=text] {
	outline: none;
}
</style>
