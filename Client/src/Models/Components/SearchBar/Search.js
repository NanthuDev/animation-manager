import { useState } from "react";
import { storage } from "../../../fb";
import { ref, uploadBytes } from "firebase/storage";
import Uploader from "../uploader/Uploader";
import { getValue } from "firebase/remote-config";

function SearchBar(props) {
   const [imageUpload, setImageUpload] = useState(null);
  const [searchText, setSearchText] = useState('');

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `animations/${imageUpload.name}--${Date.now()}`
    );
    uploadBytes(imageRef, imageUpload)
      .then((response) => {
        alert("Anime Uploaded");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleChange = (event) => {
     const value = event.target.value;
     setSearchText(value);
    
  };
  const callSearch = (event)=>{
    event.preventDefault();
    props.updateAnimListOnSearch(searchText)
  }
  const refresh = () => {
    props.refresh();
  };

  return (
    <div>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 ...">
          <form class="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Animations..."
                required
                value={searchText || ""}
                onChange={handleChange}
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={callSearch}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="grid justify-items-end ...">
          {/* <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button
            type="submit"
            onClick={uploadImage}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Upload
          </button> */}
          <Uploader refresh={refresh}></Uploader>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
