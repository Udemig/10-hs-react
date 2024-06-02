import React from "react";

const PopupView = ({ userName, setShowPopup, data }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{userName}</span> kullanıcısının gönderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>Kapat</button>
        </div>
        {!data ? (
          <p>Yükleniyor</p>
        ) : (
          data.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
