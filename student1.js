class student1 extends React.Component {
    render() {
      let { subjects, marks } = this.props;
      let total = 0;
      marks.foreach((m) => {
        total += m;
      });
      return (
        <div className="student1">
          <h3>Student detail</h3>
          <p>Name: {this.props.name}</p>
          <p>Age: {this.props.age}</p>
          <p>Subjects:</p>
          <ul>
            {subjects.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
          <p>Marks:</p>
          <ul>
            {marks.map((m) => (
              <li>{m}</li>
            ))}
          </ul>
          <p>Total: {total}</p>
          <p>
            Result: <b>{total >= 150 ? "Pass" : "Fail"}</b>
          </p>
        </div>
      );
    }
  }
  
  