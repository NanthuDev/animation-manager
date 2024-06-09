import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';


function App() {
  window.self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open('AMS').then(function(cache) {
                cache.put(event.request.url, res.clone());
                return res;
              });
            })
           
        }
      })
    );
  });

  return (
    <div className="App">
    <Layout></Layout>
    </div>
  );
}

export default App;
