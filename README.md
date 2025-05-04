For better app performance i have preferred to use React + Vite

After clone the repo use below commant to load dependencies - 
   npm install 

To start/run the app, use- 
   npm run dev 

Self-Evaluation Document:
a. Half-Page Summary
       This project is a responsive Kanban-style task management board built using React, react-dnd, and Axios for API integration. It features three columns ("To Do", "In Progress", "Done"), allows users to drag and drop tasks between columns, and supports task creation via a modal. The board fetches tasks from a placeholder API and displays them dynamically. While the drag-and-drop and API integration work well, the styling could be further polished for larger screens, and task editing is not yet implemented.

b. Self-Criticism
    I. Code structure needs some cleanup (e.g., duplicated components, misplaced export statements).

    II. Some parts of the UI could be more mobile-friendly (e.g., modal behavior on small screens).

    III. Lack of error boundaries or loading states for API calls.

    IV. CSS is not modular or scoped per component, which can cause conflicts in larger apps.

c. Improvements
Given more time, I would:

     I. Refactor and modularize components for better reusability and separation of concerns.

    II. Add task editing, deletion, and reordering.

    III. Implement loading indicators and error messages for API calls.

     IV. Improve accessibility and keyboard navigation.

Add unit tests for core components and services.


d. Technology Rating
      I.React: 9/10
     II. javaScript
    III. React DnD: 7/10
     IV. Axios/API integration: 9/10
      V. CSS/Responsiveness: 8/10
