import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid mb-0">
      <h1 className="display-4 font-weight-bolder text-center">Welcome to the Leauge of Clicky</h1>
        <p className="lead text-center">
            Clicky Game based on League of Legend
        </p>
      <p className="text-center">
          Click on a chamption to earn golds, but don't click on any of them more than once! Else R.I.P all the golds!
      </p>
    </div>
  );
}

export default Jumbotron;
