const { songs, singers } = require('../../mock-data');

const getSingers = function () {
	return this.map((singerId) =>
		singers.find((singer) => singerId === singer.id)
	);
};

const compareResult = (obj1, obj2, order = 'ASCENDING') => {
	const sortOrder = order === 'ASCENDING' ? 1 : -1;
	let compareResult = 0;

	if (obj1 < obj2) compareResult = -1;
	else if (obj1 > obj2) compareResult = 1;

	return compareResult * sortOrder;
};

const sortSongs = (criteria, order) => {
	if (criteria == 'name') {
		return (song1, song2) => compareResult(song1.name, song2.name, order);
	}

	return (song1, song2) =>
		compareResult(
			new Date(song1.releasedAt).getTime(),
			new Date(song2.releasedAt).getTime(),
			order
		);
};

module.exports = {
	songs: (_, args) => {
		const { page, limit, sort, filter } = args.options;
		const startIdx = limit * (page - 1);

		const listSongs = songs.slice(startIdx, startIdx + limit);
		if (sort) {
			listSongs.sort(sortSongs(sort.field, sort.order));
		}

		return listSongs.map((song) => ({
			...song,
			singers: getSingers.apply(song.singers),
		}));
	},

	song: (_, args) => {
		const id = args.id;
		const song = songs.find((song) => song.id == id);

		return { ...song, singers: getSingers.apply(song.singers) };
	},
};
