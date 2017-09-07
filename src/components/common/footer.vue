<template>
	<footer class="footer">
		<div class="navBar">

			<router-link to="/index">
				<span class="navItem index active">私家云</span>
			</router-link>

			<router-link to="/share">
				<span class="navItem share">共享</span>
			</router-link>

			<router-link to="/my">
				<span class="navItem my ">我的</span>
			</router-link>

		</div>
		
	</footer>
</template>

<script>
export default {

	methods: {
		// 点击导航项切换样式
		addClass: function() {
			let navItems = document.querySelectorAll(".navItem");
			for (var i = 0; i < navItems.length; i++) {
				navItems[i].onclick = function() {
					document.querySelector('.active').classList.remove("active");
					this.classList.add("active");
				}
			};
		},

		routerClass: function(){
			if (location.hash == "#/running") {
				document.querySelector('.active').classList.remove("active");
				document.querySelector('.index').classList.add("active");
			}else if (location.hash == "#/share") {
				document.querySelector('.active').classList.remove("active");
				document.querySelector('.share').classList.add("active");
			}else if (location.hash == "#/my") {
				document.querySelector('.active').classList.remove("active");
				document.querySelector('.my').classList.add("active");
			}
		}
	},
	mounted() {
		this.addClass();
		this.routerClass();
	},
}
</script>

<style lang="less" scoped>
.footer {
	background-color: #fff;
	width: 750px;
	height: 96px;
	border-top: 1px solid #ccc;
	position: fixed;
	top: 1236px;
	.navBar {
		height: 96px;
		width: 750px;
		bottom: 0;
		padding: 0;
		margin: 0;
		a:hover {
			text-decoration: none;
		}
		.navItem {
			font-size: 20px;
			display: inline-block;
			width: 32.8%;
			height: 96px;
			text-align: center;
			line-height: 96px;
			color: #9b9b9b;
		}
		.active {
			color: #66a7ff ;
		}
	}
	
}
</style>


