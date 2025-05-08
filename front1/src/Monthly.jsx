import React from 'react';
import styles from './Monthly.module.css';
import { useNavigate } from 'react-router-dom';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const calendarDates = [
  [26, 27, 28, 29, 30, 31, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 1],
];

const eventIcons = {
  25: ['🎵', '🏐'],
  26: ['🪑', '🎵'],
  27: ['🎵', '🪑'],
  28: ['🎵', '🪑'],
  1: ['🎵'],
};





const Monthly = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.monthlyContainer}>
      <div className={styles.header}>
        <h2>Calendar</h2>
        <button className={styles.newEvent}>+ New event</button>
      </div>

      <div className={styles.viewTabs}>
        <button  onClick={() => navigate('/daily')}>Daily</button>
        <button   onClick={() => navigate('/')}>Weekly</button>
        <button className={styles.active} >Monthly</button>
      </div>

      <div className={styles.monthHeader}>
        <h3>February 2025</h3>
        <div className={styles.navButtons}>
          <span>{'<'}</span>
          <span>{'>'}</span>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayHeader}>{day}</div>
        ))}

        {calendarDates.flat().map((date, idx) => {
          const isPrevMonth = idx < 5 && date > 7;
          const isNextMonth = idx >= 28 && date < 7;
          const dayNumber = date;
        
          return (
            <div
              key={idx}
              className={`${styles.dateCell} ${
                isPrevMonth || isNextMonth ? styles.inactive : ''
              }`}
            >
              <div className={styles.dateNumber}>{dayNumber}</div>
              <div className={styles.icons}>
                {eventIcons[dayNumber]?.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Monthly;
