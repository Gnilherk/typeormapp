import _ from "lodash";
import { Meteor } from "meteor/meteor";

const db = _.get(Meteor, "settings.db");

export const getDescriptionType = () => {
  if (!db) {
    throw new Meteor.Error("noDbConfigured", "You are missing the config of the database in settings.json");
  }
  if (!db.type) {
    throw new Meteor.Error(
      "noDbTypeConfigured",
      "You are missing a db-type in the config of the database in settings.json"
    );
  }
  return db.type === "sqlite" ? "text" : { length: 2000, type: "nvarchar2" };
};

export const getTypeOrmConfig = () => {
  if (!db) {
    throw new Meteor.Error("noDbConfigured", "You are missing the config of the database in settings.json");
  }
  if (!db.type) {
    throw new Meteor.Error(
      "noDbTypeConfigured",
      "You are missing a db-type in the config of the database in settings.json"
    );
  }
  if (db.type === "sqlite") {
    const baseDir = process.cwd().replace(/\/\.meteor.*$/, "");
    const sqlitePath = `${baseDir}/.meteor/local/db.sqlite`;
    db.database = sqlitePath;
  }

  return db;
};
