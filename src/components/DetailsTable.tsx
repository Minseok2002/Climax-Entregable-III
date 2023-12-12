import { WeatherData } from "../interfaces/WeatherData";

export const DetailsTable = ({ data: { humidity, feels, visibility, pressure, longitude, latitude, windSpeed }, }: { data: WeatherData; }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>humidity:</th>
                    <td id='humidity'>
                        {humidity}
                    </td>
                </tr>
                <tr>
                    <th>feels:</th>
                    <td id='feels'>
                        {feels}
                    </td>
                </tr>
                <tr>
                    <th>visibility:</th>
                    <td id='visibility'>
                        {visibility}
                    </td>
                </tr>
                <tr>
                    <th>pressure:</th>
                    <td id='pressure'>
                        {pressure}
                    </td>
                </tr>
                <tr>
                    <th>longitude:</th>
                    <td id='longitude'>
                        {longitude}
                    </td>
                </tr>
                <tr>
                    <th>latitude:</th>
                    <td id='latitude'>
                        {latitude}
                    </td>
                </tr>
                <tr>
                    <th>windSpeed:</th>
                    <td id='windSpeed'>
                        {windSpeed}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
