export const TypeCoercion = () => {
    const stringConcat = (5 as any) + "10"; // TypeScript에서 허용되도록 처리
    const numericConversion = Number("5") - 2;
    const booleanConversion = Boolean("hello");

    return (
        <div style={{marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px"}}>
            <h3>타입 변환</h3>
            <pre>{`
                console.log(5 + "10");   // ${stringConcat}
                console.log(Number("5") - 2);   // ${numericConversion}
                console.log(Boolean("hello")); // ${booleanConversion}
            `}</pre>
        </div>
    );
};
