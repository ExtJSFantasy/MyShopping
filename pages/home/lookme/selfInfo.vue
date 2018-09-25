<template>
	<view style="height: 100%;background-color:rgb(240,239,245)">
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<text @click="onClickChangePhoto">头像</text>
					<image @click="onClickPreImg" style="width: 80upx;height: 80upx;border-radius: 50%;" :src="imgSrc"></image>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate">
					<text>牛客ID</text>
					<text style="color: #777777;margin-right: 20upx;">293704</text>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>昵称</text>
					<text style="color: #777777;margin-right: 20upx;">Running Snail</text>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>学校</text>
					<text style="color: #777777;margin-right: 20upx;">郑州大学</text>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>想去的公司</text>
					<text style="color: #777777;margin-right: 20upx;">BAT</text>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>从事的工作</text>
					<text style="color: #777777;margin-right: 20upx;">移动开发工程师</text>
				</view>
			</view>
		</view>
		<view style="margin-left: 20upx;margin-top: 25upx;">根据你设置的目标公司和职位定制专属智能试卷</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: '../../../static/shuijiao.jpg'
			}
		},
		methods: {
			onClickChangePhoto() {
				const _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						/* uni.previewImage({
							urls: res.tempFilePaths
						}); */
						_this.imgSrc = res.tempFilePaths[0]
					}
				});
			},
			onClickPreImg() {
				const _this = this;

				//#ifdef APP-PLUS
				// 预览图片
				uni.previewImage({
					current: '0',
					urls: [_this.imgSrc]
				});
				//#endif
				//#ifdef MP-WEIXIN
				uni.previewImage({
					urls: [_this.imgSrc]
				});
				//#endif
			}
		}
	}
</script>

<style>
	@import '../../../common/uni.css'
</style>
