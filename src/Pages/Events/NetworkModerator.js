import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getAllTeacher } from "../../Api/eventapi";

export default function NetworkingModerator({numberOfFloors, seatPerFloor,setNetworkModerators,networkModerators}) {
  const [moderatorArr, setModeratorArr] = useState([]);
  const[allTeacher,setAllTeacher]=useState([])

  useEffect(() => {
    moderatorFeild(numberOfFloors, seatPerFloor);
  }, [numberOfFloors, seatPerFloor]);

  const moderatorFeild = (numberOfFloors, seatPerFloor) => {
    let feildCount = parseInt(numberOfFloors) * parseInt(seatPerFloor);
    let arr = [];
    // if(edit_data){
    //   arr = edit_data;
    // }else{
    arr = [...moderatorArr];
    for (let i = 0; i < feildCount; i++) {
      arr.push(null);
      //   }
    }

    // console.log(arr);
    setModeratorArr(arr);
    // alert(feildCount);
  };
 
  useEffect(()=>{
    fetchAllTeacher()
  },[])
  const fetchAllTeacher=async()=>{
        let result= await getAllTeacher()
        // console.log("result",result);
        if(result && result.status){
            let modArr=result?.data?.map((val)=>{
                    return{
                    value:val._id,
                    label:val.name
                }
            })
            setAllTeacher(modArr)
        }
  }

  return (
    <>
      {moderatorArr.map((data, index) => {
        return (
          <div key={index}>
            <label style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              Select Moderator
            </label>
            <Select 
            options={allTeacher}
            onChange={(e)=>{
                // SetModerator(e)
                setNetworkModerators([...networkModerators,{name:e.label,moderatorId:e.value}])
            }}
            value={{label:networkModerators[index]?.name ,value:networkModerators[index]?.moderatorId}}
            />
          </div>
        );
      })}
    </>
  );
}
