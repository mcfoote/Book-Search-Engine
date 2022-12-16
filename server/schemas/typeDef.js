const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        me: User
    }

    type Mutation {
        login():
        addUser():
        saveBook():
        removeBook(bookId): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId: String
        authours: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;