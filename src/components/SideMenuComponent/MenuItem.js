export default function MenuItem(props){
    //console.log(item)
    return (
        <div className='d-flex my-3'>
      <div style={{width:30, height:30}}>
         {props.item.icon}
         </div>
         
    <p className='mx-3' style ={{fontSize:20, color:"black"}}>{props.item.name}</p>
    </div>
    )
}