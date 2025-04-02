import React from "react";
import { useOrdersItem } from "../Context/OrdersItemContext";
import { useState } from "react";

import OrderItem from "../features/order/OrderItem";
import { Disc } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";

function Checkout() {
  const { ordersItem, toggleOrder, updateOrder } = useOrdersItem();

 

  const [SubTotalPrice, setSubTotalPrice] = useState(
    ordersItem.reduce((acc, order) => acc + order.Newprice * order.quantity, 0)
  );

  const [homedeliverychecked, sethomedeliverychecked] = useState(false);

 

  useEffect(() => {
    const total = ordersItem.reduce(
      (acc, order) => acc + order.Newprice * order.quantity,
      0
    );
    setSubTotalPrice(total);
  }, [ordersItem]);

  const algerianWilayas = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Algiers",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M’Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arréridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
    "Timimoun",
    "Bordj Badji Mokhtar",
    "Ouled Djellal",
    "Béni Abbès",
    "In Salah",
    "In Guezzam",
    "Touggourt",
    "Djanet",
    "El M'Ghair",
    "El Menia",
  ];

  const wilayasWithCommunes = {
    Adrar: {
      Comunes: [
        "Adrar",
        "Aoulef",
        "Reggane",
        "Timimoun",
        "Bordj Badji Mokhtar",
      ],
      homeprice: 800,
      officeprice: 600,
    },
    Chlef: {
      Comunes: ["Chlef", "El Karimia", "Ténès", "Ouled Ben Abdelkader"],
      homeprice: 600,
      officeprice: 400,
    },
    Laghouat: {
      Comunes: ["Laghouat", "Aflou", "Hassi R'Mel", "Brida"],
      homeprice: 700,
      officeprice: 500,
    },
    OumElBouaghi: {
      Comunes: ["Oum El Bouaghi", "Bir Bouhaouch", "Ain Beida"],
      homeprice: 600,
      officeprice: 400,
    },
    Batna: {
      Comunes: ["Batna", "Khenchela", "Tebessa"],
      homeprice: 800,
      officeprice: 600,
    },
    Béjaïa: {
      Comunes: ["Béjaïa", "Seddouk", "Tazmalt"],
      homeprice: 700,
      officeprice: 500,
    },
    Biskra: {
      Comunes: ["Biskra", "El Kantara", "Zeribet el Oued"],
      homeprice: 800,
      officeprice: 600,
    },
    Béchar: {
      Comunes: ["Béchar", "Bechar", "Bordj Badji Mokhtar"],
      homeprice: 900,
      officeprice: 700,
    },
    Blida: {
      Comunes: ["Blida", "Boufarik", "Khemis Miliana"],
      homeprice: 700,
      officeprice: 500,
    },
    Bouira: {
      Comunes: ["Bouira", "Lakhdaria", "M'Chedallah"],
      homeprice: 600,
      officeprice: 400,
    },
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const selectedWilaya = watch("wilaya");
  const selectedCommune = watch("commune");


  const communes = selectedWilaya
    ? wilayasWithCommunes[selectedWilaya].Comunes || []
    : [];


    

  const algerianCommune = [];

  const onSubmit = (data) => {
    console.log("Order Confirmed:", data);
  };

  const [deliveryprice, setdeliveryprice] = useState(0);

  return ordersItem.length != 0 ? (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row  gap-20 mt-[80px]"
    >
      <div className="flex flex-col  gap-4  sm:w-full  md:w-1/2">
        <h2 className="text-xl flex items-center justify-center font-bold">
          Your delivery information{" "}
        </h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="block font-bold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^(05|06|07)\d{8}$/,
                message:
                  "Phone number must start with 05, 06, or 07 and have 10 digits",
              },
            })}
            className="mt-1 block w-full py-3 px-2 bg-main-100 focus:outline-none focus:border-1 border-gray-300 rounded-md shadow-sm focus:border-third-100 sm:text-sm md:text-lg text-black"
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fullname" className="block font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", {
              required: "Full Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces are allowed",
              },
            })}
            className="mt-1 block w-full py-3 px-2 bg-main-100 focus:outline-none focus:border-1 border-gray-300 rounded-md shadow-sm focus:border-third-100 sm:text-sm md:text-lg text-black"
            placeholder="Full Name"
          />
          {errors.fullname && (
            <p className="text-red-500">{errors.fullname.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="wilaya" className="block font-bold">
            Wilaya
          </label>

          <select
            id="wilaya"
            // ref={Willyaref}
            {...register("wilaya", { required: "Please select a Wilaya" })}
            className="mt-1 block w-full py-3 px-2 bg-main-100 focus:outline-none focus:border-1 border-gray-300 rounded-md shadow-sm focus:border-third-100 sm:text-sm md:text-lg text-black"
          >
            <option key={0} value="" disabled>
              - Wilaya -
            </option>
            {algerianWilayas.map((wilaya, index) => (
              <option key={index} value={wilaya}>
                {wilaya}
              </option>
            ))}
          </select>
          {errors.wilaya && (
            <p className="text-red-500">{errors.wilaya.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="commune" className="block font-bold">
            Commune
          </label>
          <select
          id="commune"
            {...register("commune", { required: "Please select a Commune" })}
            disabled={!selectedWilaya}
            // ref={Communeref}
            className="mt-1 block w-full py-3 px-2 bg-main-100 focus:outline-none focus:border-1 border-gray-300 rounded-md shadow-sm focus:border-third-100 sm:text-sm md:text-lg text-black"
          >
           <option  key={0} value="" >-Commune-</option>
            {/* Map over communes for the selected Wilaya */}
            {wilayasWithCommunes[selectedWilaya]?.Comunes.map((commune, index) => (
              <option key={index+1} value={commune}>
                {commune}
              </option>
            ))}
          </select>
          {errors.commune && (
            <p className="text-red-500">{errors.commune.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Commune" className="block font-bold">
            Notes
          </label>

          <textarea
            {...register("message", {
              required: "Message is required",
              pattern: {
                value: /^[A-Za-z0-9\s]+$/,
                message: "Only letters, numbers, and spaces are allowed",
              },
            })}
            rows="5"
            className="w-full p-2 border rounded-md bg-main-100 text-lg border-green-700 focus:outline-none focus:border-green-900"
            placeholder="Note..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-10 rounded-xl pb-7 px-7 h-fit bg-main-100 sm:w-full  md:w-1/2">
        <h2 className="text-xl  mb-7 flex justify-center items-center font-bold">
          Your Order{" "}
        </h2>

        <div>
          <div className="flex flex-col gap-2">
            {ordersItem.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 border-b-1 border-gray-400 pb-4 ">
            <h3 className="text-[18px] font-normal">SUB-TOTAL </h3>
            <strong className="text-[18px] font-semibold">
              {SubTotalPrice}.00 DZD
            </strong>
          </div>

          {communes !="" && (
            <div className=" py-2 pb-4 flex flex-col gap-4 border-b-1 border-gray-400 ">
              <h3 className="text-lg">Delivery costs </h3>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="deliveryprice"
                    className="w-4 h-4"
                    value={wilayasWithCommunes[selectedWilaya]?.officeprice}
                    {...register("typeofdelivery", {
                      required: "Please select a delivery option",
                    })}
                    onChange={() => {
                      setdeliveryprice(
                        wilayasWithCommunes[selectedWilaya]?.officeprice
                      );
                    }}
                  />
                  <span className=" font-normal hover:">
                    Delivery price to office
                  </span>
                </div>

                <span>
                  {wilayasWithCommunes[selectedWilaya]?.officeprice}.00 DZD
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="deliveryprice"
                    className="w-4 h-4"
                    value={wilayasWithCommunes[selectedWilaya]?.homeprice}
                    {...register("typeofdelivery", {
                      required: "Please select a delivery option",
                    })}
                    onChange={() => {
                      setdeliveryprice(
                        wilayasWithCommunes[selectedWilaya]?.homeprice
                      );
                    }}
                  />
                  <span className=" font-normal hover:">
                    Delivery price to home
                  </span>
                </div>

                <span>
                  {wilayasWithCommunes[selectedWilaya]?.homeprice}.00 DZD
                </span>
              </div>
            </div>
          )}

          <div className="py-4 flex flex-col gap-2">
            <h3 className=" flex gap-2 items-center">
              <Disc size={15} className="text-orange-500" />
              Cash on delivery
            </h3>

            <div className="flex justify-between items-center border-1 rounded-md border-third-100">
              <div className="flex gap-2 items-center px-2">
                <span className="text-[12px] font-bold text-gray-700">
                  Promo code
                </span>

                <input
                  type="text"
                  className="focus:outline-none"
                  placeholder="Enter promo code"
                />
              </div>

              <button className="bg-third-100 text-white py-2 px-4 ">
                Apply
              </button>
            </div>

            <div className="flex justify-between items-center  ">
              <h3 className="text-xl font-bold">TOTAL </h3>
              <strong className="text-xl font-semibold">
                {SubTotalPrice + deliveryprice}
                .00 DZD
              </strong>
            </div>
          </div>

          <button
            type="submit"
            className="bg-third-100 text-white px-4 py-2  w-full rounded mt-4 cursor-pointer"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </form>
  ) : (
    <div className="mt-[80px] flex flex-col text-small-100 items-center justify-center">
      <ShoppingBag size={110} />
      <h2 className="text-xl flex items-center justify-center font-bold">
        Your cart is empty
      </h2>
    </div>
  );
}

export default Checkout;
