export const MapExample = () => {
    let numbers: number[] = [1, 2, 3, 4, 5];
    let results: number[] = numbers.map(num => num * 2);
    let steps: string[] = numbers.map((num, index) => `num = ${num} → 결과 = ${results[index]}`);

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>map 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                let results = numbers.map(num => num * 2);
            `}</pre>
        </div>
    );
};
