const arr=[3732897,'nice',true,null];

console.log(arr);
console.log(typeof(arr));

const movies=['Ice age','Ola oess','godzilla vs Kong','Kung fu panda','Mard','GG','Og'];
console.log(movies.length);
const mapwda ="Animals";
console.log(mapwda.length);

//indexing
console.log(movies[3]);
console.log(movies[6]);
console.log(movies.at(-1));
console.log(movies[64]);
console.log(movies.indexOf('Ola oess'));

// slicing
console.log(movies.slice(3,5));
console.log(movies.slice(3));
console.log(movies.slice(3,50));

//adding new element
movies.push( "The Dark Knight");// adds elements at the end
movies.unshift('easy');//adds elemnt in front
console.log(movies);

// removing element
movies.pop();// removes elements at the end
movies.shift();//removes elemnt in front
console.log(movies);

//adding and removing element from specific position
movies.splice(1,2);
console.log(movies);
movies.splice(-2,1,"Superman","Flash")
console.log(movies);
