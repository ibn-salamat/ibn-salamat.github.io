<template>
	<section>
		<h1>{{ mainText}}</h1>
	</section>
</template>

<script>
	export default{
		name: 'About',
		data(){
			return{
				mainText: 'About'
			}
		}
	}
</script>

<style scoped>
	section{
		background: #f22613;
		padding-top:50px;
	}
	h1{
		color: white;
		font-size:50px;
		text-align:center;
	}
</style>