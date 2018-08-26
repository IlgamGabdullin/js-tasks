# Javascripts tasks solving

### Description 
This is a repository that contains solutions for tasks from codewars (by now) and tests for them.

### Structure
```
  src/
  |__ index.html              // index file for executing code in browser
  |__ javascript/             // set of js functions and classes
      |__ main.js             // entry point
      |__ task-name/          // single task's folder
        |__ TaskName.js       // class/function with solution
        |__ TaskName.test.js  // tests for task
        |__ README.md         // task description
        |__ index.js          // imports
      ...
  
```

### Commands

For development
```
npm run dev
```

For tests
```
npm run test
```

For tests with watching

```
npm run test:watch
```