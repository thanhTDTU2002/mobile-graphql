module.exports = `
    type Singer {
        id: ID!,
        name: String!,
        avatar: String!,
        songs: [Song!]
    }

    input FilterOptions {
        page: Int = 1,
        limit: Int = 3,
    }
`;
