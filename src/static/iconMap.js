// mapa do ikonek
import cloud from '../img/cloud.png';
import rain from '../img/rain.png';
import snow from '../img/snow.png';
import storm from '../img/storm.png';
import sun from '../img/sun.png';
import sun_part_cloud from '../img/sun_part_cloud.png';

const findWeather = (code) => {
    let weather;
    switch(code) {
        case '11d':
          weather = storm;
          break;
        case '09d':
          weather = rain;
          break;
        case '10d':
          weather = rain;
          break;
        case '13d':
          weather = snow;
          break;
        case '09d':
          weather = rain;
          break;
        case '50d':
          weather = cloud;
          break;
        case '01d':
          weather = sun;
          break;
        case '02d':
          weather = sun_part_cloud;
          break;
        case '03d':
          weather = cloud;
          break;
        case '04d':
          weather = cloud;
          break;
        default:
          weather = sun;
          break;
    }
    return weather;
}

export default findWeather;
