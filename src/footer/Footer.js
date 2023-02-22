import React, { Component } from "react";

// this Section for Styling Link
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <div className="Footer-container">
        {/* this is Link For Icons */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

        <table>
          <tr>
            <th>Contact</th>
            <th>Address</th>
            <th>About</th>
            <th>Media</th>
          </tr>

          <tr>
            <td><i class="uil uil-phone-alt"></i><a href="">Phone: (98) 9101498397</a></td>
            <td><i class="uil uil-shopping-cart-alt"></i><a href="">Online-Shop</a></td>
            <td><i class="uil uil-map-marker"></i>Khozestan, Khoramshahr, Allah, Squeri</td>
            <td><i style={{color:'#5851DB'}} class="uil uil-instagram"></i><a href="">Instagram</a></td>
          </tr>

          <tr>
            <td><i class="uil uil-envelope-alt"></i><a href="">Mail: TezzaKala@gmail.com</a></td>
            <td><i class="uil uil-browser"></i><a href="">Sustaiability</a></td>
            <td><i class="uil uil-location-arrow"></i><a href="">Show in Locatation</a></td>
            <td><i style={{color:'#0165E1'}} class="uil uil-facebook"></i><a href="">Facebook</a></td>
          </tr>

          <tr>
            <td></td>
            <td><i class="uil uil-hard-hat"></i><a href="">Career</a></td>
            <td></td>
            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyklEQVR4nO1WS2jUUBSNP9CF4EKEahUX4kYEcWVxUV07TnJOjAoq3VWsVoWC4KroqiuLiELRgoIiCoKKxSoU3YlLcdGKLvyACiLa6kxz37RGXkhK+pqfraCLXgjMJO/dk3PuvefFsubjf4u6561TQKcAgwoYEeCnvqLfg4o8VrfttX8NsOZ5axTQJ8CEIoO8S4BJRd4et+31cwL1SUeAH0WAM16AHPOB6qxAFXkiYvBHoNPYA8dnw3QyI+kbBfQLeVaRp4XsFfJZWil0jtLMa0BzmrxCPlXAtqx94563Qdc3TfZatbq6WGKgP2Vzb+B5i/TzoL19SYPcqcgjCjisHKcl6O5eOLWf7EpR6XLhyKRIdiewrAVhCYCqIj/MSAy8ENveHOcR8qIh+YRWMo9tp8HUj2fTB5DXbEJ+iZMHtr1CyG/Gyx3NBBbyoZHwXpjI85YJ8CkCGBLX3dRw3R1mcgEuJEhcNZ4NZDMmXxnAXfp+A9gVba4HwKrE+usGq9dZ6ilgJI/xmCHfoSjJyej/c6M09w1W36dyAQfM7rZygGvGW4YGIMB+E1h3uQBfjfVvsxhLHrAi3xtS35yabdLX863HKVzrOC0pTXY3AXylvNTAgCFdPR7+yK0+JtaeSensfaEara2LzbGTguY6lWJ7j3RXa/YKuJUoyzlj3ZPYSMR1D6bMekeRXaYdfy/D0UmYfmg25JCuqx6joFpdHrIFmoT8bCjRyDWQSNIbmSYBbI19OWmTcfiOs1EBwyls+3JBcw8JYDT2a22Jmm14itn2Fj3nAlzSPZG6D2gqBA7fHNgj5C9DrscJVUayVDFAJ31ydynQaR8CSfBIruj4K/sh0GnNJsR198Z+LGRPeI/sKQE62nCcijWXqAHNirwm5PmgUlk549QxulcrU7qmZSJoa1uqyO1CPlDAO22vYRMCw6HxAB2FIzMf1j+I32MJ/lPtFTfIAAAAAElFTkSuQmCC" /><a href="">Pintrest</a></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><i style={{color:'red'}} class="uil uil-youtube"></i><a href="">Youtube</a></td>
          </tr>
          
        </table>
      </div>
    );
  }
}

export default Footer;
