export default function Comment(props)
{
  return(
    <div>
    <div>
      <UserInfo user={props.user}/>
   <div>
  </div>
  Your Comments are  {props.comment} 
    </div>
    <div> 
      Date of Comments is {props.date}
      </div>
</div>
);
}


function Author(props)
{
  return(
    <div>
       <h3> Author Details </h3>
       {props.author.imgUrl}
       <img src={props.author.imgUrl}/>
      </div>
    );
}

function UserInfo(props)
{
 return(
 <div>
   <Author author={props.user}/>
    <h3> User Info </h3>
    <b> Author Name is {props.user.name} </b>
   </div>
 );
}