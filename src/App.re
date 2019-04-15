open Prelude;
module Css = AppStyles;

[@react.component]
let make = () =>
  <div className=Css.app>
    <div className=Css.events> "Hello"->s </div>
    Leaflet.(
      <Map_ center=(41.851269, (-87.657676)) zoom=13 className=Css.map>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map_>
    )
  </div>;
