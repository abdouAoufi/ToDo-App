
let id = [{"name" : "Abdou" , "dd" : 1},
{"DNA" : 5}]
let id2 = [{"name" : "af" , "dd" : 1},
{"DNA" : 5}]
const allNotes = [id ,id2];

console.log(allNotes);

const index = allNotes.indexOf(id);
        if (index > -1) {
          allNotes.splice(index, 1);
        }

// array = [2, 9]
console.log(allNotes); 