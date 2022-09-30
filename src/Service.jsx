import React from "react";
import Card from "./Card";
import Sdata from "./ServiceData";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((data, indexNo) => {
                return (
                  <Card key={indexNo} title={data.title} image={data.imgsrc} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
