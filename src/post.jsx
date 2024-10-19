
export default function Post({name}){
    const {id,title,body} =name
return(
<div style={{border:"2px solid purple",padding:"10px",margin:"20px",borderRadius:"10px"}}>
    <h3>id:{id}</h3>
   
    <h3>tittle:{title}</h3>
    <h3>body:{body}</h3>
</div>

)
}