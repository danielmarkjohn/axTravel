import React, { useEffect, useState } from 'react';
import { findDocuments, insertDocument } from '../services/databaseService';

interface User {
  name: string;
  email: string;
}

const ExampleMongoComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await findDocuments<User>('users');
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async () => {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com'
    };
    
    try {
      await insertDocument('users', newUser);
      setUsers([...users, newUser]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">MongoDB Example</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <button 
            onClick={addUser}
            className="bg-primary text-white px-4 py-2 rounded mb-4"
          >
            Add User
          </button>
          <ul className="list-disc pl-5">
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ExampleMongoComponent;