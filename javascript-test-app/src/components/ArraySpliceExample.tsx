export const ArraySpliceExample = () => {
    let numbers = [1, 2, 3, 4, 5];
    let spliced = [...numbers];
    spliced.splice(2, 1, 99);
    let steps = [`초기 배열: [${numbers.join(", " )}]`, `splice(2,1,99) 후: [${spliced.join(", " )}]`];

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>splice()</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                numbers.splice(2, 1, 99);
            `}</pre>
        </div>
    );
};