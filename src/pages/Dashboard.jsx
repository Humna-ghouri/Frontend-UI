// // src/pages/Dashboard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleCreateTask = () => {
//     navigate('/create-task'); // Navigate to CreateTask page
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome to your Dashboard!</p>

//       <button
//         onClick={handleCreateTask}
//         className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//       >
//         Create New Task
//       </button>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch tasks from localStorage
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   const handleCreateTask = () => {
//     navigate('/create-task'); // Navigate to CreateTask page
//   };

//   const handleDeleteTask = (taskId) => {
//     // Remove task from localStorage
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setTasks(updatedTasks); // Update the state
//   };

//   const handleStatusChange = (taskId, newStatus) => {
//     // Update task status
//     const updatedTasks = tasks.map(task => 
//       task.id === taskId ? { ...task, status: newStatus } : task
//     );
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setTasks(updatedTasks); // Update the state
//   };

//   const handleEditTask = (taskId) => {
//     // Redirect to Edit Task page with taskId
//     navigate(`/edit-task/${taskId}`);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome to your Dashboard!</p>

//       <button
//         onClick={handleCreateTask}
//         className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//       >
//         Create New Task
//       </button>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
//         {tasks.length === 0 ? (
//           <p>No tasks available.</p>
//         ) : (
//           <ul className="space-y-4">
//             {tasks.map((task) => (
//               <li key={task.id} className="p-4 border rounded shadow-md">
//                 <h2 className="text-xl font-semibold">{task.title}</h2>
//                 <p>{task.description}</p>
//                 <div className="flex justify-between items-center">
//                   <p className="text-sm text-gray-500">Status: {task.status}</p>
//                   <div className="space-x-2">
//                     <button
//                       onClick={() => handleEditTask(task.id)}
//                       className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteTask(task.id)}
//                       className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                     <select
//                       value={task.status}
//                       onChange={(e) => handleStatusChange(task.id, e.target.value)}
//                       className="p-1 border rounded"
//                     >
//                       <option value="To Do">To Do</option>
//                       <option value="In Progress">In Progress</option>
//                       <option value="Completed">Completed</option>
//                     </select>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiCheck, FiClock, FiList } from 'react-icons/fi';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleCreateTask = () => navigate('/create-task');
  const handleEditTask = (taskId) => navigate(`/edit-task/${taskId}`);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Group tasks by status for better visualization
  const statusGroups = {
    'To Do': tasks.filter(task => task.status === 'To Do'),
    'In Progress': tasks.filter(task => task.status === 'In Progress'),
    'Completed': tasks.filter(task => task.status === 'Completed')
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'To Do': return <FiList className="text-gray-500" />;
      case 'In Progress': return <FiClock className="text-yellow-500" />;
      case 'Completed': return <FiCheck className="text-green-500" />;
      default: return <FiList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Task Dashboard</h1>
          <button
            onClick={handleCreateTask}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            <FiPlus />
            <span>Create Task</span>
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-xl font-medium text-gray-600 mb-2">No tasks yet</h2>
            <p className="text-gray-500 mb-4">Create your first task to get started</p>
            <button
              onClick={handleCreateTask}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Create Task
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(statusGroups).map(([status, statusTasks]) => (
              <div key={status} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className={`p-4 border-b ${
                  status === 'To Do' ? 'bg-gray-50' : 
                  status === 'In Progress' ? 'bg-blue-50' : 
                  'bg-green-50'
                }`}>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(status)}
                    <h2 className="font-semibold text-gray-700">{status}</h2>
                    <span className="ml-auto bg-white text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {statusTasks.length}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {statusTasks.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">No tasks in this category</p>
                  ) : (
                    statusTasks.map(task => (
                      <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-800">{task.title}</h3>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handleEditTask(task.id)}
                              className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
                              title="Edit"
                            >
                              <FiEdit2 size={16} />
                            </button>
                            <button 
                              onClick={() => handleDeleteTask(task.id)}
                              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors duration-200"
                              title="Delete"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {new Date(task.createdAt).toLocaleDateString()}
                          </span>
                          <select
                            value={task.status}
                            onChange={(e) => handleStatusChange(task.id, e.target.value)}
                            className="text-xs border rounded p-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;