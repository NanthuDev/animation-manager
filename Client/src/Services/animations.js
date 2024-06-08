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
};

export default AnimationServices;
