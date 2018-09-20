<template>
	<view>
		<view>
			<myswiper></myswiper>
		</view>
		<view class="uni-card md-center md-card md-card-resize">
			<view class="md-center md-my-work" @tap="onTapGoMyClock">
				<view class="item-center">
					<view class="md-my-work-date" v-text="nowDateWeek"></view>
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
				<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grids" :key="index" :class="index % 3 === 2 ? 'no-border-right' : ''" @tap="onTapGoItemModule(item,index)">
					<image class="uni-grid-9-image md-grid-img" :src="item.src"></image>
					<text class="uni-grid-9-text md-grid-text" v-text="item.des"></text>
				</view>
			</view>
		</view>
		<view class="uni-card md-written-calendar-content md-card-resize">
			<view class="uni-icon uni-icon-compose md-written-calendar">笔试日历</view>
			<view class="md-written-calendar-des" @click="onClickGoWriteLists">最近一场:&nbsp;&nbsp;<text v-text="startDate"></text> 虎牙直播</view>
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
	import myswiper from '../../components/swiper.vue';
	import {formatDateYMD,formatDateYMDWeek,formatDateYMDHM} from '../../common/util.js';
	export default {
		data() {
			return {
				grids: [{
					id: 1,
					src: "../../static/time-circle.png",
					des: '专项练习',
					url:'special/specialPractice'
				}, {
					id: 2,
					src: "../../static/file-text.png",
					des: '公司套题',
					url:'/pages/home/special/specialPractice'
				}, {
					id: 3,
					src: "../../static/edit-square.png",
					des: '错题练习',
					url:'/pages/home/special/specialPractice'
				}, {
					id: 4,
					src: "../../static/filesearch.png",
					des: '大题查看',
					url:'/pages/home/special/specialPractice'
				}, {
					id: 5,
					src: "../../static/star.png",
					des: '精华专题',
					url:'/pages/home/special/specialPractice'
				},{
					id: 6,
					src: "../../static/star.png",
					des: '地图测试',
					url:'map/mapTest'
				} ],
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
				],
				nowDateWeek:formatDateYMDWeek(new Date()),
				startDate: formatDateYMDHM(new Date())
			}
		},
		components: {
			myswiper
		},
		onLoad:function(option){
		},
		methods:{
			// 跳转我的打卡界面
			onTapGoMyClock(){
				//let path = e.url ? e.url : e;
				//let url = ~path.indexOf('platform') ? path : '/pages/template/' + path + '/' + path;
				let url = "/pages/home/clock/myClock";
				uni.navigateTo({
					url: url
				})
			},
			/**
			 * 跳转各个模块
			 */
			onTapGoItemModule(module,index){
				const path = '/pages/home/';
				let url = path + module.url
				uni.navigateTo({
					url: url
				})
			},
			onClickGoWriteLists(){
				const path = '/pages/home/';
				let url = path + 'wcalendar/wcalendar'
				uni.navigateTo({
					url: url
				})
			}
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

	.md-card-resize {
		padding-left: 0 !important;
		margin-left: 0 !important;
		padding-right: 0 !important;
		margin-right: 0 !important;
	}

	.md-grid-img {
		height: 70upx !important;
		width: 60upx !important;
	}

	.md-grid-text {
		padding-top: 30upx;
	}

	.md-my-work {
		flex: 2;
		height: 100%;
		background-color: rgb(82, 174, 149);
		border-top-right-radius: 80upx;
		border-bottom-right-radius: 80upx;
	}

	.md-my-work-clock {
		font-size: 36upx;
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
		border-left: solid 3px rgb(82, 174, 149);
	}

	.md-written-calendar-des {
		flex: 2;
		font-size: 28upx;
		color: #929292;
	}
	/* 用于适应大屏幕pad */
	@media screen and (max-width:400px) {
		.md-my-work-date {
			font-size: 28upx;
			color: #F8F8F8;
		}
	}
</style>
