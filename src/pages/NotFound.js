import React from 'react'

function NotFound() {
  return (
    <div className="container"
    style={{
      width: "86%",
      margin: "80px auto",
      position: "relative"
    }}>
          { /* <img src="https://cdnb.artstation.com/p/assets/images/images/007/158/555/large/kruzsely-ted-tedkruzsely-doom-of-valyria2.jpg?1504099302" alt="White Walker"  className="img-fluid" /> */ }
    
          <img src="https://geeksoncoffee.com/wp-content/uploads/2018/08/wallpapersden.com_dragon-battle-fire-vs-ice-game-of-thrones_1280x717.jpg" alt="White Walker"  className="img-fluid" />
          <h2 style={{
      textAlign: "center",
      fontSize: "8vw",
      color: "rgb(255, 231, 211)",
      textShadow: "2px 2px 4px #000000",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}>404 Not Found</h2>


    </div>
  )
}

export default NotFound;
// 404 Not Found :(