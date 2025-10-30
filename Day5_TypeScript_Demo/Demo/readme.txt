Step 1: Creating a folder with below files 
    person.ts 
    index.html 
    main.ts 
    tsconfig.json 
Step 2: After compiling above ts file we will get corresponding JS file 
    main.js



// in order to run main.js in html we have to do following change in above json properties
// 1. change "module" to "none" from "commonjs"
// 2.Use <script type="module" src="dis/main.js"></script> in html file to include the compiled js file 
//Addon task :
//Modify Student so skills is public  and use spread operator to clone student object and add new skill to it. 
//Try to change p.institute = "New Institute" and see the error.( institute is readonly property)
//Add a static method to Student class that returns total number of students created till now.
//Create another class Instructor that extends Person and has additional properties like teach() etc or subject and experience (in years).