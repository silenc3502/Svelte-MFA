export const ContinueExample = () => {
    let results: number[] = [];
    let steps: string[] = [];

    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            steps.push(`i = ${i} → continue 실행 (건너뛰기)`);
            continue;
        }
        results.push(i);
        steps.push(`i = ${i} → results = [${results.join(", ")}]`);
    }

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>continue 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                for (let i = 1; i <= 5; i++) {
                    if (i === 3) continue;
                    results.push(i);
                }
            `}</pre>
        </div>
    );
};
