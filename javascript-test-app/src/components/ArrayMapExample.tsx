export const ArrayMapExample = () => {
    let numbers = [1, 2, 3, 4];
    let doubled = numbers.map(num => num * 2);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `map 후: [${doubled.join(", " )}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>map()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.map(num => num * 2);
            `}</pre>
        </div>
    );
};