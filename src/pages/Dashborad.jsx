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
//     navigate('/loan-request'); // Navigate to CreateTask page
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


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiPlus, FiEdit2, FiTrash2, FiCheck, FiClock, FiList } from 'react-icons/fi';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   const handleCreateTask = () => navigate('/create-task');
//   const handleEditTask = (taskId) => navigate(`/edit-task/${taskId}`);

//   const handleDeleteTask = (taskId) => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setTasks(updatedTasks);
//   };

//   const handleStatusChange = (taskId, newStatus) => {
//     const updatedTasks = tasks.map(task => 
//       task.id === taskId ? { ...task, status: newStatus } : task
//     );
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setTasks(updatedTasks);
//   };

//   // Group tasks by status for better visualization
//   const statusGroups = {
//     'To Do': tasks.filter(task => task.status === 'To Do'),
//     'In Progress': tasks.filter(task => task.status === 'In Progress'),
//     'Completed': tasks.filter(task => task.status === 'Completed')
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'To Do': return <FiList className="text-gray-500" />;
//       case 'In Progress': return <FiClock className="text-yellow-500" />;
//       case 'Completed': return <FiCheck className="text-green-500" />;
//       default: return <FiList />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Task Dashboard</h1>
//           <button
//             onClick={handleCreateTask}
//             className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//           >
//             <FiPlus />
//             <span>Create Task</span>
//           </button>
//         </div>

//         {tasks.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
//             <h2 className="text-xl font-medium text-gray-600 mb-2">No tasks yet</h2>
//             <p className="text-gray-500 mb-4">Create your first task to get started</p>
//             <button
//               onClick={handleCreateTask}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
//             >
//               Create Task
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {Object.entries(statusGroups).map(([status, statusTasks]) => (
//               <div key={status} className="bg-white rounded-xl shadow-sm overflow-hidden">
//                 <div className={`p-4 border-b ${
//                   status === 'To Do' ? 'bg-gray-50' : 
//                   status === 'In Progress' ? 'bg-blue-50' : 
//                   'bg-green-50'
//                 }`}>
//                   <div className="flex items-center space-x-2">
//                     {getStatusIcon(status)}
//                     <h2 className="font-semibold text-gray-700">{status}</h2>
//                     <span className="ml-auto bg-white text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
//                       {statusTasks.length}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-4 space-y-4">
//                   {statusTasks.length === 0 ? (
//                     <p className="text-gray-500 text-center py-4">No tasks in this category</p>
//                   ) : (
//                     statusTasks.map(task => (
//                       <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
//                         <div className="flex justify-between items-start mb-2">
//                           <h3 className="font-medium text-gray-800">{task.title}</h3>
//                           <div className="flex space-x-2">
//                             <button 
//                               onClick={() => handleEditTask(task.id)}
//                               className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors duration-200"
//                               title="Edit"
//                             >
//                               <FiEdit2 size={16} />
//                             </button>
//                             <button 
//                               onClick={() => handleDeleteTask(task.id)}
//                               className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors duration-200"
//                               title="Delete"
//                             >
//                               <FiTrash2 size={16} />
//                             </button>
//                           </div>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-3">{task.description}</p>
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs text-gray-500">
//                             {new Date(task.createdAt).toLocaleDateString()}
//                           </span>
//                           <select
//                             value={task.status}
//                             onChange={(e) => handleStatusChange(task.id, e.target.value)}
//                             className="text-xs border rounded p-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                           >
//                             <option value="To Do">To Do</option>
//                             <option value="In Progress">In Progress</option>
//                             <option value="Completed">Completed</option>
//                           </select>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiPlus, FiEdit2, FiTrash2, FiCheck, FiClock, 
  FiList, FiFlag, FiSearch, FiFilter, FiArrowLeft, FiX 
} from 'react-icons/fi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:5000/api/todos', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(data.todos);
        setLoading(false);
      } catch (err) {
        console.error('Fetch Error:', err);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to fetch tasks.',
          icon: 'error',
          background: '#1a1a1a',
          color: '#fff'
        });
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter !== 'all' && task.status !== filter) return false;
    if (searchTerm && !task.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'createdAt') return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === 'dueDate') return new Date(a.dueDate || '') - new Date(b.dueDate || '');
    if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length,
    overdue: tasks.filter(t =>
      t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'completed'
    ).length,
  };

  const handleCreateTask = () => navigate('/loan-request');
  
  const handleEditTask = (task) => {
    setEditingTask(task._id);
    setEditFormData({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate ? moment(task.dueDate).format('YYYY-MM-DD') : ''
    });
  };

  const handleDeleteTask = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: "This will delete the task!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#ec4899'
      });
      
      if (confirm.isConfirmed) {
        const token = localStorage.getItem('token');
        const response = await axios.delete(
          `http://localhost:5000/api/todos/${id}`, 
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        
        if (response.data.success) {
          setTasks(prevTasks => prevTasks.filter(t => t._id !== id));
          Swal.fire({
            title: 'Deleted!',
            text: 'Task has been deleted.',
            icon: 'success',
            background: '#1a1a1a',
            color: '#fff'
          });
        }
      }
    } catch (err) {
      console.error('Delete Error:', err);
      Swal.fire({
        title: 'Error!',
        text: err.response?.data?.message || 'Failed to delete task',
        icon: 'error',
        background: '#1a1a1a',
        color: '#fff'
      });
    }
  };
  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'high': return <FiFlag className="text-red-500" />;
      case 'medium': return <FiFlag className="text-yellow-500" />;
      case 'low': return <FiFlag className="text-green-500" />;
      default: return <FiFlag />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-pink-400">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Edit Task Modal */}
      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            <button 
              onClick={() => setEditingTask(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FiX className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-pink-400 mb-6">Edit Task</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={editFormData.title}
                  onChange={(e) => setEditFormData({...editFormData, title: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Description</label>
                <textarea
                  value={editFormData.description}
                  onChange={(e) => setEditFormData({...editFormData, description: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  rows="3"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Status</label>
                  <select
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({...editFormData, status: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Priority</label>
                  <select
                    value={editFormData.priority}
                    onChange={(e) => setEditFormData({...editFormData, priority: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Due Date</label>
                <input
                  type="date"
                  value={editFormData.dueDate}
                  onChange={(e) => setEditFormData({...editFormData, dueDate: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setEditingTask(null)}
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateTask}
                  className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition flex items-center gap-2"
                >
                  <FiCheck /> Update Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
              Task Dashboard
            </h1>
            <p className="text-gray-400">{moment().format('dddd, MMMM Do YYYY')}</p>
          </div>
          <button
            onClick={handleCreateTask}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-pink-400/50 transition-all duration-500 transform hover:-translate-y-1"
          >
            <FiPlus className="h-5 w-5" /> Create Task
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-pink-400 rounded-xl bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-inner transition-all duration-300"
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute left-3 top-3.5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-pink-400 rounded-xl bg-black text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-inner transition-all duration-300"
            >
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 border-2 border-pink-400 rounded-xl bg-black text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-inner transition-all duration-300"
          >
            <option value="createdAt">Sort by Created</option>
            <option value="dueDate">Sort by Due Date</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {Object.entries(stats).map(([key, value], i) => (
            <div key={i} className="bg-gradient-to-b from-gray-900 to-black p-4 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14">
                  <CircularProgressbar
                    value={(value / Math.max(stats.total, 1)) * 100}
                    text={value.toString()}
                    styles={buildStyles({
                      textColor: '#fff',
                      pathColor: key === 'completed' ? '#10B981' : 
                                 key === 'inProgress' ? '#3B82F6' : 
                                 key === 'pending' ? '#F59E0B' : 
                                 key === 'overdue' ? '#EF4444' : '#EC4899',
                      trailColor: '#1f2937'
                    })}
                  />
                </div>
                <div>
                  <p className="text-gray-400 capitalize">{key}</p>
                  <p className="text-xl font-bold">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Task List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map(task => (
            <div 
              key={task._id} 
              className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-pink-400">{task.title}</h2>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{task.description}</p>
              
              <div className="flex items-center gap-2 text-sm mb-2">
                {getPriorityIcon(task.priority)}
                <span className="capitalize">{task.priority} priority</span>
              </div>
              
              {task.dueDate && (
                <div className="flex items-center gap-2 text-sm text-pink-300 mb-4">
                  <FiClock className="h-4 w-4" />
                  <span>Due: {moment(task.dueDate).format('MMM D, YYYY')}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800">
                <button 
                  onClick={() => handleEditTask(task)} 
                  className="text-pink-400 hover:text-pink-600 transition-all duration-300 flex items-center gap-1"
                >
                  <FiEdit2 className="h-5 w-5" />
                  <span>Edit</span>
                </button>
                <button 
                  onClick={() => handleDeleteTask(task._id)} 
                  className="text-red-400 hover:text-red-600 transition-all duration-300 flex items-center gap-1"
                >
                  <FiTrash2 className="h-5 w-5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;