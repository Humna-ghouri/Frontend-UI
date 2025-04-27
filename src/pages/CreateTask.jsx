// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CreateTask = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title || !description) {
//       setError('Both title and description are required');
//       return;
//     }

//     // Create new task (example: saving to localStorage)
//     const newTask = {
//       id: Date.now().toString(),
//       title,
//       description,
//       status: 'To Do',
//       createdAt: new Date().toISOString()
//     };

//     // Save to localStorage (or database)
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     // Redirect to Dashboard after task creation
//     navigate('/dashboard');
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Create New Task</h1>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="Task title"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 border rounded"
//             rows="4"
//             placeholder="Task description"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Create Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
