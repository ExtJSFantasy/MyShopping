<template>
	<view class="page-body">
		<view class="page-section page-section-spacing swiper">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
			 :indicator-color="indicatorColor" :circular="isCircular" :indicator-active-color="indicatorActiveColor"
			 :previous-margin="previousMargin" :next-margin="nextMargin">
				<swiper-item  v-for="(swiperItem,index) in swiperData" :key="index" style="width: 100%;-webkit-overflow-scrolling : touch;">
					<view class="swiper-item">
						<image style="width: 100%;"  :src="swiperItem.src"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-swiper',
		data() {
			return {
				title: 'swiper',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				isCircular: true,
				indicatorColor: 'rgba(255, 255, 255, .3)',
				indicatorActiveColor: '#3771ca',
				previousMargin: '30px',					//这里可使用px
				nextMargin: '30px',
				swiperData: [{
						id: 1,
						src: 'http://uploadfiles.nowcoder.net/images/20180103/4107856_1514945323774_9CE0C181492106EBC1EA5503CC8888A9',
						des: '111'
					},
					{
						id: 2,
						src: 'http://uploadfiles.nowcoder.net/images/20171102/826546_1509627160575_F0A3049DCD34D211BBD1075F6DFD449A',
						des: '111'
					},
					{
						id: 3,
						src: 'http://uploadfiles.nowcoder.net/images/20161226/59_1482724515931_D2808D093C902E876A13B99433C0FBC6',
						des: '111'
					},
					{
						id: 4,
						src: 'http://uploadfiles.nowcoder.net/images/20180123/826546_1516692063415_1B225644541D9102ED68A3D7035A029F',
						des: '111'
					}
				]
			}
		},
		onReady: function() {
			this.initData();
		},
		methods: {
			initData() {
				console.log(`初始化`)
			}
		}
	}
</script>

<style>
	@import "../common/uni.css";

	.swiper-item {
		width: 98%;
		margin: auto;
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
