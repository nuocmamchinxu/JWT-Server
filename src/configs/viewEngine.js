import express from "express";

/**
 * express App
 *
 * @param {*} app -express app
 */
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));

  // noi cho express biet dung ejs - dnghia cnghe gi de viet html
  app.set("view engine", "ejs");
  app.set("views", "./src/views"); // dinh nghia cac file views
};

export default configViewEngine;
