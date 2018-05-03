var orm = require("../config/orm.js");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "Holy Burger");

orm.updateOne(3);