# taskRemit
Overview
TaskRemit is a simple Kanban board application designed to help manage project tasks efficiently. The application allows you to create, organize, and track tasks through different stages of progress: "Not Yet Started", "In Progress", and "Completed". TaskRemit also includes features for color-coding tasks based on deadlines, ensuring you stay on top of your project timelines.

Features
Task Columns: Tasks are displayed in three columns representing different progress states: "Not Yet Started", "In Progress", and "Completed".
Deadline Color Coding: Tasks are color-coded to indicate their deadline status:
Yellow: Tasks nearing the deadline.
Red: Overdue tasks.
Add New Tasks: Add new tasks using a modal dialog where you can enter the title, description, and deadline.
LocalStorage Persistence: All task properties are saved in localStorage, ensuring that your tasks persist even after refreshing the page.
Drag and Drop: Tasks can be dragged and dropped between columns to update their progress state. The new state is saved and persists after refreshing the page.
Delete Tasks: Tasks can be deleted, and once removed, they do not reappear after refreshing the page.
Usage
Opening the Task Board
When you open the TaskRemit application, you will see the list of project tasks displayed in columns representing their progress state: "Not Yet Started", "In Progress", and "Completed".

Viewing Tasks
Each task is color-coded to indicate its deadline status:

Yellow: Tasks that are nearing their deadline.
Red: Tasks that are overdue.
Adding a New Task
Click on the "Add Task" button to open the modal dialog.
Enter the task title, description, and deadline date.
Click the "Save Task" button to add the task to the board. The task properties will be saved in localStorage.
Updating Task Progress
Drag a task card to the desired progress column (Not Yet Started, In Progress, Completed).
The task's progress state is updated and will remain in the new column after refreshing the page.
Deleting a Task
Click the "Delete" button on the task card you want to remove.
The task is removed from the task board and will not be added back after refreshing the page.
Persisting Tasks
All tasks and their properties are saved in localStorage, ensuring that your tasks persist even after refreshing the page.
