import "reflect-metadata";
import { createConnection } from "typeorm";
import _ from "lodash";

import { models } from "/imports/api/server/model";
import { getTypeOrmConfig } from "/imports/api/server/model/dbMapper";

const baseDir = process.cwd().replace(/\/\.meteor.*$/, "");
const sqlitePath = `${baseDir}/.meteor/local/db.sqlite`;
const entities = _.compact(_.concat([], models));

console.log("---> SQLite:", sqlitePath);
console.log("--->        entities count:", entities.length);
console.log("--->        entities:", entities);

export const dbConnection = Promise.await(
  createConnection({
    entities: entities,
    // ...sqlite,
    // ...oracle,
    ...getTypeOrmConfig(),
  })
);
