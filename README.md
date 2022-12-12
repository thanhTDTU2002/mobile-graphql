# mobile-graphql

delete(id: ID!) {
    resolver: () => {
        delete in db
        return null
    }
}

update (id: ID!) {
    resolver: () => {
        findById(id)
        update
        return this
    }
}

create (id: ID!) {
    create
    return this
}
