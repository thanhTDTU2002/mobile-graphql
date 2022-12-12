module.exports = `
    scalar Date

    type Song {
        id: ID!,
        name: String!,
        singers: [Singer!]!,
        releasedAt: Date!,
        lyrics: String!,
        image: String!
    }

    input FilterOptions {
        page: Int = 1,
        limit: Int = 3,
        sort: SortParams,
        filter: FilterField,
    }

    input SortParams {
        field: SortField,
        order: SortOptions = ASCENDING
    }

    enum SortField {
        name,
        newest
    }

    enum SortOptions {
        ASCENDING,
        DESCENDING
    }

    input FilterField {
        field: [String!]
    }
`;
