<template>
	<view>
		<view>
			<myswiper></myswiper>
		</view>
		<view class="uni-card md-center md-card md-card-resize-left">
			<view class="md-center md-my-work">
				<view class="item-center">
					<view class="md-my-work-date">2018-09-18 周二</view>
					<view class="md-my-work-clock">打卡</view>
				</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>0道</view>
				<view class="md-my-work-font">今天刷题</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>0节</view>
				<view class="md-my-work-font">今天学习</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>10天</view>
				<view class="md-my-work-font">共打卡</view>
			</view>
		</view>
		<view class="page">
			<view class="uni-grid-9">
				<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grids" :key="index" :class="index % 3 === 2 ? 'no-border-right' : ''">
					<image class="uni-grid-9-image" :src="item"></image>
					<text class="uni-grid-9-text">grid</text>
				</view>
			</view>
		</view>
		<view class="uni-card md-written-calendar-content md-card-resize-left">
			<view class="uni-icon uni-icon-compose md-written-calendar">笔试日历</view>
			<view class="md-written-calendar-des">最近一场:&nbsp;&nbsp;2018-09-19 03:00 虎牙直播</view>
		</view>
		<!-- <view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.value}}
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import myswiper from '../../components/swiper.vue'
	export default {
		data() {
			return {
				grids: ["../../static/c1.png", "../../static/c2.png", "../../static/c3.png",
					"../../static/c4.png", "../../static/c5.png"
				],
				list: [{
						id: 1,
						value: '111'
					},
					{
						id: 2,
						value: '222'
					},
					{
						id: 3,
						value: '333'
					},
					{
						id: 4,
						value: '444'
					},
					{
						id: 5,
						value: '555'
					}
				]
			}
		},
		components: {
			myswiper
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/icon.css";

	.index {
		padding-bottom: 1upx;
	}

	.md-index {
		width: 100%;
	}

	.md-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.md-card-resize-left {
		padding-left: 0 !important;
		margin-left: 0 !important;
	}

	.md-my-work {
		flex: 2;
		height: 100%;
		background-color: #1AAD19;
		border-top-right-radius: 80upx;
		border-bottom-right-radius: 80upx;
	}

	.md-my-work-clock {
		font-size: 36upx;
		color: #F8F8F8;
	}

	.md-my-work-date {
		font-size: 24upx;
		color: #F8F8F8;
	}

	.item-center {
		text-align: center;
	}

	.md-my-work-item-center {
		flex: 1;
	}

	.md-my-work-font {
		font-size: 24upx;
		color: #929292;
	}

	.md-card {
		height: 120upx;
	}

	.md-written-calendar-content {
		display: flex;
		height: 80upx;
		align-items: center;
	}

	.md-written-calendar:before {
		font-size: 40upx;
	}

	.md-written-calendar {
		flex: 1;
		font-size: 30upx;
		border-left: solid 3px #1AAD19;
	}

	.md-written-calendar-des {
		flex: 2;
		font-size: 28upx;
		color: #929292;
	}
</style>
