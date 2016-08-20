#!/usr/bin/env node

argv = process.argv[2]
argv2 = process.argv[3]

if (argv === "" && argv2 === "") {
  console.log(0)
} else if(argv === !NaN && argv2 === NaN) {
  console.log(parseInt(argv));
} else {
  console.log(parseInt(argv) + parseInt(argv2));
}
