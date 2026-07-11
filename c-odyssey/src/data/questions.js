const questions = [

{
id:1,

topic:"C Basics",

question:"Who developed the C programming language?",

options:[
"Dennis Ritchie",
"James Gosling",
"Bjarne Stroustrup",
"Guido van Rossum"
],

answer:"Dennis Ritchie",

explanation:
"Dennis Ritchie developed the C programming language at Bell Laboratories in 1972. C became the foundation for many modern programming languages.",

lesson:
`
📚 C Programming Language

C is a general-purpose programming language developed by Dennis Ritchie in 1972.

Features of C:
• Simple and efficient
• Portable
• Supports structured programming
• Used for system and application development

C is called a middle-level language because it supports both high-level and low-level programming features.
`
},



{
id:2,

topic:"C Basics",

question:"Which extension is used for a C source file?",

options:[
".cpp",
".java",
".c",
".py"
],

answer:".c",

explanation:
"C programs are stored in files with the .c extension. The compiler uses this file as the source code input.",

lesson:
`
📚 C Program Files

A C source program is saved with the extension:

filename.c

Example:

hello.c

The compiler converts this source file into an executable program.
`
},



{
id:3,

topic:"Structure of C Program",

question:"Which function is the starting point of execution in a C program?",

options:[
"start()",
"main()",
"run()",
"begin()"
],

answer:"main()",

explanation:
"The main() function is the entry point of every C program. Program execution begins from the main() function.",

lesson:
`
📚 main() Function

Every C program must contain a main() function.

Example:

#include<stdio.h>

int main()
{
    printf("Hello");
    return 0;
}

Execution starts from main().
`
},



{
id:4,

topic:"Structure of C Program",

question:"Which header file is required for printf() function?",

options:[
"math.h",
"stdio.h",
"string.h",
"stdlib.h"
],

answer:"stdio.h",

explanation:
"The stdio.h header file contains declarations for standard input and output functions like printf() and scanf().",

lesson:
`
📚 Header Files

Header files provide predefined functions in C.

stdio.h:
Standard Input Output header file.

Functions included:
• printf()
• scanf()

Example:

#include<stdio.h>
`
},



{
id:5,

topic:"Structure of C Program",

question:"Which symbol is used for single-line comments in C?",

options:[
"//",
"/* */",
"#",
"**"
],

answer:"//",

explanation:
"Double slash (//) is used to write single-line comments in C. Comments are ignored by the compiler.",

lesson:
`
📚 Comments in C

Comments are notes written inside programs.

Single-line comment:

// This is a comment


Multi-line comment:

/*
This is
a comment
*/

Comments improve code readability.
`
},



{
id:6,

topic:"Variables",

question:"What is a variable in C?",

options:[
"A named memory location used to store data",
"A type of loop",
"A compiler error",
"A header file"
],

answer:"A named memory location used to store data",

explanation:
"A variable is a name given to a memory location where values can be stored and changed during program execution.",

lesson:
`
📚 Variables

Variables store data values in memory.

Syntax:

data_type variable_name;

Example:

int age;

Assigning value:

age = 19;

The value stored in a variable can change during program execution.
`
},



{
id:7,

topic:"Variables",

question:"Which is a valid variable name in C?",

options:[
"2number",
"my_name",
"float",
"first-name"
],

answer:"my_name",

explanation:
"Variable names can contain letters, numbers, and underscores but cannot start with a number or use reserved keywords.",

lesson:
`
📚 Variable Naming Rules

Rules:
• Must start with a letter or underscore
• Cannot contain spaces
• Cannot use keywords
• Case-sensitive

Valid:
student1
_marks
total

Invalid:
2marks
float
first-name
`
},



{
id:8,

topic:"Data Types",

question:"Which data type is used to store integer values?",

options:[
"float",
"char",
"int",
"double"
],

answer:"int",

explanation:
"The int data type stores whole numbers without decimal values.",

lesson:
`
📚 Integer Data Type

int stores whole numbers.

Example:

int marks = 90;

Values:
10
-5
100

Decimal values cannot be stored in int.
`
},



{
id:9,

topic:"Data Types",

question:"Which data type is used to store a single character?",

options:[
"char",
"int",
"float",
"double"
],

answer:"char",

explanation:
"The char data type stores a single character enclosed in single quotes.",

lesson:
`
📚 Character Data Type

char stores one character.

Example:

char grade = 'A';

A character occupies one byte of memory.
`
},



{
id:10,

topic:"Data Types",

question:"Which data type is used to store decimal numbers?",

options:[
"int",
"float",
"char",
"void"
],

answer:"float",

explanation:
"The float data type stores numbers containing decimal points.",

lesson:
`
📚 Floating Point Data Type

float stores decimal values.

Example:

float price = 25.5;

Used when fractional values are required.
`
},

{
id:11,

topic:"Operators",

question:"Which operator is used for addition in C?",

options:[
"+",
"-",
"*",
"/"
],

answer:"+",

explanation:
"The plus (+) operator is used to add two values in C. It is an arithmetic operator.",

lesson:
`
📚 Arithmetic Operators

Arithmetic operators perform mathematical operations.

+  Addition
-  Subtraction
*  Multiplication
/  Division
%  Modulus

Example:

sum = a + b;
`
},



{
id:12,

topic:"Operators",

question:"Which operator gives the remainder after division?",

options:[
"/",
"%",
"*",
"+"
],

answer:"%",

explanation:
"The modulus (%) operator returns the remainder after integer division.",

lesson:
`
📚 Modulus Operator (%)

The modulus operator gives the remainder.

Example:

10 % 3 = 1

Because:
10 divided by 3 gives remainder 1.

It is commonly used to check even and odd numbers.
`
},



{
id:13,

topic:"Operators",

question:"Which operator is used to compare two values for equality?",

options:[
"=",
"==",
"!=",
"<="
],

answer:"==",

explanation:
"Double equal (==) is a relational operator used to check whether two values are equal. Single = is used for assignment.",

lesson:
`
📚 Relational Operators

Relational operators compare values.

==  Equal to
!=  Not equal to
>   Greater than
<   Less than
>=  Greater or equal
<=  Less or equal

Example:

if(a == b)
`
},



{
id:14,

topic:"Operators",

question:"Which operator is used to assign a value to a variable?",

options:[
"==",
"=",
"+=",
"!="
],

answer:"=",

explanation:
"The assignment operator (=) stores a value inside a variable.",

lesson:
`
📚 Assignment Operator

The = operator assigns values.

Example:

int age;

age = 19;

The value 19 is stored in age.
`
},



{
id:15,

topic:"Operators",

question:"Which logical operator represents AND in C?",

options:[
"&&",
"||",
"!",
"&"
],

answer:"&&",

explanation:
"The logical AND operator (&&) returns true only when both conditions are true.",

lesson:
`
📚 Logical Operators

Logical operators combine conditions.

&&  AND
||  OR
!   NOT

Example:

if(age>=18 && age<=60)
`
},



{
id:16,

topic:"Input Output",

question:"Which function is used to display output in C?",

options:[
"scanf()",
"printf()",
"input()",
"display()"
],

answer:"printf()",

explanation:
"printf() is used to display formatted output on the screen.",

lesson:
`
📚 printf()

printf() displays output.

Example:

printf("Hello");

It can also display variable values:

printf("%d", age);
`
},



{
id:17,

topic:"Input Output",

question:"Which function is used to take input from the user?",

options:[
"printf()",
"scanf()",
"get()",
"input()"
],

answer:"scanf()",

explanation:
"scanf() reads input entered by the user and stores it in variables.",

lesson:
`
📚 scanf()

scanf() is used for input.

Example:

int age;

scanf("%d",&age);

& gives the memory address where the value is stored.
`
},



{
id:18,

topic:"Input Output",

question:"Which format specifier is used for an integer in printf()?",

options:[
"%f",
"%c",
"%d",
"%s"
],

answer:"%d",

explanation:
"%d is the format specifier used to display integer values.",

lesson:
`
📚 Format Specifiers

Format specifiers tell C what type of data is being used.

%d → integer
%f → float
%c → character
%s → string

Example:

printf("%d",marks);
`
},



{
id:19,

topic:"Decision Making",

question:"Which statement is used for decision making in C?",

options:[
"if",
"loop",
"array",
"function"
],

answer:"if",

explanation:
"The if statement executes a block of code only when a given condition is true.",

lesson:
`
📚 if Statement

Syntax:

if(condition)
{
 true statement;
}

Example:

if(age>=18)
{
 printf("Adult");
}

The code runs only if the condition is true.
`
},



{
id:20,

topic:"Decision Making",

question:"Which statement is used when there are multiple choices?",

options:[
"switch",
"for",
"while",
"break"
],

answer:"switch",

explanation:
"The switch statement allows selection between multiple cases based on a value.",

lesson:
`
📚 switch Statement

Used when multiple options are available.

Example:

switch(choice)
{
case 1:
 printf("One");
 break;

case 2:
 printf("Two");
 break;
}

break stops execution of the current case.
`
},

{
id:21,

topic:"Loops",

question:"Why are loops used in C programming?",

options:[
"To repeat a set of statements",
"To store data",
"To create variables",
"To include header files"
],

answer:"To repeat a set of statements",

explanation:
"Loops are used to execute the same block of code repeatedly until a condition becomes false.",

lesson:
`
📚 Loops in C

Loops reduce repeated code.

Types of loops:

1. for loop
2. while loop
3. do-while loop

They are used when a task needs to be repeated multiple times.
`
},



{
id:22,

topic:"for Loop",

question:"Which loop is generally used when the number of repetitions is known?",

options:[
"for loop",
"while loop",
"do-while loop",
"switch"
],

answer:"for loop",

explanation:
"The for loop is commonly used when the programmer knows how many times a block should execute.",

lesson:
`
📚 for Loop

Syntax:

for(initialization; condition; increment/decrement)
{
 statements;
}

Example:

for(i=0;i<5;i++)
{
 printf("%d",i);
}

The loop runs while the condition is true.
`
},



{
id:23,

topic:"while Loop",

question:"A while loop checks its condition when?",

options:[
"Before executing the loop body",
"After executing the loop body",
"Never checks",
"Only at the end"
],

answer:"Before executing the loop body",

explanation:
"A while loop is an entry-controlled loop because it checks the condition before execution.",

lesson:
`
📚 while Loop

Syntax:

// Initialization
int counter = 0;

while (condition) {
    // statements;

    // Increment / Decrement
    counter++;
}


If the condition is false initially, the loop will not execute even once.
`
},



{
id:24,

topic:"do-while Loop",

question:"Which loop executes at least once even if the condition is false?",

options:[
"for",
"while",
"do-while",
"switch"
],

answer:"do-while",

explanation:
"The do-while loop checks the condition after executing the statements, so it runs at least one time.",

lesson:
`
📚 do-while Loop

Syntax:

// Initialization
int counter = 0;

do {
    // statements;

    // Increment / Decrement
    counter++;
} while (condition);


The body executes first, then the condition is checked.
`
},



{
id:25,

topic:"Loops",

question:"Which statement is used to immediately exit from a loop?",

options:[
"continue",
"break",
"exitloop",
"stop"
],

answer:"break",

explanation:
"The break statement terminates the current loop and transfers control to the next statement.",

lesson:
`
📚 break Statement

break is used to stop a loop early.

Example:

if(i==5)
{
 break;
}

The loop ends immediately.
`
},



{
id:26,

topic:"Loops",

question:"Which statement skips the current iteration of a loop?",

options:[
"break",
"continue",
"skip",
"pass"
],

answer:"continue",

explanation:
"The continue statement skips the remaining statements of the current iteration and moves to the next iteration.",

lesson:
`
📚 continue Statement

continue does not stop the loop.

It only skips the current cycle.

Example:

for(i=0;i<5;i++)
{
 if(i==2)
 continue;
}
`
},



{
id:27,

topic:"Arrays",

question:"What is an array in C?",

options:[
"A collection of same type of data elements",
"A single variable only",
"A loop statement",
"A function"
],

answer:"A collection of same type of data elements",

explanation:
"An array stores multiple values of the same data type under one variable name.",

lesson:
`
📚 Arrays in C

Arrays store multiple values of the same type.

Syntax:

data_type array_name[size];

Example:

int marks[5];

Array indexing starts from 0.
`
},



{
id:28,

topic:"Arrays",

question:"The first index of an array in C is:",

options:[
"0",
"1",
"-1",
"Depends on size"
],

answer:"0",

explanation:
"C uses zero-based indexing, meaning the first element is stored at index 0.",

lesson:
`
📚 Array Indexing

Example:

int a[3]={10,20,30};

Index:

a[0]=10
a[1]=20
a[2]=30

The first element always starts at index 0.
`
},



{
id:29,

topic:"Arrays",

question:"Which declaration creates an integer array of 10 elements?",

options:[
"int a",
"int a[10]",
"array int a(10)",
"int[10] a"
],

answer:"int a[10]",

explanation:
"The declaration int a[10] creates an integer array that can store 10 values.",

lesson:
`
📚 Array Declaration

Syntax:

data_type name[size];

Example:

int numbers[10];

It creates space for 10 integer elements.
`
},



{
id:30,

topic:"Strings",

question:"A string in C is stored as an array of:",

options:[
"Characters",
"Integers",
"Floats",
"Functions"
],

answer:"Characters",

explanation:
"In C, strings are stored as arrays of characters ending with a null character '\\0'.",

lesson:
`
📚 Strings in C

A string is a collection of characters.

Example:

char name[20]="John";

Strings end with a special character:

\\0

which represents the end of the string.
`
},

{
id:31,

topic:"Functions",

question:"What is a function in C?",

options:[
"A block of code that performs a specific task",
"A type of variable",
"A header file",
"A loop"
],

answer:"A block of code that performs a specific task",

explanation:
"A function is a reusable block of code designed to perform a particular operation. It helps reduce repetition in programs.",

lesson:
`
📚 Functions in C

A function is a group of statements that performs a specific task.

Advantages:
• Code reusability
• Easy debugging
• Better program structure

Example:

void display()
{
 printf("Hello");
}
`
},



{
id:32,

topic:"Functions",

question:"Which keyword is used when a function does not return any value?",

options:[
"void",
"null",
"empty",
"return"
],

answer:"void",

explanation:
"The void keyword indicates that a function does not return any value.",

lesson:
`
📚 Void Functions

A void function performs a task but does not send a value back.

Example:

void hello()
{
 printf("Hi");
}

`
},



{
id:33,

topic:"Functions",

question:"Which statement is used to return a value from a function?",

options:[
"return",
"send",
"back",
"output"
],

answer:"return",

explanation:
"The return statement sends a value back from a function to the calling function.",

lesson:
`
📚 return Statement

return is used to send a result back.

Example:

int add()
{
 return 10;
}

The returned value can be stored or used.
`
},



{
id:34,

topic:"Functions",

question:"What is function declaration also called?",

options:[
"Function prototype",
"Function loop",
"Function variable",
"Function array"
],

answer:"Function prototype",

explanation:
"A function prototype tells the compiler about a function before it is used.",

lesson:
`
📚 Function Prototype

A prototype contains:
• Return type
• Function name
• Parameters

Example:

int add(int,int);

It informs the compiler about the function.
`
},



{
id:35,

topic:"Functions",

question:"Passing values to a function is called:",

options:[
"Function calling",
"Parameter passing",
"Compilation",
"Execution"
],

answer:"Parameter passing",

explanation:
"Sending values to a function during a call is called parameter passing.",

lesson:
`
📚 Parameters

Parameters allow functions to receive data.

Example:

int sum(int a,int b)

Here a and b are parameters.
`
},



{
id:36,

topic:"Recursion",

question:"What is recursion in C?",

options:[
"A function calling itself",
"A loop inside another loop",
"Creating variables",
"Using arrays"
],

answer:"A function calling itself",

explanation:
"Recursion occurs when a function calls itself repeatedly until a stopping condition is reached.",

lesson:
`
📚 Recursion

A recursive function calls itself.

Example:

factorial(n)

A base condition is required to stop recursion.
`
},



{
id:37,

topic:"Pointers",

question:"What does a pointer store?",

options:[
"Memory address",
"Only numbers",
"Characters",
"Loops"
],

answer:"Memory address",

explanation:
"A pointer is a variable that stores the address of another variable.",

lesson:
`
📚 Pointers

Pointers store memory addresses.

Example:

int *ptr;

& gives address.
* accesses the value stored at that address.
`
},



{
id:38,

topic:"Pointers",

question:"Which symbol is used to get the address of a variable?",

options:[
"&",
"*",
"#",
"%"
],

answer:"&",

explanation:
"The address operator (&) returns the memory address of a variable.",

lesson:
`
📚 Address Operator

Example:

int a=10;

&a

gives the address of variable a.
`
},



{
id:39,

topic:"Pointers",

question:"Which symbol is used to access the value stored at a pointer address?",

options:[
"*",
"&",
"%",
"#"
],

answer:"*",

explanation:
"The dereference operator (*) is used to access the value stored at a memory address.",

lesson:
`
📚 Dereference Operator

Example:

int *p;

*p

accesses the value stored at the address held by p.
`
},



{
id:40,

topic:"Structures",

question:"What is a structure in C?",

options:[
"A user-defined data type that groups different data types",
"A loop",
"A function",
"A header file"
],

answer:"A user-defined data type that groups different data types",

explanation:
"A structure allows different types of data to be stored together under one name.",

lesson:
`
📚 Structures in C

Structures combine different data types.

Example:

struct Student
{
 int roll;
 char name[20];
};

Useful for storing records.
`
},



{
id:41,

topic:"Structures",

question:"Which keyword is used to create a structure?",

options:[
"struct",
"class",
"record",
"define"
],

answer:"struct",

explanation:
"The struct keyword is used to define a structure in C.",

lesson:
`
📚 struct Keyword

Syntax:

struct name
{
 data members;
};

Example:

struct Student
{
 int roll;
};
`
},



{
id:42,

topic:"C Basics",

question:"What is the purpose of a compiler?",

options:[
"Convert source code into machine code",
"Create variables",
"Store data",
"Execute only loops"
],

answer:"Convert source code into machine code",

explanation:
"A compiler translates C source code into machine language so the computer can execute it.",

lesson:
`
📚 Compiler

Steps:

Source Code
     ↓
Compiler
     ↓
Machine Code
     ↓
Execution

The compiler also detects syntax errors.
`
},

{
id:43,

topic:"C Basics",

question:"Which symbol is used to end a statement in C?",

options:[
";",
":",
".",
","
],

answer:";",

explanation:
"In C, every statement is terminated using a semicolon (;). It tells the compiler that the instruction has ended.",

lesson:
`
📚 Semicolon in C

The semicolon marks the end of a statement.

Example:

int a = 10;

printf("%d",a);

Missing semicolons can cause compilation errors.
`
},



{
id:44,

topic:"C Basics",

question:"Which character set is mainly used in C programming?",

options:[
"ASCII",
"Unicode only",
"Binary only",
"HTML"
],

answer:"ASCII",

explanation:
"C uses the ASCII character set to represent characters using numeric values.",

lesson:
`
📚 ASCII

ASCII stands for American Standard Code for Information Interchange.

It assigns numbers to characters.

Example:

'A' = 65
'a' = 97
`
},



{
id:45,

topic:"C Basics",

question:"Which file is generated after successful compilation of a C program?",

options:[
"Executable file",
"Text file",
"Image file",
"Header file"
],

answer:"Executable file",

explanation:
"The compiler converts C source code into an executable file that can be run by the computer.",

lesson:
`
📚 Compilation Process

Steps:

Source Code (.c)
       ↓
Compiler
       ↓
Object Code
       ↓
Executable File

The executable file runs the program.
`
},



{
id:46,

topic:"Constants",

question:"A value that cannot be changed during program execution is called:",

options:[
"Constant",
"Variable",
"Function",
"Loop"
],

answer:"Constant",

explanation:
"A constant is a fixed value that cannot be modified while the program is running.",

lesson:
`
📚 Constants

Constants store fixed values.

Example:

const int age = 18;

The value of age cannot be changed later.
`
},



{
id:47,

topic:"Constants",

question:"Which keyword is used to declare a constant in C?",

options:[
"const",
"constant",
"fixed",
"define"
],

answer:"const",

explanation:
"The const keyword makes a variable value unchangeable after initialization.",

lesson:
`
📚 const Keyword

Example:

const float pi = 3.14;

The value of pi cannot be modified.
`
},



{
id:48,

topic:"Data Types",

question:"Which data type stores a single character?",

options:[
"char",
"int",
"float",
"double"
],

answer:"char",

explanation:
"char is used to store a single character enclosed within single quotes.",

lesson:
`
📚 Character Type

Example:

char grade = 'A';

A char variable stores only one character.
`
},



{
id:49,

topic:"Data Types",

question:"Which data type generally stores larger decimal values?",

options:[
"double",
"char",
"int",
"void"
],

answer:"double",

explanation:
"Double stores decimal values with more precision compared to float.",

lesson:
`
📚 double Data Type

double is used when higher precision decimal values are needed.

Example:

double salary = 25000.75;
`
},



{
id:50,

topic:"Input Output",

question:"Which function prints formatted output in C?",

options:[
"printf()",
"scanf()",
"main()",
"include()"
],

answer:"printf()",

explanation:
"printf() displays formatted text and values on the screen.",

lesson:
`
📚 printf()

printf allows displaying:

Text
Numbers
Characters

Example:

printf("Age = %d",age);
`
},



{
id:51,

topic:"Input Output",

question:"Which header file contains scanf()?",

options:[
"stdio.h",
"math.h",
"string.h",
"time.h"
],

answer:"stdio.h",

explanation:
"The standard input-output header file stdio.h contains printf() and scanf().",

lesson:
`
📚 stdio.h

stdio means Standard Input Output.

It provides functions:

printf()
scanf()
getchar()
putchar()
`
},



{
id:52,

topic:"Decision Making",

question:"What happens when an if condition is false?",

options:[
"The if block is skipped",
"The program stops",
"The compiler fails",
"The loop repeats"
],

answer:"The if block is skipped",

explanation:
"If the condition is false, the statements inside the if block are not executed.",

lesson:
`
📚 if Condition

Example:

if(age>=18)
{
 printf("Eligible");
}

If age is less than 18, the block is skipped.
`
},



{
id:53,

topic:"Decision Making",

question:"Which statement provides two choices in C?",

options:[
"if-else",
"switch",
"for",
"while"
],

answer:"if-else",

explanation:
"The if-else statement executes one block when the condition is true and another when it is false.",

lesson:
`
📚 if-else

Syntax:

if(condition)
{
}
else
{
}

It provides two alternative paths.
`
},



{
id:54,

topic:"Decision Making",

question:"Which keyword is used inside switch to stop a case?",

options:[
"break",
"stop",
"exit",
"continue"
],

answer:"break",

explanation:
"The break statement prevents execution from continuing into the next switch cases.",

lesson:
`
📚 switch break

Without break, multiple cases may execute.

Example:

case 1:
statement;
break;
`
},



{
id:55,

topic:"Loops",

question:"Which loop is an entry-controlled loop?",

options:[
"while",
"do-while",
"both",
"none"
],

answer:"while",

explanation:
"While loop checks the condition before executing the loop body.",

lesson:
`
📚 Entry Controlled Loop

Condition is checked before execution.

Examples:

for loop
while loop
`
},



{
id:56,

topic:"Loops",

question:"Which loop is an exit-controlled loop?",

options:[
"do-while",
"for",
"while",
"switch"
],

answer:"do-while",

explanation:
"The do-while loop checks its condition after executing the statements.",

lesson:
`
📚 Exit Controlled Loop

do-while executes first and checks later.

Therefore it always runs at least once.
`
},



{
id:57,

topic:"Arrays",

question:"Array elements are stored in:",

options:[
"Continuous memory locations",
"Random locations",
"Files",
"Registers only"
],

answer:"Continuous memory locations",

explanation:
"Array elements are stored sequentially in contiguous memory locations.",

lesson:
`
📚 Array Memory

Example:

int a[3];

Memory:

a[0] a[1] a[2]

Elements are stored next to each other.
`
},



{
id:58,

topic:"Arrays",

question:"Can an array store different data types together?",

options:[
"No",
"Yes always",
"Only integers",
"Only characters"
],

answer:"No",

explanation:
"Normal arrays store elements of the same data type only.",

lesson:
`
📚 Array Data Type

An integer array stores only integers.

Example:

int marks[5];

For different data types together, structures are used.
`
},



{
id:59,

topic:"Strings",

question:"Which character marks the end of a string in C?",

options:[
"\\0",
"\\n",
"\\t",
"\\a"
],

answer:"\\0",

explanation:
"The null character \\0 indicates the end of a string in C.",

lesson:
`
📚 String Termination

C strings always end with:

\\0

Example:

Hello\\0

This tells C where the string ends.
`
},



{
id:60,

topic:"Strings",

question:"Which header file is used for string functions?",

options:[
"string.h",
"stdio.h",
"math.h",
"stdlib.h"
],

answer:"string.h",

explanation:
"The string.h header file contains functions used to manipulate strings.",

lesson:
`
📚 string.h

Common functions:

strlen()
strcpy()
strcmp()
strcat()

Used for string operations.
`
},

{
id:61,

topic:"Strings",

question:"Which function is used to find the length of a string in C?",

options:[
"strlen()",
"strcpy()",
"strcmp()",
"strcat()"
],

answer:"strlen()",

explanation:
"The strlen() function returns the number of characters present in a string excluding the null character.",

lesson:
`
📚 strlen()

strlen() calculates string length.

Example:

char name[]="C";

strlen(name);

Output:
1

The ending \\0 is not counted.
`
},



{
id:62,

topic:"Strings",

question:"Which function copies one string into another?",

options:[
"strcpy()",
"strlen()",
"strcmp()",
"strcat()"
],

answer:"strcpy()",

explanation:
"strcpy() copies the contents of one string into another string.",

lesson:
`
📚 strcpy()

Syntax:

strcpy(destination,source);

Example:

strcpy(a,b);

The value of b is copied into a.
`
},



{
id:63,

topic:"Strings",

question:"Which function compares two strings?",

options:[
"strcmp()",
"strcpy()",
"strlen()",
"strcat()"
],

answer:"strcmp()",

explanation:
"strcmp() compares two strings and checks whether they are equal or different.",

lesson:
`
📚 strcmp()

Example:

strcmp(str1,str2);

Returns:
0 → strings are equal
Non-zero → strings are different
`
},



{
id:64,

topic:"Strings",

question:"Which function joins two strings together?",

options:[
"strcat()",
"strcmp()",
"strlen()",
"strcpy()"
],

answer:"strcat()",

explanation:
"strcat() combines two strings by attaching one string at the end of another.",

lesson:
`
📚 strcat()

Example:

strcat(a,b);

If:
a = Hello
b = World

Result:
HelloWorld
`
},



{
id:65,

topic:"Functions",

question:"Why are functions used in C programs?",

options:[
"To reuse code",
"To increase errors",
"To remove variables",
"To replace compiler"
],

answer:"To reuse code",

explanation:
"Functions allow programmers to write code once and use it multiple times.",

lesson:
`
📚 Advantages of Functions

Functions provide:

• Code reuse
• Better organization
• Easier debugging
• Smaller programs
`
},



{
id:66,

topic:"Functions",

question:"The values passed during function call are called:",

options:[
"Arguments",
"Variables",
"Constants",
"Operators"
],

answer:"Arguments",

explanation:
"Arguments are the actual values sent to a function when it is called.",

lesson:
`
📚 Arguments and Parameters

Arguments:
Values passed during function call.

Parameters:
Variables receiving those values.

Example:

sum(5,10);

5 and 10 are arguments.
`
},



{
id:67,

topic:"Functions",

question:"The variables declared in function definition are called:",

options:[
"Parameters",
"Arguments",
"Constants",
"Headers"
],

answer:"Parameters",

explanation:
"Parameters are variables listed in a function definition that receive values.",

lesson:
`
📚 Parameters

Example:

int add(int a,int b)

a and b are parameters.
`
},



{
id:68,

topic:"Functions",

question:"A function calling itself is called:",

options:[
"Recursion",
"Iteration",
"Looping",
"Compilation"
],

answer:"Recursion",

explanation:
"Recursion occurs when a function repeatedly calls itself until a stopping condition is reached.",

lesson:
`
📚 Recursion

Example:

factorial(n)

A base condition is required to stop infinite calls.
`
},



{
id:69,

topic:"Pointers",

question:"A pointer variable stores:",

options:[
"Address of another variable",
"Only characters",
"Only integers",
"Function name"
],

answer:"Address of another variable",

explanation:
"A pointer stores the memory address of another variable.",

lesson:
`
📚 Pointer

Example:

int a=10;
int *p=&a;

p stores the address of a.
`
},



{
id:70,

topic:"Pointers",

question:"Which operator is used with pointers to access a value?",

options:[
"*",
"&",
"%",
"#"
],

answer:"*",

explanation:
"The dereference operator (*) accesses the value stored at the address held by a pointer.",

lesson:
`
📚 Dereferencing

Example:

*p

means:
value stored at address p
`
},



{
id:71,

topic:"Pointers",

question:"Which operator gives the address of a variable?",

options:[
"&",
"*",
"+",
"="
],

answer:"&",

explanation:
"The address operator (&) returns the memory address of a variable.",

lesson:
`
📚 Address Operator

Example:

int x;

&x

gives the address of x.
`
},



{
id:72,

topic:"Structures",

question:"Structures are used to store:",

options:[
"Different data types together",
"Only integers",
"Only characters",
"Only loops"
],

answer:"Different data types together",

explanation:
"Structures allow storing different types of data under one name.",

lesson:
`
📚 Structures

Example:

struct Student
{
int roll;
char name[20];
};

Stores related information together.
`
},



{
id:73,

topic:"Structures",

question:"Which keyword creates a structure?",

options:[
"struct",
"class",
"define",
"object"
],

answer:"struct",

explanation:
"The struct keyword is used to define a structure in C.",

lesson:
`
📚 struct Keyword

Syntax:

struct name
{
members;
};
`
},



{
id:74,

topic:"Operators",

question:"Which operator increases a value by one?",

options:[
"++",
"--",
"+",
"="
],

answer:"++",

explanation:
"The increment operator (++) increases the value of a variable by one.",

lesson:
`
📚 Increment Operator

Example:

i++;

Same as:

i=i+1;
`
},



{
id:75,

topic:"Operators",

question:"Which operator decreases a value by one?",

options:[
"--",
"++",
"-",
"%"
],

answer:"--",

explanation:
"The decrement operator (--) decreases a variable value by one.",

lesson:
`
📚 Decrement Operator

Example:

i--;

Same as:

i=i-1;
`
},



{
id:76,

topic:"Operators",

question:"Which operator is called the conditional operator?",

options:[
"?:",
"++",
"%",
"&&"
],

answer:"?:",

explanation:
"The conditional operator ?: is a shorthand form of if-else.",

lesson:
`
📚 Conditional Operator

Syntax:

condition ? true_value : false_value;

It selects one of two values.
`
},



{
id:77,

topic:"Decision Making",

question:"Nested if means:",

options:[
"An if statement inside another if statement",
"Many loops",
"A function",
"An array"
],

answer:"An if statement inside another if statement",

explanation:
"A nested if is an if statement placed inside another if block.",

lesson:
`
📚 Nested if

Used when multiple conditions need checking.

Example:

if(a>0)
{
 if(a<10)
 {
 }
}
`
},



{
id:78,

topic:"Loops",

question:"Which loop is best when the number of iterations is fixed?",

options:[
"for loop",
"while loop",
"do-while",
"switch"
],

answer:"for loop",

explanation:
"The for loop is preferred when the number of repetitions is already known.",

lesson:
`
📚 for Loop

Example:

for(i=1;i<=10;i++)

Used for counting loops.
`
},



{
id:79,

topic:"C Basics",

question:"Which language is C based on?",

options:[
"BCPL",
"Java",
"Python",
"HTML"
],

answer:"BCPL",

explanation:
"C was developed from earlier languages including BCPL and B.",

lesson:
`
📚 History of C

BCPL
 ↓
B Language
 ↓
C Language

C was developed at Bell Laboratories.
`
},



{
id:80,

topic:"Compilation",

question:"Errors caused by incorrect grammar of C language are called:",

options:[
"Syntax errors",
"Logical errors",
"Runtime errors",
"Hardware errors"
],

answer:"Syntax errors",

explanation:
"Syntax errors occur when the rules of the C language are not followed correctly.",

lesson:
`
📚 Syntax Errors

Examples:

Missing semicolon
Wrong brackets
Misspelled keywords

The compiler detects syntax errors.
`
},

{
id:81,

topic:"Compilation",

question:"Errors that occur while the program is running are called:",

options:[
"Runtime errors",
"Syntax errors",
"Logical errors",
"Compilation errors"
],

answer:"Runtime errors",

explanation:
"Runtime errors occur during program execution. They happen after successful compilation.",

lesson:
`
📚 Runtime Errors

Runtime errors happen when a program runs.

Examples:

• Division by zero
• Invalid memory access

The program compiles but fails during execution.
`
},



{
id:82,

topic:"Compilation",

question:"Errors where the program runs but gives incorrect output are called:",

options:[
"Logical errors",
"Syntax errors",
"Runtime errors",
"Compiler errors"
],

answer:"Logical errors",

explanation:
"Logical errors occur due to incorrect logic in the program. The program runs but produces wrong results.",

lesson:
`
📚 Logical Errors

Logical errors are mistakes in program thinking.

Example:

Using + instead of -

The compiler cannot detect these errors.
`
},



{
id:83,

topic:"Variables",

question:"Which of these is a valid C identifier?",

options:[
"total_marks",
"2marks",
"float",
"my-name"
],

answer:"total_marks",

explanation:
"Identifiers can contain letters, numbers and underscores but cannot start with numbers or contain special characters.",

lesson:
`
📚 Identifiers

Identifiers are names given to variables, functions, etc.

Rules:

• Start with letter or _
• No spaces
• Cannot use keywords

Example:

student_name
`
},



{
id:84,

topic:"Data Types",

question:"The size of a data type depends on:",

options:[
"Compiler and system",
"Variable name",
"Program length",
"Number of loops"
],

answer:"Compiler and system",

explanation:
"The memory size of data types can vary depending on the compiler and computer system.",

lesson:
`
📚 Data Type Size

Different systems may allocate different memory sizes.

Example:

int may be 2 or 4 bytes depending on system.
`
},



{
id:85,

topic:"Input Output",

question:"Which escape sequence moves the cursor to a new line?",

options:[
"\\n",
"\\t",
"\\0",
"\\a"
],

answer:"\\n",

explanation:
"\\n represents a newline character and moves output to the next line.",

lesson:
`
📚 Escape Sequences

Common escape characters:

\\n → new line
\\t → tab
\\0 → null character

Example:

printf("Hello\\nWorld");
`
},



{
id:86,

topic:"Input Output",

question:"Which escape sequence gives a horizontal tab space?",

options:[
"\\t",
"\\n",
"\\b",
"\\0"
],

answer:"\\t",

explanation:
"\\t inserts a horizontal tab space in output.",

lesson:
`
📚 Tab Escape Sequence

Example:

printf("Name\\tAge");

Output:

Name    Age
`
},



{
id:87,

topic:"Loops",

question:"What is an infinite loop?",

options:[
"A loop that never ends",
"A loop with no variables",
"A syntax error",
"A function"
],

answer:"A loop that never ends",

explanation:
"An infinite loop continues forever because its stopping condition never becomes false.",

lesson:
`
📚 Infinite Loop

Example:

while(1)
{
 printf("Hello");
}

The condition always remains true.
`
},



{
id:88,

topic:"Loops",

question:"Which part of a for loop changes the loop variable?",

options:[
"Increment/Decrement expression",
"Header file",
"Condition only",
"Function"
],

answer:"Increment/Decrement expression",

explanation:
"The increment or decrement expression updates the loop variable after each iteration.",

lesson:
`
📚 for Loop Parts

for(initialization; condition; update)

Example:

for(i=0;i<5;i++)

i++ changes the value after every iteration.
`
},



{
id:89,

topic:"Arrays",

question:"The last valid index of an array of size 10 is:",

options:[
"9",
"10",
"8",
"1"
],

answer:"9",

explanation:
"C arrays start from index 0, so an array of size 10 has indexes 0 to 9.",

lesson:
`
📚 Array Index

For:

int a[10];

Indexes:

0 1 2 3 4 5 6 7 8 9

Total elements = 10
`
},



{
id:90,

topic:"Arrays",

question:"Which loop is commonly used to access array elements?",

options:[
"for loop",
"switch",
"if",
"function"
],

answer:"for loop",

explanation:
"For loops are commonly used because array elements are accessed using indexes.",

lesson:
`
📚 Traversing Arrays

Example:

for(i=0;i<5;i++)
{
 printf("%d",a[i]);
}

The loop visits every element.
`
},



{
id:91,

topic:"Functions",

question:"A function can be called:",

options:[
"Multiple times",
"Only once",
"Never",
"Only by compiler"
],

answer:"Multiple times",

explanation:
"Functions are reusable blocks of code and can be called whenever required.",

lesson:
`
📚 Function Reuse

A function written once can be used many times.

This reduces duplicate code.
`
},



{
id:92,

topic:"Functions",

question:"Which type of function returns a value?",

options:[
"Non-void function",
"Void function",
"Empty function",
"Loop function"
],

answer:"Non-void function",

explanation:
"Functions with return types like int or float return values.",

lesson:
`
📚 Return Types

Example:

int sum()
{
return 5;
}

The function returns an integer value.
`
},



{
id:93,

topic:"Pointers",

question:"Pointers are mainly used for:",

options:[
"Memory address handling",
"Creating loops",
"Printing only",
"Storing files"
],

answer:"Memory address handling",

explanation:
"Pointers allow programs to work directly with memory addresses.",

lesson:
`
📚 Pointer Uses

Pointers are used for:

• Memory management
• Passing addresses
• Efficient programming
`
},



{
id:94,

topic:"Structures",

question:"A structure variable is created using:",

options:[
"struct name",
"int name",
"array name",
"function name"
],

answer:"struct name",

explanation:
"Structure variables are declared using the structure name created with struct.",

lesson:
`
📚 Structure Variable

Example:

struct Student s1;

s1 is a structure variable.
`
},



{
id:95,

topic:"C Basics",

question:"C is a case-sensitive language. This means:",

options:[
"Uppercase and lowercase are different",
"Only uppercase is allowed",
"Only lowercase is allowed",
"Letters are ignored"
],

answer:"Uppercase and lowercase are different",

explanation:
"C treats uppercase and lowercase letters as different characters.",

lesson:
`
📚 Case Sensitivity

Example:

Age

and

age

are two different identifiers in C.
`
},



{
id:96,

topic:"Operators",

question:"Which operator is used for logical OR?",

options:[
"||",
"&&",
"!",
"=="
],

answer:"||",

explanation:
"The logical OR operator returns true when at least one condition is true.",

lesson:
`
📚 Logical OR

Example:

if(a>0 || b>0)

The condition is true if either part is true.
`
},



{
id:97,

topic:"Operators",

question:"Which operator is used for logical NOT?",

options:[
"!",
"&&",
"||",
"=="
],

answer:"!",

explanation:
"The NOT operator reverses the result of a condition.",

lesson:
`
📚 Logical NOT

Example:

!true = false

It changes true to false and false to true.
`
},



{
id:98,

topic:"Decision Making",

question:"Which statement is used for selecting one option from many?",

options:[
"switch",
"if only",
"for",
"while"
],

answer:"switch",

explanation:
"Switch is useful when one variable needs to be compared with multiple constant values.",

lesson:
`
📚 switch Statement

Used for multiple choices.

Example:

Menu programs commonly use switch.
`
},



{
id:99,

topic:"C Basics",

question:"The process of finding and removing errors is called:",

options:[
"Debugging",
"Compiling",
"Executing",
"Formatting"
],

answer:"Debugging",

explanation:
"Debugging is the process of identifying and fixing errors in a program.",

lesson:
`
📚 Debugging

Steps:

Find error
↓
Understand cause
↓
Fix code
↓
Test again
`
},



{
id:100,

topic:"C Basics",

question:"A C program is converted into machine language by:",

options:[
"Compiler",
"Editor",
"Browser",
"Keyboard"
],

answer:"Compiler",

explanation:
"The compiler translates C source code into machine language that the computer can execute.",

lesson:
`
📚 Compiler

Compiler converts:

C Code
↓
Machine Code

It also checks syntax errors before execution.
`
}




];

export default questions;