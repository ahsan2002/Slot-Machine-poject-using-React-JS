import SlotMach from "./SlotMach";
const App = () => {
    return <>
    <h1 className="heading_style" > 🎰 Welcome To <strong>Slot Machine Game</strong>🎰 </h1>
    
    <div className="mydiv">
        <SlotMach x="❤" y="❤" z="❤"></SlotMach>
        <hr/> <hr />
        <SlotMach x="🖤" y="❤" z="😃"></SlotMach>
        <hr/><hr />
        <SlotMach x="💑" y="😎" z="👩‍❤️‍👩"></SlotMach>
        <hr/><hr />
        <SlotMach x="☹" y="😎" z="😑"></SlotMach>
    </div>
    </>
}

export default App;