import React from "react";

export default function Footer() {
 return(
    <div>
        <div className="w-full h-[60px]  bottom-0 left-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
 )
}