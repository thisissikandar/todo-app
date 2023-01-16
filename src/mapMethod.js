console.log("Hello World");
let peter = { name: 'Spider Man'},
    tony = { name: 'iron Man' },
    steav = { name: 'caption America'};
//This Method Recommended for set The value To key
let userRoles = new Map([
    [peter,'admin'],
    [tony, 'editor'],
    [steav, 'subscriber']
]);
for (let  = 0;  < array.length; ++) {
    const element = array[];
    
}


console.log(typeof(userRoles))
console.log( userRoles instanceof Map);
//This Methode For the set The value for the key not Recommended
// userRoles.set(peter, 'admin')
// .set(tony, 'editor')
// .set(steav, 'subscriber');
// let sikandar = {name :'chauhan'}
console.log(userRoles.get(peter));
console.log(userRoles.has(peter));
// console.log(userRoles.has(sikandar));

console.log(userRoles.size)
console.log(userRoles)