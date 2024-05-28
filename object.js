var student1 ={id:121, phone:1745, name:"Abir"};
var student2 ={id:131, phone:458, name:"Mohi"};

var phoneNo1 = student1.phone;
var phonePropName = "phone";
var phoneNo3 = student1["phone"];

//update phone
student2.phone = 54989;
student2["phone"] = 666777;
student2[phonePropName] = 993366;

//update new property
student2.cinema = "Jindhabad";
student2["cinema"] = "Jonaki";

console.log(phoneNo3);
console.log(student2);