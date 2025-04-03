export const ArrayFindIndexExample = () => {
    let numbers = [10, 20, 30, 40];
    let index = numbers.findIndex(num => num > 25);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `findIndex 후: ${index}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>findIndex()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.findIndex(num => num > 25);
            `}</pre>
        </div>
    );
};