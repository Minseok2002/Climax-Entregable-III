import { FormEvent, useEffect, useState } from "react"
import { getWaetherByCoords, getWaetherBySearch } from "./API/fetchWeather";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer"

function App() {

  const [fechedData, setFechedData] = useState(null);
  const [error, setError] = useState("");

  //Conexion al API Datos

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {

        const data = await getWaetherByCoords(LAT, LON);
        setFechedData(data);

      } catch (err) {
        setError('Por favor revise su conexión a internet')
      }

    })



  }, []);

  //Buscador

  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");

    try {
      const data = await getWaetherBySearch(CITY);

      if (data === "404") {
        setError("No se encontró la ciudad");
      } else if (data === "400") {
        setError("Por favor ingrese una ciudad")
      } else {
        setFechedData(data);
        console.log(data)
      }

    } catch (err) {
      setError('Por favor revise su conexion a internet')
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchedData={fechedData} error={error} />
    </div>
  )
}

export default App
