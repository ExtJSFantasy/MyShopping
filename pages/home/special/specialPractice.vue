<template>
	<view>
		<view class="uni-card md-card-resize">
			<view class="md-center md-over-bg">
				<view class="md-my-work-item-center item-center">
					<view>已练习天数</view>
					<view class="md-my-work-font">5</view>
				</view>
				<view class="md-my-work-item-center item-center">
					<view>已练习题目</view>
					<view class="md-my-work-font">99</view>
				</view>
				<view class="md-my-work-item-center item-center">
					<view>平均分</view>
					<view class="md-my-work-font">41.0</view>
				</view>
			</view>
		</view>
		<view>
			<view class="uni-list">
				<view class="uni-list-cell" style="display: block;" @tap="onTapOpenList">
					<view class="uni-list-cell-navigate">
						<view class="uni-icon uni-icon-arrowdown">编程语言</view>
					</view>
					<view class="uni-list" v-bind:style="[isShow ? 'display:inherit' : 'display: none;']">
						<view class="uni-list-cell" style="display: block;">
							<view class="uni-list-cell-navigate">
								<text>C/C++</text><text style="color:rgb(82, 174, 149)">练习</text>
							</view>
							<view class="uni-list-cell-navigate md-cell-text">共2880题|已练习1题|正确率0%</view>
						</view>
						<view class="uni-list-cell" style="display: block;">
							<view class="uni-list-cell-navigate">
								<text>Java</text><text style="color:rgb(82, 174, 149)">练习</text>
							</view>
							<view class="uni-list-cell-navigate md-cell-text">共947题|已练习20题|正确率30%</view>
						</view>
						<view class="uni-list-cell" style="display: block;">
							<view class="uni-list-cell-navigate">
								<text>Javascript</text><text style="color:rgb(82, 174, 149)">练习</text>
							</view>
							<view class="uni-list-cell-navigate md-cell-text">共190题|已练习0题</view>
						</view>
					</view>
				</view>
				<view class="uni-list-cell" style="display: block;">
					<view class="uni-list-cell-navigate">
						<view class="uni-icon uni-icon-arrowdown">数据结构</view>
					</view>
					<view class="uni-list" v-bind:style="[isShow2 ? 'display:inherit' : 'display: none;']">
						<view class="uni-list-cell" style="display: block;">
							<view class="uni-list-cell-navigate">
								<text>C/C++</text><text style="color:rgb(82, 174, 149)">练习</text>
							</view>
							<view class="uni-list-cell-navigate md-cell-text">共2880题|已练习1题|正确率0%</view>
						</view>
						<view class="uni-list-cell">
							<view class="uni-list-cell-navigate">
								<text>Java</text><text>练习</text>
							</view>
							<view>共947题|已练习20题|正确率30%</view>
						</view>
						<view class="uni-list-cell">
							<view class="uni-list-cell-navigate">
								<text>Javascript</text><text>练习</text>
							</view>
							<view>共190题|已练习0题</view>
						</view>
					</view>
				</view>
				<view class="uni-list-cell" style="display: block;">
					<view class="uni-list-cell-navigate">
						<view class="uni-icon uni-icon-arrowdown">算法</view>
					</view>
					<view class="uni-list" v-bind:style="[isShow3 ? 'display:inherit' : 'display: none;']">
						<view class="uni-list-cell" style="display: block;">
							<view class="uni-list-cell-navigate">
								<text>C/C++</text><text style="color:rgb(82, 174, 149)">练习</text>
							</view>
							<view class="uni-list-cell-navigate md-cell-text">共2880题|已练习1题|正确率0%</view>
						</view>
						<view class="uni-list-cell">
							<view class="uni-list-cell-navigate">
								<text>Java</text><text>练习</text>
							</view>
							<view>共947题|已练习20题|正确率30%</view>
						</view>
						<view class="uni-list-cell">
							<view class="uni-list-cell-navigate">
								<text>Javascript</text><text>练习</text>
							</view>
							<view>共190题|已练习0题</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pSets: [],
				isShow: false,
				isShow2: false,
				isShow3: false
			}
		},
		methods: {
			onTapOpenList() {
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style>
	@import '../../../common/uni.css';
	@import '../../../common/icon.css';

	.uni-list-cell:after {
		background-color: transparent;
	}

	.uni-icon-arrowdown:before {
		color: rgb(82, 174, 149);
	}

	.md-card-resize {
		padding-top: 0 !important;
		padding-right: 0 !important;
		margin: 0;
	}

	.md-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.md-my-work-item-center {
		flex: 1;
		color: #F8F8F8;
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
		color: rgb(82, 174, 149);
		/* color: #929292; */
	}

	.md-over-bg {
		height: 150upx;
		background-color: rgb(61, 68, 76);
	}

	.md-cell-text {
		color: rgb(169, 169, 169);
	}
</style>
