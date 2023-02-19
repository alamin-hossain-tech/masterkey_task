import { Input, Radio } from "@material-tailwind/react";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-full">
      {/* Top Bar  */}

      <div className="p-5 flex justify-between">
        <div className="text-center">
          <h2>Headphone</h2>
          <h4>For the top band</h4>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center px-3 py-1  w-[370px] justify-between search">
            <div className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co/vj41Yfx/icons8-search-more-100-1.png"
                alt=""
              />
              <input className="" type="text" placeholder="Search Product" />
            </div>
            <img src="https://i.ibb.co/mNgb6qF/icons8-filter-64-1.png" alt="" />
          </div>
          <img src="https://i.ibb.co/hWg1HBs/Frame-19.png" alt="" />
          <img src="https://i.ibb.co/QjZN2QX/Frame-20.png" alt="" />
          <img src="https://i.ibb.co/6HCBGB7/Group-6.png" alt="" />
        </div>
      </div>

      <div className="px-5">
        {/* Product Card  */}
        <div className="flex p-5 shadow-md rounded-md ">
          <img
            src="https://i.ibb.co/vVLrfVd/g835-SLOHDG-F-1-removebg-preview-1.png"
            alt=""
          />
          <div>
            <h3>Beats Studio3 Wireless Headphone</h3>
            <div className="flex gap-1 items-center">
              <img
                src="https://i.ibb.co/QXgp7Mg/icons8-starburst-shape-30-1.png"
                alt=""
              />
              <img
                src="https://i.ibb.co/QXgp7Mg/icons8-starburst-shape-30-1.png"
                alt=""
              />
              <img
                src="https://i.ibb.co/QXgp7Mg/icons8-starburst-shape-30-1.png"
                alt=""
              />
              <img
                src="https://i.ibb.co/QXgp7Mg/icons8-starburst-shape-30-1.png"
                alt=""
              />
              <img
                src="https://i.ibb.co/QXgp7Mg/icons8-starburst-shape-30-1.png"
                alt=""
              />
              <p>( 200+ Reviews )</p>
            </div>
            <p>
              Ergonomic or cupe with on-oor controls up to 22 hours of tening
              time. Apple Wi crip & Closs{" "}
            </p>
            <p className="text-[#07FFD2]">Price $ 450.55</p>
            <div className="flex items-center gap-3">
              <p className="pb-2">Color:</p>
              <div>
                {" "}
                <input type="radio" name="color" id="green" value="green" />
                <label for="green">
                  <span class="green"></span>
                </label>
                <input type="radio" name="color" id="cyan" />
                <label for="cyan">
                  <span class="cyan"></span>
                </label>
                <input type="radio" name="color" id="blue" />
                <label for="blue">
                  <span class="blue"></span>
                </label>
                <input type="radio" name="color" id="violet" />
                <label for="violet">
                  <span class="violet"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
