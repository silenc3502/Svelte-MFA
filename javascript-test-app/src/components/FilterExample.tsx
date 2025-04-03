export const FilterExample = () => {
    let numbers: number[] = [1, 2, 3, 4, 5];
    let results: number[] = numbers.filter(num => num % 2 === 0);
    let steps: string[] = numbers.map(num => `num = ${num} → ${num % 2 === 0 ? "포함" : "제외"}`);

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>filter 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                let results = numbers.filter(num => num % 2 === 0);
            `}</pre>
        </div>
    );
};
