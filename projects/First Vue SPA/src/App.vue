<template>
<div id="app"> 		
		<div class="page-title">
			<h1>SPA</h1>
			<p>Single Page Application</p>
		</div>
	
	<header>
		<router-link  linkActiveClass="active" to="/">Main</router-link>
		<router-link to="Contacts">Contacts</router-link>
		<router-link to="About">About</router-link>
	</header>
	
	<div class="content">
		<transition name="fade" mode="out-in">
		<router-view></router-view>
		</transition>
	</div>

	<my-footer></my-footer>
	
</div>
</template>
<script>

import Footer from './views/Footer.vue'

export default {
  data () {
    return {
    }
  },
  components: {
  	myFooter: Footer
  }
}
</script>
<style lang="scss">
section{
	height: 80vh;
}

html,body{
	box-sizing:border-box;
	font-family: 'Quicksand', sans-serif;
}
*{
	margin: 0;
	padding:0;
	border: none;
	outline: none;
}
a{
	color:inherit;
	text-decoration:none;
}
//
header{
	padding:30px 0;
	display:flex;
	justify-content:center;
	background: #2e3131;
	border-top:5px solid #2ecc71;

	a{
		padding : 10px 24px;
		background:#2ecc71;
		font-weight:bold;
		margin: 0 2px;
	}
}
.page-title{
	text-align:center;
	padding: 30px 0;

	h1{
		font-family: 'Kanit', sans-serif;
		line-height:65px;	
		font-size:70px;
		letter-spacing: 7px;
		color:#2ecc71;
		text-shadow: 1px 1px 1px #00000052;
		
	}

	p{
		color:#000000b3;

	}
}
.active{
	color:white;;
	background:black;

}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
