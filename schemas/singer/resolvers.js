const { singers, songs } = require('../../mock-data');

const getSongs = (singerId) =>
	songs.filter((song) => {
		return song.singers.includes(singerId);
	});

const Query = {
	singers: (_, args) => {
		const { page, limit } = args.options;
		const startIdx = limit * (page - 1);

		const listSingers = singers.slice(startIdx, startIdx + limit);

		return listSingers.map((singer) => ({
			...singer,
			songs: getSongs(singer.id),
		}));
	},

	singer: (_, args) => {
		const id = args.id;
		const singer = singers.find((singer) => singer.id == id);

		return { ...singer, songs: getSongs(singer.id) };
	},
};

const Mutation = {};

module.exports = {
	Query,
	Mutation,
};
