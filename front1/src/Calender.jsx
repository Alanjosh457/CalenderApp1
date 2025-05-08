import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Calender.module.css';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = ['23', '24', '25', '26', '27', '28', '1'];
const times = Array.from({ length: 16 }, (_, i) => `${i}AM`).concat(['12PM', '1PM', '2PM', '3PM']);

const events = [
  { day: 2, startHour: 7, duration: 2, title: 'Project Deadline - Charlie', user: 'Brine', color: 'pink' },
  { day: 2, startHour: 11, duration: 1, title: 'Project Deadline - Alice', user: '', color: 'blue' },
  { day: 2, startHour: 12, duration: 1, title: 'Yoga Class - Alice', user: '', color: 'blue' },
  { day: 3, startHour: 2, duration: 2, title: 'Team Standup - Bob', user: 'Brine', color: 'pink' },
  { day: 4, startHour: 4, duration: 2, title: 'Lunch Break - Charlie', user: 'Brine', color: 'pink' },
  { day: 5, startHour: 6, duration: 4, title: 'Weekend Trip - Emma', user: 'Brine', color: 'pink' },
];

const Calender = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Calendar</h2>
        <button className={styles.newEvent}>+ New event</button>
      </div>

      <div className={styles.tabs}>
        <span onClick={() => navigate('/daily')} className={styles.tab}>Daily</span>
        <span className={`${styles.activeTab} ${styles.tab}`}>Weekly</span>
        <span className={styles.tab}  onClick={() => navigate('/monthly')}>Monthly</span>
      </div>

      <div className={styles.calendar}>
        <div className={styles.times}>
          {times.map((time, i) => (
            <div key={i} className={styles.timeSlot}>{time}</div>
          ))}
        </div>

        <div className={styles.week}>
          <div className={styles.daysHeader}>
            {days.map((day, i) => (
              <div key={i} className={`${styles.day} ${i === 2 ? styles.activeDay : ''}`}>
                <span>{day}</span>
                <span>{dates[i]}</span>
              </div>
            ))}
          </div>

          <div className={styles.dayColumns}>
            {days.map((_, dayIndex) => (
              <div key={dayIndex} className={styles.dayColumn}>
                {events
                  .filter(event => event.day === dayIndex)
                  .map((event, index) => (
                    <div
                      key={index}
                      className={`${styles.eventCard} ${styles[event.color]}`}
                      style={{
                        top: `${event.startHour * 60}px`,
                        height: `${event.duration * 60}px`
                      }}
                    >
                      <span className={styles.icon}>🎵</span>
                      <div className={styles.title}>{event.title}</div>
                      {event.user && <div className={styles.user}>{event.user}</div>}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
