export const ControlFlowWhile = () => {
    let i = 0;
    let results = [];
    let steps = [];
    while (i < 3) {
        results.push(i);
        steps.push(`i = ${i} 일 때 results = [${[...results].join(", ")}]`);
        i++;
    }

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>while 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                let i = 0;
                while (i < 3) {
                    results.push(i);
                    i++;
                }
            `}</pre>
        </div>
    );
};