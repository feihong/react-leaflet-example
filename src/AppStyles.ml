open Emotion

let flex1 = (`some (1., 1., `zero))  (* same as flex: 1 *)

let app = [%css [
  display `flex;
  height (`vh 100.);
]]

let events = [%css [
  width (`px 200)
]]

let map = [%css [
  flex flex1;
]]
