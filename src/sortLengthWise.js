const file = require("./data/DA.json");

for (let word in file) {
  for (let key in file[word]) {
    console.log(key);
  }
}
