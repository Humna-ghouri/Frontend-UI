

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CreateTask() {
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

//     // Get existing tasks from localStorage
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
//     // Create new task
//     const newTask = {
//       id: Date.now().toString(),
//       title,
//       description,
//       status: 'To Do',
//       createdAt: new Date().toISOString()
//     };

//     // Save to localStorage
//     localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    
//     // Redirect to home page after task creation
//     navigate('/');
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
// }

// export default CreateTask;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlusCircle, FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Both title and description are required');
      return;
    }

    // Get existing tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Create new task
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status: 'To Do',
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    
    // Show success message
    Swal.fire({
      title: 'Task Created!',
      text: 'Your task has been added successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3b82f6',
    }).then(() => {
      // Redirect to home after user clicks OK
      navigate('/');
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => navigate('/')}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              <FiArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Create New Task</h1>
            <div className="w-6"></div> {/* Spacer for alignment */}
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter task title"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                rows="5"
                placeholder="Enter detailed description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              <FiPlusCircle className="h-5 w-5" />
              <span>Create Task</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;