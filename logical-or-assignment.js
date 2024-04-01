const task1 = { description: "Learn JavaScript", priority: "High" };
console.log("Task 1 priority before OR assignment: ", task1.priority); // High
task1.priority ||= "Low"; // equivalent to task.priority = task.priority || "Low"
console.log("Task 1 priority after OR assignment: ", task1.priority); // High

const task2 = { description: "Learn JavaScript" };
console.log("Task 2 priority before OR assignment: ", task2.priority); // undefined
task2.priority ||= "Low"; // equivalent to task.priority = task.priority || "Low"
console.log("Task 2 priority after OR assignment: ", task2.priority); // Low
