// import { useEffect,useState } from "react";
// import React  from "react";
// import All from "../pages/All";
// import Series from "../pages/Series"
// import { options } from "./Servies/Auth";
// const Runtime=(iD,type)=>{
//     const [data, setData] = useState([]);
//     console.log("data,,,,,,,,,,,,,,",data)
//     const getDataTime = () => {

//       fetch(`https://api.themoviedb.org/3/${type}/${iD}?language=en-US`, options)
//         .then(async (response) => {
//           let JsonRes6 = await response.json();
//           setData(JsonRes6);
//         })
//         .then((response) => console.log(response))
//         .catch((err) => console.error(err));
//     };
  
//     useEffect(() => {
//       getDataTime();
//     }, [type, iD]);
//     return(
//        <>
//        <All data={data}/>
//        <Series data={data}/>
//        </>
//     )
// }
// export default Runtime;