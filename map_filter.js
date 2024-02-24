//map  function
const nums=[3,4,5,6,7];
let um=[]; 
for(let i=0;i<nums.length;i++)
{
    um[i]=nums[i]*nums[i];
}
console.log(um);
// for each
arr1=[];

for( let i of nums)
{
    arr1.push(i**2);
}

console.log(arr1);

//maps
const result= nums.map( ( n ) => { return n**2 } );
console.log(result);

const prices=['$732.4328','$239823.42','$8734.832','$348924.234'];
console.log(parseInt('$238.23'.slice(1)));
const res= prices.map( ( m ) => { return( parseInt( m.slice( 1 ) ) ) } );
console.log(res);

console.log( nums.map( ( m ) => { return( m*0.90 ) } ) );