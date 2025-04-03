export const ArrayEveryExample = () => {
    let numbers = [2, 4, 6, 8];
    let allEven = numbers.every(num => num % 2 === 0);
    let steps = [`초기 배열: [${numbers.join(", ")}]`, `every 결과: ${allEven}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>every()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.every(num => num % 2 === 0);
            `}</pre>
        </div>
    );
};