/**
 * Created by deepa.a on 12/18/2018.
 */

var map1= new Map([["name1","Deepa"],["name2", "Akil"], ["name3","menaka"]]);

console.log("MAP 1 =>", map1);

var map2 = new Map([[["first name","last name"],["Deepa", "Anbalagan"]],[["firstname1","lastname2"],["Akil", "Anbalagan"]]]);

console.log("MAP 2 =>", map2);

// Modifying a existing map

map1.set("name4","Navaneeth");

console.log("Modified Map =>", map1);

// Map iteration

var entries = map1.entries();

for(var entry of entries){
    console.log("Each Object =>", entry);
}

// lodash + ES6 way of iteration
_.each(map1, (value,key)=>{
    console.log("value", value);
});

// print only the values

console.log("All the Values =>",map1.values());

// print only the keys

console.log("All the keys =>", map1.keys());

// Map.foreach Syntax
map1.forEach((value, key, map)=>{
    console.log("Key "+ key + " Value"+value);
    console.log("Map =>", map);

})