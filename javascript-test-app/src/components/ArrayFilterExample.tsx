export const ArrayFilterExample = () => {
    let numbers = [1, 2, 3, 4];
    let evens = numbers.filter(num => num % 2 === 0);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `filter 후: [${evens.join(", " )}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>filter()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.filter(num => num % 2 === 0);
            `}</pre>
        </div>
    );
};