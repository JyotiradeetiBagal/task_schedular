
# Task Scheduler

A responsive task scheduler web application built with HTML, CSS, JavaScript, and React that helps users manage their tasks efficiently by allowing task prioritization, scheduling by date, and tracking of completed and upcoming tasks.

## Features

- **Add Tasks with Priority**: Users can add tasks with three priority levels:
  - Low
  - Medium
  - High
- **Task Scheduling by Date**: Tasks can be scheduled with a specific due date.
- **Task Status Management**:
  - Mark tasks as done, and they will be moved to the "Completed Task" section.
  - Delete tasks, and they will be removed from both the "Upcoming" and "Completed" sections.
  - Incomplete tasks will be shown in the "Upcoming Task" section for easy tracking.
  
## Sections

1. **Upcoming Tasks**: Displays tasks that are pending and not yet completed.
2. **Completed Tasks**: Displays tasks that have been marked as done.
3. **Deleted Tasks**: Deleted tasks are not displayed in either section.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/JyotiradeetiBagal/task_schedular.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd task-scheduler
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Usage

- Add tasks with a description, priority, and due date.
- Manage tasks by marking them as done, viewing upcoming tasks, or deleting them.
- Navigate between the **Upcoming Task** and **Completed Task** sections to view the status of your tasks.
