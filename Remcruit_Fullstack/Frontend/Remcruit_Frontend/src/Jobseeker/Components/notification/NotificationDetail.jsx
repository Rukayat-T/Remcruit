import React from 'react';
import { useParams } from 'react-router-dom';

const NotificationDetail = () => {
  const { id } = useParams();

  // Replace this with my logic to fetch the notification details based on the id

  return (
    <div>
      <h2>Notification Detail</h2>
      <p>Notification ID: {id}</p>
      {/* Display the notification details here */}
    </div>
  );
};

export default NotificationDetail;
