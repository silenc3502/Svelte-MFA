export const ControlFlowSwitch = () => {
    let day = Math.floor(Math.random() * 7) + 1;
    let dayName;
    switch (day) {
        case 1: dayName = "월요일"; break;
        case 2: dayName = "화요일"; break;
        case 3: dayName = "수요일"; break;
        case 4: dayName = "목요일"; break;
        case 5: dayName = "금요일"; break;
        case 6: dayName = "토요일"; break;
        case 7: dayName = "일요일"; break;
        default: dayName = "알 수 없음";
    }

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>switch 문</h3>
            <p>랜덤 day 값: {day}</p>
            <p>결과: {dayName}</p>
            <pre>{`
                let day = ${day};
                switch (day) {
                    case 1: console.log("월요일"); break;
                    case 2: console.log("화요일"); break;
                    case 3: console.log("수요일"); break;
                    case 4: console.log("목요일"); break;
                    case 5: console.log("금요일"); break;
                    case 6: console.log("토요일"); break;
                    case 7: console.log("일요일"); break;
                    default: console.log("알 수 없음");
                }
            `}</pre>
        </div>
    );
};