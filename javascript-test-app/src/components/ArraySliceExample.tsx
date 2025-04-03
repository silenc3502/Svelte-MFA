export const ArraySliceExample = () => {
    let numbers = [1, 2, 3, 4, 5];
    let sliced = numbers.slice(1, 4);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `slice(1,4) 후: [${sliced.join(", " )}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>slice()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.slice(1, 4);
            `}</pre>
        </div>
    );
};