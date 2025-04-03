export const ArraySortExample = () => {
    let numbers = [3, 1, 4, 1, 5, 9];
    let sorted = [...numbers].sort((a, b) => a - b);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `sort 후: [${sorted.join(", " )}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>sort()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.sort((a, b) => a - b);
            `}</pre>
        </div>
    );
};
