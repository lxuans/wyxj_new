<template>
	<main>

		<footer class="footer">
			<nav class="mui-bar mui-bar-tab">

				<router-link class="mui-tab-item mui-active" to="/index">
					<span class="mui-tab-label">私家云</span>
				</router-link>

				<router-link class="mui-tab-item" to="/share">
					<span class="mui-tab-label">共享</span>
				</router-link>

				<router-link class="mui-tab-item" to="/my">
					<span class="mui-tab-label">我的</span>
				</router-link>

			</nav>
			<!-- <div></div> -->
		</footer>

	</main>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
	background-color: #fff; 
	width: 750px;
	height: 97px;
	position: fixed;
	.mui-bar-tab {
		height: 97px;
		width: 750px;
		bottom: 0;
		a:hover {
			text-decoration: none;
			
		}
		span {
				font-size: 20px;
			}
	}
}
</style>


