import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type TeamMember {
        id: ID
        firstName: String
        lastName: String
        position: String
        phone: String
        email: String
        days: [Day]
    }

    type Day {
        day: String
        available: Boolean
    }

    type Schedule {
        id: ID
        week: String
        days: [Day]
    }

    type Query {
        getOneTeamMember(id: ID!): TeamMember
        getAllTeamMembers: [TeamMember]
        getOneSchedule(id: ID!): Schedule
        getAllSchedules: [Schedule]
    }

    input TeamMemberInput {
        id: ID
        firstName: String
        lastName: String
        position: String
        phone: String
        email: String
        days: [DayInput]
    }

    input DayInput {
        day: String
        available: Boolean
    }

    input ScheduleInput {
        id: ID
        week: String
        days: [DayInput]
    }

    type Mutation {
        createTeamMember(input: TeamMemberInput): TeamMember
        updateTeamMember(input: TeamMemberInput, day: DayInput): TeamMember
        deleteTeamMember(id: ID!): String
        createSchedule(input: ScheduleInput): Schedule
        updateSchedule(input: ScheduleInput, day: DayInput): Schedule
        updateTeamMembers(input: [TeamMemberInput]): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
