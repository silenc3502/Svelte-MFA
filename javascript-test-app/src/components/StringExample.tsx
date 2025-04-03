export const StringExample = () => {
    let text = "JavaScript is awesome!";
    let words = text.split(" ");
    let steps = words.map((word, index) => `단어 ${index + 1}: ${word}`);

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>String 문</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <pre>{`
                let words = text.split(" ");
            `}</pre>
        </div>
    );
};
