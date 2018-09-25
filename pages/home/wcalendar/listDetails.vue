<template>
	<view style="height: 100%;background-color:rgb(240,239,245)">
		<view class="uni-card" style="margin: 0 0 0  0;background-color:rgb(240,239,245)">
			<view style="height: 150upx;display: flex;align-items: center;">
				<image src="../../../static/shuijiao.jpg" style="width: 100upx;height: 100upx;border-radius: 50%;margin-left: 15upx;margin-right: 15upx;"></image><text>牛客1772684号&nbsp;&nbsp;&nbsp;分享</text>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="uni-icon uni-icon-compose" style="font-size: 36upx;">寒武纪科技</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="uni-icon uni-icon-compose" style="font-size: 36upx;">2018-09-21 10:30</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<view class="uni-icon uni-icon-compose" style="font-size: 36upx;">16人参与</view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text class="uni-icon uni-icon-compose" style="font-size: 36upx;">设置提醒</text>
					<text class="uni-badge" style="margin-right: 20upx;background-color: transparent;font-size: 36upx;">不提醒</text>
				</view>
			</view>
		</view>
		<view style="display: flex;width: 100%;height: 50px;align-items: center;position: fixed;z-index: 999;bottom: 0;background-color: #F8F8F8;">
			<!-- <button style="flex: 1;margin: 0;border-top-right-radius: 0 !important;">我参与了</button>
			<button style="flex: 1;margin: 0;">日程纠错</button> -->
			<text :style="[isState ? 'color:rgb(82, 174, 149)' :'color:#000000']" style="flex: 1;text-align: center;border-right: solid 2upx #777777;"
			 @click="onClickChangeState" v-text="!isState ? '我参与了' : '已参加'"></text>
			<text style="flex: 1;text-align: center;" @click="onClickGoError">日程纠错</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				details: {
					id: 1,
					icon: '',
					company: '',
					startTime: '',
					joins: '',
					settingReminders: ''
				},
				isState: false
			}
		},
		onLoad: function(option) {
			uni.showToast({
				title: `groupId:${option.groupId},id:${option.listId}`,
				mask: true,
				duration: 1500
			})
		},
		methods: {
			onClickChangeState() {
				
				this.isState = !this.isState;
				uni.showToast({
					title: this.isState ? `已参加` : `已取消`,
					mask: true,
					duration: 1500
				})
			},
			onClickGoError(){
				uni.navigateTo({
					url:`/pages/home/wcalendar/errorCorrection`
				})
			}
		}
	}
</script>

<style>
	@import '../../../common/uni.css';
	@import '../../../common/icon.css';

	.uni-icon-compose:before {
		font-size: 40upx;
	}
</style>
