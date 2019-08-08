import { Promise } from "meteor/promise";
import { Random } from "meteor/random";
import _ from "lodash";
import { ApolloError } from "apollo-server-express";

import { repos } from "/imports/startup/server/db-connection";

const resolvers = {
    Query: {
        hello: (obj, args, context, info) => {
            return "Hello world";
        }
    }
}

export default resolvers;