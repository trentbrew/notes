const fs = require('fs');

// Read the JSON file
fs.readFile('runnydump.json', 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading file:', err);
		return;
	}

	// Parse the JSON data
	const jsonData = JSON.parse(data);

	let filteredData = jsonData['scheduleItems']
		.map((entry) => ({
			show: entry.show,
			channel: entry.channel,
		}))
		.reduce((acc, entry) => {
			if (!acc.some((e) => e.channel === entry.channel && e.show === entry.show)) {
				acc.push(entry);
			}
			return acc;
		}, []);

	console.log(filteredData);

	const channelMap = {};

	filteredData.forEach((entry) => {
		if (!channelMap[entry.channel]) {
			channelMap[entry.channel] = [];
		}
		channelMap[entry.channel].push(entry.show);
	});

	console.log(channelMap);

	// const flushed = channelMap;

	// console.log(flushed);

	// const setitive = Object.values()

	// console.log(uniqueShows);

	// Write the filtered data to a new JSON file
	// fs.writeFile('wiped.json', JSON.stringify(finalData, null, 2), (err) => {
	// 	if (err) {
	// 		console.error('Error writing file:', err);
	// 		return;
	// 	}
	// 	console.log("Filtered data has been written to 'flushed.json'");
	// });
});
