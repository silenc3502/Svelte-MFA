export const ArrayFindExample = () => {
    let numbers = [10, 20, 30, 40];
    let found = numbers.find(num => num > 25);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `find 후: ${found}`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>find()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.find(num => num > 25);
            `}</pre>
        </div>
    );
};