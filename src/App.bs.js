// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReactLeaflet = require("react-leaflet");
var Prelude$ReactHooksTemplate = require("./Prelude.bs.js");
var AppStyles$ReactHooksTemplate = require("./AppStyles.bs.js");

function App(Props) {
  return React.createElement("div", {
              className: AppStyles$ReactHooksTemplate.app
            }, React.createElement("div", {
                  className: AppStyles$ReactHooksTemplate.events
                }, Prelude$ReactHooksTemplate.s("Hello")), React.createElement(ReactLeaflet.Map, {
                  className: AppStyles$ReactHooksTemplate.map,
                  center: /* tuple */[
                    41.851269,
                    -87.657676
                  ],
                  zoom: 13,
                  children: React.createElement(ReactLeaflet.TileLayer, {
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      })
                }));
}

var Css = 0;

var make = App;

exports.Css = Css;
exports.make = make;
/* react Not a pure module */
