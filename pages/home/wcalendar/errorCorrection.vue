<template>
	<view class="uni-card" style="margin-top: 0;margin-left: 0;margin-right: 0;">
		<view class="md-clock-textarea-top">
			<textarea style="height: 300upx;" class="md-clock-textarea-des" placeholder="感谢细心的你发现这个错误,为方便我们更快的排查并修正错误,请你详细描述错误."></textarea>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		onNavigationBarButtonTap(e) {
			//console.log(`您点击了${JSON.stringify(e)}`);
			uni.showToast({
				title: `信息收到了`,
				mask: true,
				duration: 1500
			})
		}
	}
</script>

<style>
	@import '../../../common/uni.css';

	.md-clock-textarea-top {
		padding: 0 25upx;
	}

	.md-clock-textarea-des {
		width: 100%;
		height: 200upx;
		padding: 15upx 0 0 0;
		font-size: 32upx;
	}
</style>
