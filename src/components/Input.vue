<script setup lang="ts">
type InputType = "text" | "file" | "email" | "password" | "tel" | "number";

const { displayLabel, label, type = "text", placeholder = "" } = defineProps<{
	displayLabel: string,
	label: string, 
	type?: InputType,
	placeholder?: string
}>();
</script>
<template>
	<div class="flex-col flex gap-2">
		<label :for="label" class="text-md">{{ displayLabel }}</label>
		<textarea 
			:name="label" 
			cols="30" 
			rows="10" 
			v-if="type === 'textarea'"
			class="py-[6px] px-[9px] outline-none rounded-md"
			:placeholder="placeholder"
		></textarea>
		<input 
			:type="type" 
			:name="label" 
			:placeholder="placeholder"
			v-if="type !== 'textarea'"
			class="py-[6px] px-[9px] outline-none rounded-md"
		>
	</div>
</template>

<style lang="scss" scoped>
</style>