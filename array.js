var friendsage = [15, 17, 18, 14, 20];

var sonaliAge = friendsage[2];

friendsage[1] = 21;

var position = friendsage.indexOf(14);

console.log(friendsage);

friendsage.push(19);
friendsage.push(16);

console.log(friendsage);

friendsage.pop();
console.log(friendsage);

friendsage.unshift(20);
console.log(friendsage);

var tealine = ['Kalam', 'Salam','Balam'];
tealine.push('Jamal');
console.log(tealine);
tealine.pop();
console.log(tealine);

tealine.unshift('Malam');
console.log(tealine);

var part = tealine.slice(2, 5);
console.log(part);
console.log(tealine);

var part = tealine.splice(1, 3);
console.log(part);
console.log(tealine);