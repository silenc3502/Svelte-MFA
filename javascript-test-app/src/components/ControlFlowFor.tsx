export const ControlFlowFor = () => {
    let loopResults = [];
    let steps = [];
    for (let i = 0; i < 3; i++) {
        loopResults.push(i);
        steps.push(`i = ${i} 일 때 loopResults = [${[...loopResults].join(", ")}]`);
    }
    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>for 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                for (let i = 0; i < 3; i++) {
                    loopResults.push(i);
                }
            `}</pre>
        </div>
    );
};