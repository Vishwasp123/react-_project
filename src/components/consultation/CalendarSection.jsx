import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useMemo } from "react";
import "./CalendarSection.css"

/* 🔹 Helper function: GMT offset calculate */
const getGMTOffset = (timeZone) => {
  const now = new Date();

  const tzDate = new Date(
    now.toLocaleString("en-US", { timeZone })
  );

  const diffMinutes = (tzDate - now) / (1000 * 60);
  const offsetMinutes = Math.round(diffMinutes);

  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absMinutes = Math.abs(offsetMinutes);

  const hours = String(Math.floor(absMinutes / 60)).padStart(2, "0");
  const minutes = String(absMinutes % 60).padStart(2, "0");

  return `GMT${sign}${hours}:${minutes}`;
};

const CalendarSection = ({ onDateSelect }) => {
  const now = new Date();
  const after24hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  // User system timezone
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // All timezones with GMT offset
  const allTimeZones = useMemo(() => {
    return Intl.supportedValuesOf("timeZone")
      .map((tz) => ({
        value: tz,
        label: `${tz} (${getGMTOffset(tz)})`
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const [timeZone, setTimeZone] = useState(userTimeZone);

  return (
    <>
      {/* Heading */}
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "600",
          marginBottom: "16px"
        }}
      >
        Select a Date & Time
      </h1>

      {/* Calendar */}
      <div className="calendar-wrapper">
        <Calendar
          minDate={after24hours}
          onClickDay={(date) => onDateSelect(date)}
        />
      </div>
            

      {/* Time Zone Section */}
      <div className="timezone-text" style={{ marginTop: "20px" }}>
        <h2
          style={{
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "6px"
          }}
        >
          Time Zone
        </h2>

        <select
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        >
          {allTimeZones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CalendarSection;
