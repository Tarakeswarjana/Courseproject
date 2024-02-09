import HttpClient from "../utils/HttpClient";

export async function addEvent(data) {
  let result = await HttpClient.requestData("addEvent", "POST", data);
  return result;
}

export async function getEvent(data) {
  let result = await HttpClient.requestData("viewEvent", "GET");
  return result;
}

export async function getAllTeacher(data) {
  let result = await HttpClient.requestData("viewAllTeacher", "GET");
  return result;
}

export async function updateEvent(id, data) {
  let result = await HttpClient.requestData(`updateEvent/${id}`, "PUT", data);
  return result;
}

export async function deleteEvent(id) {
  let result = await HttpClient.requestData(`deleteEvent/${id}`, "PUT");
  return result;
}
export async function addEventSession(data) {
  let result = await HttpClient.requestData(`addEventSession`, "POST", data);
  return result;
}
export async function viewSession(id) {
  let result = await HttpClient.requestData(`viewSession/${id}`, "GET");
  return result;
}
export async function updateSession(id,data) {
  let result = await HttpClient.requestData(`updateSession/${id}`, "PUT",data);
  return result;
}
export async function deleteSession(id) {
  let result = await HttpClient.requestData(`deleteSession/${id}`, "PUT");
  return result;
}


export async function addEventBooth (data){
  let result = await HttpClient.requestData(`addEventBooth`,"POST",data)
  return result;
}

export async function updateEventBooth(id,data){
  let result=await HttpClient.requestData(`updateBooth/${id}`,"PUT",data)
  return result;
}

export async function viewEventBooth(id){
    let result= await HttpClient.requestData(`viewBooth/${id}`,"GET")
    return result;
}

export async function deleteEventBooth(id){
  let result =await HttpClient.requestData(`deletebooth/${id}`,"PUT")
  // console.log(result);
  return result;
}

export async function userNameCheckingfrombackend (data){
  let result =await HttpClient.requestData(`checkUniqueUsername/${data}`,"GET")
  // console.log(result);
  return result;
}