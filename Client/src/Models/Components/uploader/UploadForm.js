import { Button, Modal } from "flowbite-react";
import { useState } from "react";
 import { storage } from "../../../fb";
import { ref,uploadBytes } from "firebase/storage";
import AnimationServices from "../../../Services/animations";

function UploadForm() {
  // const [openModal, setOpenModal] = useState(true);
  const [imageUpload, setImageUpload] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
     const title = event.target.name; 
    const value = event.target.value;
    console.group(value)
    setInputs(values => ({...values, [title]: value}))
  }


  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `animations/${imageUpload.name}--${Date.now()}`);
    uploadBytes(imageRef,imageUpload).then(response=>{
      alert("Anime Uploaded")
    }).catch(err=>{
      console.log(err)
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   //  uploadImage();
    const requestBody = {
      query:`
      mutation{
        createEvent(eventInput:{title:"${inputs.title}", description:"${inputs.desc}",tags:"${inputs.tags}",date:"",fileName:"cxcxc"}){
          title,
          _id
        }
      }`
    }
    let result = await AnimationServices.saveAnimations(requestBody)
    console.log('result',result)
  }

  return (
    <form class="w-full max-w-lg" onSubmit={handleSubmit}>
      {/* <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
         Title
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div> */}
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-title"
          >
            Title
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-title"
            type="text" 
            name="title" 
            value={inputs.title || ""} 
            onChange={handleChange}
          />
          {/* <p class="text-gray-600 text-xs italic">Give a attractive title</p> */}
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-desc"
          >
            Description
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-desc"
            type="desc" 
            name="desc" 
            value={inputs.desc || ""} 
            onChange={handleChange}
          />
          {/* <p class="text-gray-600 text-xs italic">Give a attractive title</p> */}
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-desc"
          >
            Tags
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-tags"
            type="tags" 
            name="tags" 
            value={inputs.tags || ""} 
            onChange={handleChange}
          />
          {/* <p class="text-gray-600 text-xs italic">Give a attractive title</p> */}
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
      <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          {/* <p class="text-gray-600 text-xs italic">Give a attractive title</p> */}
        </div>  
      </div>
      <Button type="submit">Submit</Button>

    </form>
  );
}

export default UploadForm;
