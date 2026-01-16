// function student (){
//     return 
//     (
//     <>
//      <h2>Name:Amit</h2>
//     <h3>Name:Amit</h3>
//     <h2>Name:Amit</h2>
// </>
// )   
// }
// export default student;

//--------------------------------------------------------
/*function Student (props){
     return(
    <>
        <h2>Name:{props.name}</h2>
        <h3>Subject:{props.sub}</h3>
        <h3>Age:{props.age}</h3>
    </>
     )
}
*/

//--------------------------------------------------------
function Student ({name,sub,age}){
        return(
         <>
                <h2>Name:{name}</h2>
                <h3>Subject:{sub}</h3>
                <h3>Age:{age}</h3>
            </>
        )
    }


export default Student;