// 컴포넌트 구성부
function Car(prop) {
    return (
        <>
            <h2>안녕.. 마이 빵빵이의 색상은 {prop.color}</h2>
            <p>--{prop.name}--우리도 안전운전~~</p>
        </>
    )
}
export default Car