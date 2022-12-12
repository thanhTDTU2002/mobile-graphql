const { SongType, SongResolvers } = require('./song');
const { SingerType, SingerResolvers } = require('./singer');

const RootQuery = `
    type Query {
        songs(options: FilterOptions): [Song],
        song(id: ID!): Song,
        singers: [Singer]
    }
`;

const typeDefs = `#graphql ${SongType} ${SingerType} ${RootQuery}`;
const resolvers = {
	Query: {
		...SongResolvers,
		...SingerResolvers,
	},
};

module.exports = {
	typeDefs,
	resolvers,
};
