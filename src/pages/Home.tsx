import React from "react";

function TopBanner(props: any) {
  return (
    <div className="text-center">
      <div>
        <h1>Joel Hiltons Movie Collection</h1>
        <img
          src="./JoelHiltonHeadshot.jpg"
          alt="companyLogo"
        />
      </div>
      <div>
        <h5>This site shows all the movies in Joels film collection</h5>
      </div>
    </div>
  );
}

export default TopBanner;
