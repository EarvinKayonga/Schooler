"use strict";


let bears = ["polar", "grizzly", "slovenian"]

let parcoursBears = function* () {
    let i = 0;
    yield bears[i];
    while (i < bears.length){
      i++;
      yield bears[i];
    }
    return 'done';
}();


let taskhandler = function (task){
  let i = 0;
  while (i < bears.length) {
    task();
    i++;
  }
  return parcoursBears.next(); // WEIRDHACK
}(task);

function task() {
  console.log(parcoursBears.next().value);
}
