import { useNavigate } from "react-router-dom";
const DUMMY_SLOTS = [
  "1:30am",
  "2:00am",
  "2:30am",
  "3:00am",
  "3:30am",
  "4:00am",
  "4:30am"
];

const TimeSlotSection = ({date}) => {

    const navigate = useNavigate(); 

    const handleSlotClick = (slot) => {
    // later yahan API / data pass kar sakte ho
    navigate("/", {
      state: {
        selectedDate: date,
        selectedTime: slot
      }
    });
  };

  return (
   <>
   <h4 className='date-title'>
    {date.toLocaleDateString("en-IN", {
        weekday: "long",
        month: "long",
        day: "numeric"
    })}
   </h4>

   <div className='slot-list'>
        {DUMMY_SLOTS.map((slot) => (
            <button
            key={slot}
            className="slot-btn"
            onClick={() => handleSlotClick(slot)}
            >
                {slot}

            </button>
        ))}
   </div>
   </>
  )
}

export default TimeSlotSection
