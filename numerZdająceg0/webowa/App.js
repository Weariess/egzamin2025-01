import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialPhotos = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:"kwiaty", downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category:"kwiaty", downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:"zwierzeta", downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:"zwierzeta", downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:"zwierzeta", downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:"samochody", downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:"zwierzeta", downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:"kwiaty", downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:"zwierzeta", downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:"zwierzeta", downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:"zwierzeta", downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:"samochody", downloads: 321}
];

function App() {


  const [photos, setPhotos] = useState(initialPhotos);
  const [categories, setCategories] = useState({
    kwiaty: true,
    zwierzeta: true,
    samochody: true,
  });



  const handleCategoryChange = (e) => {
    setCategories((prev) => ({
      ...prev,
      [e]: !prev[e],
    }));
  };

  const handleDownload = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, downloads: photo.downloads + 1 } : photo
      )
    );
  };

  const filteredPhotos = photos.filter((photo) => categories[photo.category]);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Kategoryzacja zdjęć w galerii</h1>

      <div className="card p-3 mb-4 bg-light">
        <h5>Kategorie zdjęć</h5>
        <div className="d-flex gap-4 mt-2">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="cat-kwiaty"
              checked={categories.kwiaty}
              onChange={() => handleCategoryChange('kwiaty')}
            />
            <label className="form-check-label" htmlFor="cat-kwiaty">
              Kwiaty
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="cat-zwierzeta"
              checked={categories.zwierzeta}
              onChange={() => handleCategoryChange('zwierzeta')}
            />
            <label className="form-check-label" htmlFor="cat-zwierzeta">
              Zwierzęta
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="cat-samochody"
              checked={categories.samochody}
              onChange={() => handleCategoryChange('samochody')}
            />
            <label className="form-check-label" htmlFor="cat-budynki">
              Samochody
            </label>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="col">
            <div className="card h-100 shadow-sm">
              <img
                class
                src={"assets/" + photo.filename}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover', margin:'5px'}}
                alt={photo.alt}
              />
              <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <h4 className="card-title text-muted me-auto">
                  Pobrań: {photo.downloads}
                </h4>
                <button
                  className="btn btn-primary w-100 mt-2"
                  onClick={() => handleDownload(photo.id)}
                >
                  Pobierz
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;