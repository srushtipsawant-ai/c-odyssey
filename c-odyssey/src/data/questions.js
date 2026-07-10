const questions = [

{
id:1,
topic:"Variables",
difficulty:"Easy",
question:"Which keyword is used to declare an integer variable?",
options:["int","float","char","string"],
answer:"int"
},

{
id:2,
topic:"Variables",
difficulty:"Easy",
question:"Which symbol ends a statement in C?",
options:[";"," : ",".","#"],
answer:";"
},

{
id:3,
topic:"Data Types",
difficulty:"Easy",
question:"Which data type stores decimal values?",
options:["int","float","char","void"],
answer:"float"
},

{
id:4,
topic:"Data Types",
difficulty:"Easy",
question:"Size of char data type is usually?",
options:["1 byte","2 bytes","4 bytes","8 bytes"],
answer:"1 byte"
},

{
id:5,
topic:"Output",
difficulty:"Easy",
question:"Which function displays output?",
options:["scanf()","printf()","print()","display()"],
answer:"printf()"
},

{
id:6,
topic:"Input",
difficulty:"Easy",
question:"Which function takes input?",
options:["scanf()","input()","get()","read()"],
answer:"scanf()"
},

{
id:7,
topic:"Operators",
difficulty:"Easy",
question:"Which operator is used for addition?",
options:["+","-","*","/"],
answer:"+"
},

{
id:8,
topic:"Operators",
difficulty:"Easy",
question:"Which operator gives remainder?",
options:["%","/","*","+"],
answer:"%"
},

{
id:9,
topic:"Conditions",
difficulty:"Easy",
question:"Which statement is used for decision making?",
options:["if","loop","switch","define"],
answer:"if"
},

{
id:10,
topic:"Conditions",
difficulty:"Medium",
question:"Which keyword handles another condition?",
options:["else","then","otherwise","next"],
answer:"else"
},

{
id:11,
topic:"Loops",
difficulty:"Easy",
question:"Which loop is commonly used when number of iterations is known?",
options:["for","if","switch","case"],
answer:"for"
},

{
id:12,
topic:"Loops",
difficulty:"Easy",
question:"Which loop checks condition before execution?",
options:["while","do while","repeat","loop"],
answer:"while"
},

{
id:13,
topic:"Loops",
difficulty:"Medium",
question:"Which loop executes at least once?",
options:["for","while","do while","if"],
answer:"do while"
},

{
id:14,
topic:"Arrays",
difficulty:"Easy",
question:"Array indexing starts from?",
options:["0","1","-1","10"],
answer:"0"
},

{
id:15,
topic:"Arrays",
difficulty:"Medium",
question:"Which stores multiple values of same type?",
options:["Array","Function","Pointer","Structure"],
answer:"Array"
},

{
id:16,
topic:"Strings",
difficulty:"Easy",
question:"Strings in C are stored as?",
options:["Character array","Integer","Float","Pointer only"],
answer:"Character array"
},

{
id:17,
topic:"Strings",
difficulty:"Medium",
question:"Which header file handles strings?",
options:["string.h","stdio.h","math.h","stdlib.h"],
answer:"string.h"
},

{
id:18,
topic:"Functions",
difficulty:"Easy",
question:"A function is used to?",
options:["Reuse code","Delete code","Stop program","Create errors"],
answer:"Reuse code"
},

{
id:19,
topic:"Functions",
difficulty:"Medium",
question:"Which keyword returns value from function?",
options:["return","send","give","back"],
answer:"return"
},

{
id:20,
topic:"Pointers",
difficulty:"Medium",
question:"Which symbol declares pointer?",
options:["*","&","#","@"],
answer:"*"
},

{
id:21,
topic:"Pointers",
difficulty:"Medium",
question:"Which operator gives memory address?",
options:["&","*","%","$"],
answer:"&"
},

{
id:22,
topic:"Memory",
difficulty:"Hard",
question:"Which function allocates dynamic memory?",
options:["malloc()","printf()","scanf()","main()"],
answer:"malloc()"
},

{
id:23,
topic:"Structures",
difficulty:"Medium",
question:"Which keyword creates structure?",
options:["struct","class","object","record"],
answer:"struct"
},

{
id:24,
topic:"Structures",
difficulty:"Medium",
question:"Structure can store?",
options:["Different data types","Only integers","Only characters","Only floats"],
answer:"Different data types"
},

{
id:25,
topic:"Preprocessor",
difficulty:"Easy",
question:"Which symbol starts preprocessor directive?",
options:["#","@","&","$"],
answer:"#"
},

{
id:26,
topic:"C Basics",
difficulty:"Easy",
question:"Execution starts from which function?",
options:["main()","start()","begin()","run()"],
answer:"main()"
},

{
id:27,
topic:"C Basics",
difficulty:"Easy",
question:"C language was developed by?",
options:["Dennis Ritchie","James Gosling","Guido","Bjarne"],
answer:"Dennis Ritchie"
},

{
id:28,
topic:"Operators",
difficulty:"Medium",
question:"Which operator means logical AND?",
options:["&&","||","&","!"],
answer:"&&"
},

{
id:29,
topic:"Operators",
difficulty:"Medium",
question:"Which operator means logical OR?",
options:["||","&&","|","+"],
answer:"||"
},

{
id:30,
topic:"Loops",
difficulty:"Medium",
question:"break statement does what?",
options:["Stops loop","Repeats loop","Creates variable","Prints"],
answer:"Stops loop"
},

{
id:31,
topic:"Loops",
difficulty:"Medium",
question:"continue statement does what?",
options:["Skips iteration","Ends program","Creates loop","Returns value"],
answer:"Skips iteration"
},

{
id:32,
topic:"Files",
difficulty:"Hard",
question:"Which function opens file?",
options:["fopen()","open()","file()","create()"],
answer:"fopen()"
},

{
id:33,
topic:"Files",
difficulty:"Hard",
question:"Which mode reads a file?",
options:["r","w","a","x"],
answer:"r"
},

{
id:34,
topic:"Data Types",
difficulty:"Medium",
question:"Which stores single character?",
options:["char","int","float","double"],
answer:"char"
},

{
id:35,
topic:"Data Types",
difficulty:"Medium",
question:"double stores?",
options:["Large decimal values","Characters","Integers only","Strings"],
answer:"Large decimal values"
},

{
id:36,
topic:"Arrays",
difficulty:"Medium",
question:"Array size must be?",
options:["Fixed","Random","Negative","Unlimited"],
answer:"Fixed"
},

{
id:37,
topic:"Functions",
difficulty:"Medium",
question:"Function declaration is also called?",
options:["Prototype","Loop","Array","Pointer"],
answer:"Prototype"
},

{
id:38,
topic:"Pointers",
difficulty:"Hard",
question:"NULL pointer points to?",
options:["Nothing","First element","Last element","Random"],
answer:"Nothing"
},

{
id:39,
topic:"C Basics",
difficulty:"Easy",
question:"C is a?",
options:["Programming language","Database","Browser","OS"],
answer:"Programming language"
},

{
id:40,
topic:"Compilation",
difficulty:"Medium",
question:"C code is converted by?",
options:["Compiler","Browser","Editor","Scanner"],
answer:"Compiler"
},

{
id:41,
topic:"Constants",
difficulty:"Easy",
question:"Which keyword creates constant?",
options:["const","fixed","constant","static"],
answer:"const"
},

{
id:42,
topic:"Storage",
difficulty:"Hard",
question:"static variable retains value?",
options:["Between function calls","Never","Only once","No"],
answer:"Between function calls"
},

{
id:43,
topic:"Recursion",
difficulty:"Hard",
question:"Function calling itself is?",
options:["Recursion","Loop","Pointer","Array"],
answer:"Recursion"
},

{
id:44,
topic:"Memory",
difficulty:"Hard",
question:"free() is used to?",
options:["Release memory","Allocate memory","Print","Input"],
answer:"Release memory"
},

{
id:45,
topic:"Switch",
difficulty:"Medium",
question:"switch uses?",
options:["case","if","loop","return"],
answer:"case"
},

{
id:46,
topic:"Comments",
difficulty:"Easy",
question:"Single line comment uses?",
options:["//","/*","##","--"],
answer:"//"
},

{
id:47,
topic:"Comments",
difficulty:"Medium",
question:"Multi line comment uses?",
options:["/* */","//","##","<>"],
answer:"/* */"
},

{
id:48,
topic:"Pointers",
difficulty:"Hard",
question:"Pointer stores?",
options:["Address","Value only","Text","Loop"],
answer:"Address"
},

{
id:49,
topic:"Advanced",
difficulty:"Hard",
question:"C supports?",
options:["Pointers","Classes only","HTML","SQL"],
answer:"Pointers"
},

{
id:50,
topic:"C Basics",
difficulty:"Easy",
question:"Extension of C source file is?",
options:[".c",".java",".py",".html"],
answer:".c"
}

];


export default questions;