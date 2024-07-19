
interface Props{
  title:string;
  desc:string;
}
const Card = (props:Props) => {

  return (
    <div className='card' id="smallcard">
      <img src="src\assets\hero-image\boy.jpg" alt="" />
      <span id="post">{props.title}</span>
      <p className="descpost">{props.desc}</p> 
    </div>
  )
}

export default Card