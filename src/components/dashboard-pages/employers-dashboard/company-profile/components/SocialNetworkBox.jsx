import { Switch } from "@/components/ui/switch";
import LogoCoverUploader from "./LogoCoverUploader";
import { useState } from "react";

const SocialNetworkBox = () => {
  const [makesUsUnique, setMakesUsUnique] = useState([
    {
      title: "Health Insurance",
      key: "health_insurance",
      toogle: true,
      value: "",
    },
    {
      title: "24 hour Wellness Center",
      key: "24_hour_wellness_center",
      toogle: true,
      value: "",
    },
    {
      title: "Cafeteria",
      key: "cafeteria",
      toogle: true,
      value: "",
    },
    {
      title: "Maternity and Paternity Leave",
      key: "maternity_and_paternity_leave",
      toogle: true,
      value: "",
    },
    {
      title: "Recreational Area",
      key: "recreational_area",
      toogle: true,
      value: "",
    },
    {
      title: "Life Insurance",
      key: "life_insurance",
      toogle: true,
      value: "",
    },
    {
      title: "Personal Accident Insurance",
      key: "personal_accident_insurance",
      toogle: true,
      value: "",
    },
  ]);
  return (
    <form className="default-form">
      <div className="row">
        {/* culter/event */}

        <div className=" flex  flex-col items-center justify-between form-group col-lg-12 col-md-12">
          <label htmlFor="events" className=" text-xl flex justify-start">
            Events
          </label>

          <div className="flex justify-between">
            {" "}
            <div className="form-group col-lg-6 col-md-6">
              <LogoCoverUploader text="Add Video" />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <LogoCoverUploader />
            </div>
          </div>
        </div>

        <h4 className="text-2xl text-black capitalize mb-2">
          What Makes Us Unique
        </h4>
        {makesUsUnique?.map((item, index) => (
          <div className="form-group col-lg-6 col-md-12" key={index}>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[15px] font-semibold">{item?.title}</label>
              <Switch
                className="rounded-xl data-[state=checked]:bg-[#0292e6]"
                checked={item?.toogle}
                onCheckedChange={(e) => {
                  setMakesUsUnique((prev) => {
                    return prev.map((val) => {
                      if (val?.key === item?.key) {
                        return { ...item, toogle: e };
                      }
                      return val;
                    });
                  });
                }}
              />
            </div>
            {item?.toogle && <input type="text" placeholder={item?.title} />}
          </div>
        ))}

        {/* join us  */}
        <h4 className="text-2xl text-black capitalize mb-2">Join Us</h4>
        <div className="form-group col-lg-12 col-md-12">
          <label htmlFor="name">Added a link to show new opportunity </label>
          <input
            type="text"
            name="name"
            placeholder="Info about company"
            // {...register("name")}
            // required
          />
          {/* {errors.name && (
            <p className="!text-red-500 text-sm">{errors.name.message}</p>
          )} */}
        </div>

        <h4 className="text-2xl text-black capitalize my-2 ">
          footer (contact){" "}
        </h4>
        <div className="form-group col-lg-6 col-md-12">
          <label>Facebook</label>
          <input
            type="text"
            name="name"
            placeholder="www.facebook.com/Invision"
            // required
          />
        </div>

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Twitter</label>
          <input type="text" name="name" placeholder="" required />
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Linkedin</label>
          <input type="text" name="name" placeholder="" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Google Plus</label>
          <input type="text" name="name" placeholder="" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;
