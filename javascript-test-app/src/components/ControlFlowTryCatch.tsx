export const ControlFlowTryCatch = () => {
    let errorMessage: string;

    try {
        throw new Error("에러 발생!");
    } catch (error) {
        if (error instanceof Error) {
            errorMessage = error.message;
        } else {
            errorMessage = "알 수 없는 에러 발생";
        }
    } finally {
        console.log("에러 처리 완료");
    }

    return (
        <div style={{ marginBottom: "16px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>try-catch 문</h3>
            <p>에러 메시지:</p>
            <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
            <pre>{`
                try {
                    throw new Error("에러 발생!");
                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message);
                    } else {
                        console.log("알 수 없는 에러 발생");
                    }
                } finally {
                    console.log("에러 처리 완료");
                }
            `}</pre>
        </div>
    );
};
