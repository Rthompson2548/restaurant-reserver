exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE")
    .then(function () {
      // seed entries for tables
      return knex("tables").insert([
        { table_name: "Bar #1", capacity: 1, status: "free" },
        { table_name: "Bar #2", capacity: 1, status: "free" },
        { table_name: "#1", capacity: 6, status: "free" },
        { table_name: "#2", capacity: 6, status: "free" },
      ]);
    });
};

/**
 * return 400 for the following:
 * 
 * 
 */