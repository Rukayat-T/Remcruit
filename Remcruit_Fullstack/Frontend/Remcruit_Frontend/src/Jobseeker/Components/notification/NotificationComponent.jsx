import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSignedIn from '../navbarSignedin/NavbarSignedIn';
import './notification.css';

const NotificationComponent = () => {
  const notifications = [
    {
      id: 1,
      title: 'Interview Invitation',
      message: 'Congratulations! You have been accepted for an interview.',
    },
    {
      id: 2,
      title: 'Incomplete Account Information',
      message: 'Please complete your account information to proceed.',
    },
    {
      id: 3,
      title: 'Application Update',
      message: 'There is an update in your application status.',
    },
  ];

  return (
    <div className="notification-component">
      {/* <NavbarSignedIn /> */}
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <Link to={`/notifications/${notification.id}`}>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
            </Link>
            {/* <hr className="notification-divider" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationComponent;
