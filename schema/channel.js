export default `
  type Channel {
    id: Int!
    name: Int!
    public: Boolean!
    messages: [Message!]!
    team: Team!
    users: [User!]!
  }

  type Mutation {
    createChannel(name: String!, public: Boolean=false, teamId: Int!): Boolean!
  }
`;
