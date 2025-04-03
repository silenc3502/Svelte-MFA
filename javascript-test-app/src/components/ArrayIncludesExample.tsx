export const ArrayIncludesExample = () => {
    let numbers = [10, 20, 30, 40];
    let hasValue = numbers.includes(20);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `includes(20) 결과: ${hasValue}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>includes()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.includes(20);
            `}</pre>
        </div>
    );
};