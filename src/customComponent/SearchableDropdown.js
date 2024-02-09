import React,{useState,useEffect, useMemo} from 'react'
import { getAllTeacher } from '../Api/eventapi'
import HttpClient from '../utils/HttpClient'


export default  function SearchableDropdown({className="",onSelect,value,title,data}) {
    // const [data,setData]= useState([])
    const [listShow,setListShow] = useState(false)
    const [search,setSearch] = useState("")
    const [re,setRe]=useState(false)
    // console.log("value",value);


    const filterList = useMemo(()=>{
      return data.filter((item)=>item.name?.includes(search))
    },[search,data])


    useEffect(() => {
      if (value && value != "") {
        // alert("wo")
        let filter = data.find((item)=>item._id==value)?.name;
        setSearch(filter);
      
      }
    }, [value]);

    const removeFromFilterList=()=>{
 
    }
  return (
    <>
   {listShow&&<div className='overlayDorpDown' onClick={()=>setListShow(!listShow)}></div>} 
    <div className={`${className} form-group `}>
    <label htmlFor="example-text-input" className="col-md-12 col-form-label">{title}</label>
    <div className="col-md-12 p-0">
        <div className='shivdropdown'>
          <input type="text"  value={search} onChange={(val)=>setSearch(val.target.value)} onClick={()=>setListShow(true)} className='form-control'></input>
          {listShow&& 
            <div  className='wrappper'>    
            {/* {console.log('filterList',filterList)} */}
           {filterList.map((item,index)=>{
            return<li key={index} onClick={()=>{
                setListShow(!listShow)
              onSelect(item._id,item.name,item)}}>{item.name}</li>
           })} 
            
          </div>
          }
          </div>
        {/* <select className="form-control"  value={value} onChange={(e)=>onSelect(e.target.value)}>
            <option>Select</option>
           {data.map((item)=>{
            return<option value={item._id}>{item.name}</option>
           })} 
        </select> */}

    </div>
</div>
</>
  )
}
