import { Input, Radio } from "@material-tailwind/react";
import React from "react";
import "./Home.css";
import { HiHeart, HiMinus, HiPlus } from "react-icons/hi";

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

      <div className="px-5 flex gap-12">
        {/* Product Card  */}
        <div className="flex p-5 product_card w-3/4">
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
            <div className="flex gap-8">
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
              <div className="flex items-center gap-3 quantity_box px-3">
                <HiMinus className="inline qty-icon"></HiMinus>
                <p>1</p>
                <HiPlus className="inline qty-icon"></HiPlus>
              </div>
            </div>
            <div className="flex items-center gap-5 pt-8">
              <div>
                <HiHeart className="inline text-[#38FF4C] text-3xl"></HiHeart>
              </div>
              <p className="py-2 px-1 border-2 border-[#38FF4C] rounded hover:cursor-pointer">
                Add to Cart
              </p>
              <button className="px-5 py-2 font-semibold bg-[#38FF4C] rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="text-white p-3 bg-[url('https://i.ibb.co/71JjTmC/Frame-22.png')] w-1/4  h-[212px] bg-contain bg-no-repeat flex flex-col justify-between p-3">
          <h2>Summer headphones from top brands</h2>
          <h4>Buy it Now</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
