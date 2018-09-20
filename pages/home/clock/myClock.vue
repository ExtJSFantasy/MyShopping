<template>
	<view>
		<view class="uni-card md-card-resize">
			<view class="md-clock-des">坚持每天记录自己的进步历程吧！一天最多只能打一次卡哦！</view>
			<view class="md-clock-details" @tap="onTapGoLookClockDetails">我的打卡记录&gt;&gt;</view>
		</view>
		<view class="uni-card md-card-resize">
			<view class="md-clock-nowtime">{{nowDate}}</view>
			<view class="md-clock-tips">我在牛客打卡<text class="md-standard-color">10</text>天，完成了:</view>
			<view class="md-center md-over-bg">
				<view class="md-my-work-item-center item-center">
					<view>刷题</view>
					<view class="md-my-work-font">0道</view>
				</view>
				<view class="md-my-work-item-center item-center">
					<view>提交代码</view>
					<view class="md-my-work-font">0次</view>
				</view>
				<view class="md-my-work-item-center item-center">
					<view>学习课程</view>
					<view class="md-my-work-font">0节</view>
				</view>
			</view>
			<view class="md-clock-textarea-top">
				<textarea class="md-clock-textarea-des" placeholder="简单说说你的想法或感受吧,最多140个字哦"></textarea>
			</view>
		</view>
		<view class="md-clock-out"><button class="md-clock-inner-btn" @click="onClickGoClock">去打卡</button></view>
		<view class="md-clock-out"><button @click="onClickStudyAgain">再学一会</button></view>
	</view>
</template>

<script>
	import {formatDateYMD} from '../../../common/util.js';
	//let formatDateYMD = require('../../../common/util.js').formatDateYMD;
	export default {
		data() {
			return {
				nowDate: formatDateYMD(new Date())
			}
		},
		methods:{
			onTapGoLookClockDetails(){
				uni.showToast({
					title:'我的打卡记录',
					mask:true,
					duration:1500
				})
			},
			onClickGoClock(){
				uni.showToast({
					title:'去打卡',
					mask:true,
					duration:1500
				})
			},
			onClickStudyAgain(){
				uni.showToast({
					title:'再学一会',
					mask:true,
					duration:1500
				})
			}
		}
	}
</script>

<style>
	@import '../../../common/uni.css';

	.md-clock-des {
		padding: 20upx 20upx 0 20upx;
		/* 控制字体间距 */
		letter-spacing: '5upx';
	}

	.md-clock-details {
		padding-bottom: 15upx;
		margin-right: 15upx;
		color: rgb(82, 174, 149);
		text-align: right;
	}

	.md-clock-nowtime {
		padding-top: 15upx;
		color: rgb(82, 174, 149);
		text-align: center;
	}

	.md-clock-tips {
		padding-bottom: 15upx;
		color: #929292;
		text-align: center;
	}

	.md-standard-color {
		color: rgb(82, 174, 149);
	}

	.md-clock-textarea-top {
		padding: 0 25upx;
	}

	.md-clock-textarea-des {
		width: 100%;
		height: 200upx;
		padding: 15upx 0 0 0;
		font-size: 32upx;
	}

	.md-clock-out {
		width: 90%;
		margin: auto;
		border-radius: 5upx;
	}

	.md-clock-inner-btn {
		color: #F8F8F8;
		background-color: rgb(82, 174, 149);
	}

	.md-card-resize {
		padding-top: 0 !important;
		padding-left: 0 !important;
		margin-top: 0 !important;
		margin-left: 0 !important;
		padding-right: 0 !important;
		margin-right: 0 !important;
	}

	.md-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.md-my-work-item-center {
		flex: 1;
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

	.md-my-work-font {
		font-size: 32upx;
		/* color: #929292; */
	}

	.md-over-bg {
		height: 120upx;
		background-color: rgba(225, 240, 237, 1);
	}
</style>
