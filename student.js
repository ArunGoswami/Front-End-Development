// class student extends React.Component{
//     render(){
//         let {city,pincode}=this.props.address;
//         return(
//         <div>
//             <h3>student details</h3>
  
//             <p>name:{this.props.name}</p>
//             <p>age:{this.props.age}</p>
//             <p>subject:{this.props.subject.join()}</p>
//             <p>marks:{this.props.marks.join()}</p>
//             <p>isPass:{String(this.props.isPass)}</p>
//             <p>city:{city}</p>
//             <p>pincode:{pincode}</p>
  
//         </div>
//         );
//     }
// }
class Student extends React.Component {
    render() {
      let { city, pincode } = this.props.address;
      return (
        <div>
          <h3>Student Details</h3>
          <p>Name: {this.props.name}</p>
          <p>Age: {this.props.age}</p>
          <p>Subject: {this.props.subject.join(", ")}</p>
          <p>Marks: {this.props.marks.join(", ")}</p>
          <p>Is Pass: {String(this.props.isPass)}</p>
          <p>City: {city}</p>
          <p>Pincode: {pincode}</p>
        </div>
      );
    }
  }
  