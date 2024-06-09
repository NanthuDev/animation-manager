const AnimationServices = {
  saveAnimations: (data) => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:8080/graph", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getAnimations: (data) => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:8080/graph", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (result) => {
          let data = await result.json();
           resolve(data.data.events);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  searchAnimations: (values) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8080/animations?title=${"test"}`, {
        method: "GET",
       
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (result) => {
          let data = await result.json();
           resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default AnimationServices;
