import React, { useEffect, useRef, useState } from "react";



const SearchBar = ({ onSearch, onLoading, onError, isApiLoaded }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  // Käynnistetään autocomplete kun komponentti on ladattu
  useEffect(() => {
    if (!isApiLoaded || !window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["(cities)"], // voit vaihtaa esim. ["geocode"] tai ["establishment"]
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        setSearchTerm(place.formatted_address);
        //handleSearch(place.formatted_address);
      } else if (place && place.name) {
        setSearchTerm(place.name);
        //handleSearch(place.name);
      }
    });
  }, [isApiLoaded]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim() || !isApiLoaded) {
      onError("Odota hetki, API alustetaan...");
      return;
    }

    handleSearch(searchTerm);
  };

  const handleSearch = async (query) => {
    onLoading(true);
    onError(null);

    try {
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));
      const request = {
        query: `${query} tourist attractions`,
        fields: ["name", "formatted_address", "photos", "rating"],
      };

      const places = await new Promise((resolve, reject) => {
        service.textSearch(request, (results, status) => {
          if (status === "OK" && results.length > 0) {
            resolve(results);
          } else {
            reject(new Error("Nähtävyyksiä ei löydy. Kokeile kirjoittaa hakusana tarkemmin."));
          }
        });
      });

      const searchResults = places.slice(0, 6).map((place, index) => ({
        id: index + 1,
        name: place.name,
        description: place.formatted_address,
        rating: place.rating || "Ei arvostelua",
        image: place.photos
          ? place.photos[0].getUrl()
          : "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&w=2000&q=80",
      }));

      onSearch(searchResults);
    } catch (error) {
      console.error("Hakuvirhe:", error);
      onError(error.message);
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Hae matkakohteita (esim. Pariisi, Rooma)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          ref={inputRef}
        />
        <button type="submit" className="search-button">Hae</button>
      </form>
    </div>
  );
};

export default SearchBar;
