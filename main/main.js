module.exports = function main(inputs) {
    // write your code here...
    /**
	 * @pram distance: double, 行驶的距离 公里
	 * @pram time: int, 等待的时间 分钟
	 * @return: int, 需要支付的费用 元
	 * 总费用 = 里程费用 + 等待费用
	 * 里程费用：小于两公里 6元
	 * 两公里以上八公里以下 6 + 0.8*distance-2）
	 * 八公里以上 6 + 6*0.8 + （distance-8）* 1.2
	 */
	let distance = inputs.distance;
	let time = inputs.parkTime;
	if ( ( isNaN(distance) || isNaN(time)) === true) return -2;

	let sum_price = time*0.25;

	if (distance  <= 0) return -1;
	else if (distance <= 2 && distance > 0) sum_price += 6;
	else if (distance > 2 && distance < 8) sum_price += 6 + 0.8 * (distance - 2);
	else sum_price += 6 + 6 * 0.8 + (distance - 8) * 1.2; 

	return Math.round(sum_price);
};
