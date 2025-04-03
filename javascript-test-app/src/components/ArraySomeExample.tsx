export const ArraySomeExample = () => {
    let numbers = [1, 3, 5, 7];
    let hasEven = numbers.some(num => num % 2 === 0);
    let steps = [`초기 배열: [${numbers.join(", ")}]`, `some 결과: ${hasEven}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>some()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.some(num => num % 2 === 0);
            `}</pre>
        </div>
    );
};