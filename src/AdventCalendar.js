import { useState, useEffect } from "react";
import { dataCalendar } from "./dataCalendar";

function AdventCalendar() {
  const [days, setDays] = useState(dataCalendar);

  useEffect(() => {
    const storedData = localStorage.getItem("adventCalendarData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDays(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("adventCalendarData", JSON.stringify(days));
  }, [days]);

  const toggleContent = (id) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === id ? { ...day, showTask: !day.showTask } : day
      )
    );
  };

  return (
    <div className="AdventCalendar-container">
      <div className="calendar">
        {days.map((element) => {
          const { id, image, task, showTask } = element;

          return (
            <div key={id}>
              <div>
                <div className="calendar-day">
                  {!showTask && (
                    <img src={image} width="200px" alt="calendar-day" />
                  )}
                  {showTask && <p className="calendar-task">{task}</p>}

                  <button className="CalendarBtn" onClick={() => toggleContent(id)}>
                    {showTask ? "Hide Task" : "Show Task"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdventCalendar;
