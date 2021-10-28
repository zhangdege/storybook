import AP_Menu from "../stories/components/AP_Menu"
import { Button } from '../stories/components/Buttons'
import { Svg } from "../stories/components/HeadmenuImg"
const Home = () => {
  // head_menu animation
  return (
    <div style={{
      backgroundColor: "#f4f4f4f4", color: "white", fill: "white", height: "500px",
    }}>
      <Button onClick={() => { console.log( "normal!" ) }}>normal</Button>
      <Button primary onClick={() => { console.log( "primary!" ) }}>primary</Button>
      <Button warning onClick={() => { console.log( "warning!" ) }}>warning</Button>
      <Button danger onClick={() => { console.log( "danger!" ) }}>danger</Button>
      <Svg src="head_menu.svg" style={{ width: "50px", fill: "white" }} />
      <Svg src="head_menu.svg" onClick={() => {
        console.log( "change menu!" );
      }} style={{ width: "50px", fill: "green", background: "red", border: "1px solid red" }}></Svg>
      <AP_Menu></AP_Menu>
    </div>
  )
}
export default Home