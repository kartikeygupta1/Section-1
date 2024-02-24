const user={ name: 'raju', email: 'raju@mail.com',password: 'raju7654' };

console.log( user.name );

console.log( user.email );

console.log( user['password']);
console.log(Object.keys(user));
console.log(Object.values(user));

user.password='khulja';

console.log(user);
user.address='lucknow';
console.log(user);

const smartphone={
    brand:'Samsung',
    model:'J2',
    price:7200,
    color:['silver','blue','golden']
};
console.log(smartphone.color);

//replace the 3rd color with white
smartphone.color.pop();
smartphone.color.push("white");
smartphone.color[2]='white';
console.log(smartphone.color);

//Array 
const phonelist=[
    {brand:'Samsung',model:'J2',price:7200,color:['silver','blue','golden']},
    {brand:'VIVI',model:'J3',price:8200,color:['silver','blue','golden']},
    {brand:'Oppi',model:'J1',price:1200,color:['silver','blue','golden']},
    {brand:'Iqoo',model:'Neo 6',price:73200,color:['silver','blue','golden']}
];

console.log(phonelist.length);
console.log(phonelist[0].price);

//find the 2nd color of 3rd pgone

console.log(phonelist[2].color[1]);
