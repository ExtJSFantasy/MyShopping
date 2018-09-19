<template>
	<view class="page-body">
		<view class="page-section page-section-spacing swiper">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item color1">111</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item color2">222</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item color3">333</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-swiper',
		data(){
			return {
				title: 'swiper',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		}
	}
</script>

<style>
	@import "../common/uni.css";

	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}

	.page-section-title {
		padding: 0;
		margin-top: 60upx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 0;
		color: #353535;
		font-size: 30upx;
	}
</style>
