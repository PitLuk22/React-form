export const addDots = (fileName, maxNum = 22) => {
	const length = fileName.length;
	if (length >= maxNum) {
		const type = fileName.split('.').slice(-1, length - 1)
		return fileName.slice(0, maxNum) + '... .' + type
	}
	return fileName
}