"use strict";
/** Database setup for bankly. */
const { Client } = require("pg");

const db = new Client({
  host:'localhost',
  user:'livin',
  port:'5432',
  password:'rootUser',
  database:'bankly'
});

db.connect();

module.exports = db;