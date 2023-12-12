import { WeatherData } from "../interfaces/WeatherData";

export const DegreeeSection = ({ data: { temperature, description, icon }, }: { data: WeatherData; }) => {
    return (
        <>
            <section className="text-5x1 font-bold text-white">
                <span className="text-yellow-500" id="temperature">
                    {temperature}
                </span>
                ºC
            </section>
            <section>
                <img id="iconImg" src={icon} />
            </section>
            <section className="font-bold uppercase text-xl text-white mb-6" id="descriprion">
                {description}
            </section>
        </>
    )
}
