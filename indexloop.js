//do while loop
let i = 10;
do{
    console.log(i)
    i++;
}while(i<15);   //output- 10 11 12 13 14




//for loop
let i = 0;
for(i=0;i<=5;i++)
{
    console.log(i);
}  //output- 0 1 2 3 4 5

//while loop
let i=1;
while(i<10)
{
    console.log(i);
    i++;
}  //output- 1 2 3 4 5 6 7 8 9

//for in loop......define string
const string = 'code';

for (let i in string) {
    console.log(string[i]);
}   //output- c o d e

//for-in loop.....define array
let arr = {
    name: ['prachi','jini'],
    age:[20,21],
    class: [12,13]
} 
for(let i in arr)
{
    console.log(arr[i]);
 } //output- name: ['prachi','jini']
           //age:[20,21]
           //class:[12,13]

//for-of loop #use for iterable data structure like array,string.

const students = ['sakshi', 'Sara', 'prachi'];

for ( let element of students ) 

  { 
    console.log(element);
}   //output-  sakshi
           //sara
           //prachi