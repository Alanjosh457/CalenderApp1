import React from 'react';
import styles from './Daily.module.css';
import { useNavigate } from 'react-router-dom';

const Daily = () => {
  const events = [
    {
      id: 1,
      time: '8:00 AM - 4:00 PM',
      title: 'Project Deadline - Charlie',
      user: 'Brine',
      icon: '🎵',
    },
    {
      id: 2,
      time: '10:00 PM - 5:00 AM',
      title: 'Project Deadline - Charlie',
      user: 'Brine',
      icon: '📝',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Calendar</h1>
        <button className={styles.newEvent}>+ New event</button>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>Daily</button>
        <button className={styles.tab} onClick={() => navigate('/')}>Weekly</button>
        <button className={styles.tab}  onClick={() => navigate('/monthly')}>Monthly</button>
      </div>

      <div className={styles.dates}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
          const date = 23 + i;
          const isActive = i === 2; // Tuesday
          return (
            <div
              key={day}
              className={`${styles.date} ${isActive ? styles.activeDate : ''}`}
            >
              <div>{day}</div>
              <div>{date}</div>
              {isActive && <div className={styles.dot}></div>}
            </div>
          );
        })}
      </div>

      {events.map((event) => (
        <div key={event.id} className={styles.card}>
          <div className={styles.time}>{event.time}</div>
          <div className={styles.titleLine}>
            <span className={styles.icon}>{event.icon}</span>
            {event.title}
            <span className={styles.menu}>⋮</span>
          </div>
          <div className={styles.user}>🌟 {event.user}</div>
        </div>
      ))}
    </div>
  );
};

export default Daily;
