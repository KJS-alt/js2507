import Car from "./Car"

function Garage() {
    return (
        <>
            <h1>내 차고에는 어떤 차가 있을까?</h1>
            <Car color="red" name="1" />
            <Car color="blue" name="2" />
            <Car color="green" name="3" />
        </>
    )
}
export default Garage