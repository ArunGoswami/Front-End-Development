function getNumber() {
    const myNums = [1, 2, 3, 4, 5, 6];
    const num = myNums[Math.floor(Math.random() * myNums.length)];
    return num;
  }
  
  class Random extends React.Component {
    render() {
      const num = getNumber();
      let msg = null;
      if (num === 6) {
        msg = (
          <p>
            <h3>Congratulations!</h3>
            <img src="datastructureexpert.jpg" alt="Data Structure Expert" />
          </p>
        );
      } else {
        msg = <small>Sorry</small>;
      }
      return (
        <div>
          <p>Got: {num}</p>
          {msg}
        </div>
      );
    }
  }
  