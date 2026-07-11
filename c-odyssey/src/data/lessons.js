const lessons = {


"Variables":
`
Variables store data values in memory.

Example:

int age = 19;

Here:
int = data type
age = variable name
19 = stored value
`,


"Data Types":
`
C has different data types:

int → integer numbers
float → decimal numbers
char → single characters

Example:

float price = 10.5;
`,


"Output":
`
printf() is used to display output.

Example:

printf("Hello");

It prints Hello on the screen.
`,


"Input":
`
scanf() is used to take input from the user.

Example:

scanf("%d",&num);

It stores user entered values.
`,


"Loops":
`
Loops repeat a block of code.

Types:

for loop
while loop
do while loop

Example:

for(i=0;i<5;i++)
`,


"Arrays":
`
Arrays store multiple values of the same type.

Example:

int marks[5];

Array indexing starts from 0.
`,


"Functions":
`
Functions are reusable blocks of code.

Example:

void hello()
{
 printf("Hi");
}

They reduce repeated code.
`,


"Pointers":
`
Pointers store memory addresses.

Example:

int *ptr;

& gives address.
* accesses value.
`,





"Structures":
`
Structures store different types of data together.

Example:

struct Student
{
 int roll;
 char name[20];
};
`,


"Memory":
`
Dynamic memory is allocated during runtime.

Functions:

malloc()
calloc()
free()
`

};


export default lessons;