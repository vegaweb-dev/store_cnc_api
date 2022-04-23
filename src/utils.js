export const zeroPadding = num => (num > 9 ? `${num}` : `0${num}`);

export const getCountDownDifferenceFormattedBetween = (to, from) => {
	let diff = to.getTime() - from.getTime();

	if (diff === 0) return '00:00:00';
	diff = Math.floor(diff / 1000);

	return [60, 60, 24]
		.reduce(
			(acc, current) => ({
				time: Math.floor(acc.time / current),
				result: [zeroPadding(acc.time % current), ...acc.result],
			}),
			{
				time: diff,
				result: [],
			}
		)
		.result.join(':');
};
