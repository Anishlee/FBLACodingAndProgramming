import React from 'react'
import Dropdown from 'react-dropdown'
import logo from './logo.svg';
import Select from '@mui/material/Select';
import './App.css';
import './style.css'
import {Navigation} from 'react-minimal-side-navigation';
import { FaBeer, FaCss3 } from 'react-icons/fa';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {browserHistory} from 'react-router'
import {Grid, Col, Row} from 'react-bootstrap'
import StickyBox from "react-sticky-box";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const Countries = [
  { label: "Entertainment", value: 355 },
  { label: "Restaurants", value: 54 },
  { label: "Shopping", value: 43 },
  { label: "Hotels", value: 43 },
  { label: "Famous Places", value: 43 },
];
const FinalList = [
  //{title: "Dominos", price: "$", location: "2800 SW 14th St, Bentonville", label: "Restaurants", rating: 3.5, DeliveryOrTakeout: "Takeout/Delivery", distance: 2.7, Category: "Pizza", StartTime: "10AM", EndTime: "12AM", image: require("./Dominos.jpg")},
  {title: "Pizza Hut", price: "$", location: "1717 W Walnut St A, Rogers", label: "Restaurants", rating: 3.5, DeliveryOrTakeout: "Takeout/Delivery", distance: 11.4, Category: "Pizza", StartTime: "10AM", EndTime: "12AM", image: require("./PizzaHut.jpeg")},
  {title: "Panda Express", price: "$", location: "319 S Walton Blvd, Bentonville", label: "Restaurants", rating: 4.1, DeliveryOrTakeout: "Takeout", distance: 1.9, Category: "Chinese", StartTime: "11AM", EndTime: "10PM", image: require("./Panda.jpeg")},
  {title: "P.F. Chang's", price: "$$", location: "2203 S Promenade Street, Rogers", label: "Restaurants", rating: 4.3, DeliveryOrTakeout: "Delivery", distance: 7.4, Category: "Chinese", StartTime: "11AM", EndTime: "10PM", image: require("./PFChang's.png")},
  {title: "Las Fajitas", price: "$$", location: "2003 SW Regional Airport Blvd, Bentonville", label: "Restaurants", rating: 4.0, DeliveryOrTakeout: "Takeout/Delivery", distance: 5.2, Category: "Mexican", StartTime: "11AM", EndTime: "9PM", image: require("./LasFajitas.jpg")},
  {title: "Ruth Chris Steak House", price: "$$$$", location: "3529 Pinnacle Hills Pkwy, Rogers", label: "Restaurants", rating: 4.6, DeliveryOrTakeout: "Delivery", distance: 11.6, Category: "Steak-House", StartTime: "4PM", EndTime: "10PM", image: require("./RuthChris.jpeg")},
  {title: "Tavola Trattoria", price: "$$$", location: "108 SE A St, Bentonville", label: "Restaurants", rating: 4.5, DeliveryOrTakeout: "Takeout", distance: 2.5, Category: "Italian", StartTime: "11AM", EndTime: "9PM", image: require("./Tavola.jpg")},
  {title: "Olive Garden", price: "$$", location: "1716 S 46th St, Rogers", label: "Restaurants", rating: 4.2, DeliveryOrTakeout: "Delivery", distance: 7.8, Category: "Italian", StartTime: "11AM", EndTime: "10PM", image: require("./OliveGarden.png")},
  {title: "Shogun", price: "$$$", location: "3606 SE Metro Pkwy, Bentonville", label: "Restaurants", rating: 2.5, DeliveryOrTakeout: "Takeout", distance: 5.9, Category: "Japanese", StartTime: "11AM", EndTime: "9PM", image: require("./Shogun.jpeg")},
  {title: "Sushi House", price: "$$", location: "2501 SE 14th St, Bentonville,", label: "Restaurants", rating: 5.0, DeliveryOrTakeout: "Delivery", distance: 4.7, Category: "Japanese", StartTime: "11AM", EndTime: "9PM", image: require("./TokyoHouse.jpeg")},
]
const theme = createTheme({
  palette: {
    one: {
      // Purple and green play nicely together.
      main: "#9172ec",
    },
    two: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    three: {
      // This is green.A700 as hex.
      main: '#008081',
    },
    four: {
      // This is green.A700 as hex.
      main: '#FF2800',
    },
    five: {
      // This is green.A700 as hex.
      main: '#e1ad01',
    },
    six: {
      // This is green.A700 as hex.
      main: '#c69f26',
    },
    seven: {
      main: '#000000'
    }
  },
});
const SampleRestaurants = [
  {title: "Jeff's Cookie Shop", price: "$$", location: "Bentonville", label: "Restaurants", rating: 3.5},
  {title: "Jim's Cookie Shop", price: "$$$", location: "Bentonville", label: "Restaurants", rating: 5},
  {title: "Joe's Cookie Shop", price: "$", location: "Bentonville", label: "Restaurants", rating: 4},
  {title: "Joesph's Cookie Shop", price: "$$$$", location: "Bentonville", label: "Restaurants", rating: 4},
  {title: "Jimmy's Cookie Shop", price: "$$$$", location: "Dallas", label: "Restaurants", rating: 1},
  {title: "James's Cookie Shop", price: "$$", location: "Dallas", label: "Restaurants", rating: 3},
  {title: "Jack's Cookie Shop", price: "$", location: "Fort Smith", label: "Restaurants", rating: 2},
  {title: "John's Cookie Shop", price: "$$$", location: "Fort Smith", label: "Restaurants", rating: 5},
  {title: "Malco Theater", price: "$$$", location: "Fort Smith", label: "Entertainment", rating: 2},
]
let styles = {
  divStyle: {
    backgroundColor: 'red'
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false,
      filteredNumbers: [],
      rating: "",
      chosen: "",
      placeholder: [], 
      button1: false,
      button2: false,
      distanceZeroToTwo: false,
      distanceTwoToFour: false,
      distanceFourToSix: false,
      distanceSixToTen: false,
      distanceTenPlus: false,
      category: "",
      time: "",
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    
  }
  renderItem(passed) {
    var merged = [].concat.apply([], passed);
    console.log(JSON.stringify(merged) + " kkkookoko ")
    
    return (
    merged.map((item) => (

      <Card sx={{ minWidth: 275 }}>
          <CardContent>
          <img src = {window.location.origin + "/images/" + "Dominos.jpg"}/>
            <Typography variant="h5" component="div">
              <h3>Title: {item.title}</h3>
            </Typography>
            <Typography>
              <h3>Location: {item.location} </h3>
            </Typography>
            <Typography >
              <h3> Price: {item.price} </h3>
              
            </Typography>
            <Typography style = {{flexDirection: "row"}}>
              <h3>Rating: </h3>
  
            <Rating
            precision={0.1}
        name="read-only"
        value={item.rating}
  />
            </Typography>
            <Typography>
              <h3>Location: {item.distance + " miles"} </h3>
            </Typography>
            <Typography>
              <h3>Category: {item.Category} </h3>
            </Typography>
            <Typography>
              <h3>Start Time: {item.StartTime} </h3>
            </Typography>
            <Typography>
              <h3>End Time: {item.EndTime} </h3>
            </Typography>
            
          </CardContent>
        </Card>
    )))
  }
  filterChecked(passed) {
    if (passed == 1) {
      console.log("WHAT")
      this.setState({checked: true})
    }
    else if (passed == 2) {
      this.setState({checked2: true})
    }
    else if (passed == 3) {
      this.setState({checked3: true})
    }
    else if (passed == 4) {
      this.setState({checked4: true})
    }
    console.log(this.state.checked, this.state.checked2, this.state.checked3, this.state.checked4, passed)
    let c1 = "", c2 = "", c3 = "", c4 = ""
    let filteredNumbers = []
    if (this.state.chosen == "") {
    if (this.state.checked == true) {
        c1 = true;
          filteredNumbers.push(FinalList.filter(function (currentElement) {
            console.log(currentElement.price)
            return currentElement.price == "$";
          })); 
        
      }
      if (this.state.checked2 == true) {
        c2 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          console.log(JSON.stringify(currentElement) + " oooooo")
          return currentElement.price == "$$";
        }));
      }
      if (this.state.checked3 == true) {
        c3 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          return currentElement.price == "$$$";
        }));
      }
      if (this.state.checked4 == true) {
        c4 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          return currentElement.price == "$$$$";
        }));
      }
    }
    else {
      if (this.state.checked == true) {
        c1 = true;
          filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
            console.log(currentElement.price)
            return currentElement.price == "$";
          })); 
        
      }
      if (this.state.checked2 == true) {
        c2 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          console.log(JSON.stringify(currentElement) + " oooooo")
          return currentElement.price == "$$";
        }));
      }
      if (this.state.checked3 == true) {
        console.log(this.state.filteredNumbers)
        c3 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          return currentElement.price == "$$$";
        }));
      }
      if (this.state.checked4 == true) {
        c4 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          return currentElement.price == "$$$$";
        }));
      }
    }
      //browserHistory.push('/OtherPage');
      this.setState({filteredNumbers: filteredNumbers}, () => {
        console.log(this.state.filteredNumbers)
      })
      console.log(JSON.stringify(filteredNumbers) + "USHFSUYHFSUYDHFISHDFISHUFIUDSHFISUDHFIUSFHSIUDFHISUDFHISDUFH")
  }
  removeChecked(passed) {
    let new_Array = []
    let filteredNumbers = [].concat.apply([], this.state.filteredNumbers)
    if (passed == 1) {
      this.setState({checked: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (filteredNumbers[i].price != "$") {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 2) {
      this.setState({checked2: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (filteredNumbers[i].price != "$$") {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 3) {
      this.setState({checked3: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (filteredNumbers[i].price != "$$$") {
          console.log(filteredNumbers[i])
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 4) {
      
      this.setState({checked4: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (filteredNumbers[i].price != "$$$$") {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    this.setState({filteredNumbers: filteredNumbers}, () => {
      console.log(this.state.filteredNumbers)
    })
    console.log(JSON.stringify(filteredNumbers) + "USHFSUYHFSUYDHFISHDFISHUFIUDSHFISUDHFIUSFHSIUDFHISUDFHISDUFH")
  }
  handleChange_2(passed) {
    if (passed == 1) {
      if (this.state.checked) {
        this.setState({checked: false}, () => {
          this.removeChecked(1);
        })
      }
      else {
        this.setState({checked: true}, () => {
          this.filterChecked(1);
      })
        console.log(this.state.checked)
        
      }
    }
    else if (passed == 2) {
      if (this.state.checked2) {
        this.setState({checked2: false}, () => {
          this.removeChecked(2);
        })
      }
      else {
        this.setState({checked2: true}, () => {
          this.filterChecked(2);
      })
      }
    }
    else if (passed == 3) {
      if (this.state.checked3) {
        this.setState({checked3: false}, () => {
          this.removeChecked(3);
        })
      }
      else {
        this.setState({checked3: true}, () => {
          this.filterChecked(3);
      })
      }
    }
    else {
      if (this.state.checked4) {
        this.setState({checked4: false}, () => {
          this.removeChecked(4);
        })
        
      }
      else {
        this.setState({checked4: true}, () => {
          this.filterChecked(4);
      })
      }
    }

  }
  filterDistance(passed) {
    if (passed == 1) {
      console.log("WHAT")
      this.setState({distanceZeroToTwo: true})
    }
    else if (passed == 2) {
      this.setState({distanceTwoToFour: true})
    }
    else if (passed == 3) {
      this.setState({distanceFourToSix: true})
    }
    else if (passed == 4) {
      this.setState({distanceSixToTen: true})
    }
    else if (passed == 5) {
      this.setState({distanceTenPlus: true})
    }
    console.log(this.state.distanceZeroToTwo, this.state.distanceTwoToFour, this.state.distanceFourToSix, this.state.distanceSixToTen, this.state.distanceTenPlus, passed)
    let c1 = "", c2 = "", c3 = "", c4 = "", c5 = ""
    let filteredNumbers = []
    if (this.state.chosen == "") {
    if (this.state.distanceZeroToTwo == true) {
        c1 = true;
          filteredNumbers.push(FinalList.filter(function (currentElement) {
            console.log(currentElement.distance)
            return parseFloat(currentElement.distance) < 2 && parseFloat(currentElement.distance) >= 0;
          })); 
      }
      if (this.state.distanceTwoToFour == true) {
        c2 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          console.log(JSON.stringify(currentElement) + " oooooo")
          return parseFloat(currentElement.distance) < 4 && parseFloat(currentElement.distance) >= 2;
        }));
      }
      if (this.state.distanceFourToSix == true) {
        c3 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          return parseFloat(currentElement.distance) < 6 && parseFloat(currentElement.distance) >= 4;
        }));
      }
      if (this.state.distanceSixToTen == true) {
        c4 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          return parseFloat(currentElement.distance) < 10 && parseFloat(currentElement.distance) >= 6;
        }));
      }
      if (this.state.distanceTenPlus == true) {
        c5 = true
        filteredNumbers.push(FinalList.filter(function (currentElement) {
          return parseFloat(currentElement.distance) >= 10;
        }));
      }
    }
    //this.state.placeholder
    else {
      if (this.state.distanceZeroToTwo == true) {
        c1 = true;
          filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
            console.log(currentElement.distance)
            return parseFloat(currentElement.distance) < 2 && parseFloat(currentElement.distance) >= 0;
          })); 
      }
      if (this.state.distanceTwoToFour == true) {
        c2 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          console.log(JSON.stringify(currentElement) + " oooooo")
          return parseFloat(currentElement.distance) < 4 && parseFloat(currentElement.distance) >= 2;
        }));
      }
      if (this.state.distanceFourToSix == true) {
        c3 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          return parseFloat(currentElement.distance) < 6 && parseFloat(currentElement.distance) >= 4;
        }));
      }
      if (this.state.distanceSixToTen == true) {
        c4 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          return parseFloat(currentElement.distance) < 10 && parseFloat(currentElement.distance) >= 6;
        }));
      }
      if (this.state.distanceTenPlus == true) {
        c5 = true
        filteredNumbers.push(this.state.placeholder.filter(function (currentElement) {
          return parseFloat(currentElement.distance) >= 10;
        }));
      }
    }
      //browserHistory.push('/OtherPage');
      this.setState({filteredNumbers: filteredNumbers}, () => {
        console.log(this.state.filteredNumbers)
      })
      console.log(JSON.stringify(filteredNumbers) + "USHFSUYHFSUYDHFISHDFISHUFIUDSHFISUDHFIUSFHSIUDFHISUDFHISDUFH")
  }
  removeDistance(passed) {
    let new_Array = []
    let filteredNumbers = [].concat.apply([], this.state.filteredNumbers)
    if (passed == 1) {
      this.setState({distanceZeroToTwo: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (!(parseFloat(filteredNumbers[i].distance) < 2 && parseFloat(filteredNumbers[i].distance) >= 0)) {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 2) {
      this.setState({distanceTwoToFour: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (!(parseFloat(filteredNumbers[i].distance) < 4 && parseFloat(filteredNumbers[i].distance) >= 2)) {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 3) {
      this.setState({distanceFourToSix: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (!(parseFloat(filteredNumbers[i].distance) < 6 && parseFloat(filteredNumbers[i].distance) >= 0)) {
          console.log(filteredNumbers[i])
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 4) {
      this.setState({distanceSixToTen: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (!(parseFloat(filteredNumbers[i].distance) < 10 && parseFloat(filteredNumbers[i].distance) >= 0)) {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    else if (passed == 5) {
      this.setState({distanceTenPlus: false})
      for (var i = 0; i < filteredNumbers.length; i++) {
        if (!(parseFloat(filteredNumbers[i].distance) >= 10)) {
          new_Array.push(filteredNumbers[i])
        }
      }
      filteredNumbers = new_Array;
    }
    this.setState({filteredNumbers: filteredNumbers}, () => {
      console.log(this.state.filteredNumbers)
    })
    console.log(JSON.stringify(filteredNumbers) + "USHFSUYHFSUYDHFISHDFISHUFIUDSHFISUDHFIUSFHSIUDFHISUDFHISDUFH")
  }
  handleChange_3(passed) {
    if (passed == 1) {
      if (this.state.distanceZeroToTwo) {
        this.setState({distanceZeroToTwo: false}, () => {
          this.removeDistance(1);
        })
      }
      else {
        this.setState({distanceZeroToTwo: true}, () => {
          this.filterDistance(1);
      })
        console.log(this.state.checked)
        
      }
    }
    else if (passed == 2) {
      if (this.state.distanceTwoToFour) {
        this.setState({distanceTwoToFour: false}, () => {
          this.removeDistance(2);
        })
      }
      else {
        this.setState({distanceTwoToFour: true}, () => {
          this.filterDistance(2);
      })
      }
    }
    else if (passed == 3) {
      if (this.state.distanceFourToSix) {
        this.setState({distanceFourToSix: false}, () => {
          this.removeDistance(3);
        })
      }
      else {
        this.setState({distanceFourToSix: true}, () => {
          this.filterDistance(3);
      })
      }
    }
    else if (passed == 4){
      if (this.state.distanceSixToTen) {
        this.setState({distanceSixToTen: false}, () => {
          this.removeDistance(4);
        })
        
      }
      else {
        this.setState({distanceSixToTen: true}, () => {
          this.filterDistance(4);
      })
      }
    }
    else{
      if (this.state.distanceTenPlus) {
        this.setState({distanceTenPlus: false}, () => {
          this.removeDistance(5);
        })
        
      }
      else {
        this.setState({distanceTenPlus: true}, () => {
          this.filterDistance(5);
      })
      }
    }
  }
  ratingCheck(rating) {
    let new_array = []
    if (this.state.chosen == "")  {
    for (var i = 0; i < FinalList.length; i++) { 
      if (rating - 1 < FinalList[i].rating && FinalList[i].rating <= rating) {
        console.log(rating, FinalList[i].rating, rating - 1,) 
        new_array.push(FinalList[i]);
      }
    }
  }
  else {
    for (var i = 0; i < this.state.placeholder.length; i++) { 
      if (rating - 1 < this.state.placeholder[i].rating <= rating) {
        console.log(rating) 
        new_array.push(this.state.placeholder[i]);
      }
    }
  }
    this.setState({filteredNumbers: new_array})
    console.log(new_array)
  }
  CategoryCheck(passed) {
    if (passed == "Japanese") {
      this.setState({category: "Japanese"})
    }
    if (passed == "Mexican") {
      this.setState({category: "Mexican"})
    }
    if (passed == "Italian") {
      this.setState({category: "Italian"})
    }
    if (passed == "Steak-House") {
      this.setState({category: "Steak-House"})
    }
    if (passed == "Pizza") {
      this.setState({category: "Pizza"})
    }
    if (passed == "Chinese") {
      this.setState({category: "Chinese"})
    }
    let new_array = []
    for (var i = 0; i < this.state.placeholder.length; i++) { 
      if (this.state.placeholder[i].Category == passed) {
        console.log(passed) 
        new_array.push(this.state.placeholder[i]);
      }
    }
    this.setState({filteredNumbers: new_array})
    console.log(new_array)
  }
  onClick() {
    document.getElementById("outlined-basic").value = "";
    this.setState({chosen: "", placeholder: [], rating: "", filteredNumbers: [], checked: false, checked2: false, checked3: false, checked4: false, button1: false, button2: false, distanceZeroToTwo: false, distanceTwoToFour: false, distanceFourToSix: false, distanceSixToTen: false, distanceTenPlus: false, category: "", time: ""}, () => {
      this.renderItem(FinalList);
    })
  }
  handleChange(event) {
    console.log("haddiufhasdiufhsi", event.target.value)
    let new_array = []
  for (var i = 0; i < FinalList.length; i++) { 
    if (FinalList[i].label == event.target.value) {
      console.log(event.target.value) 
      new_array.push(FinalList[i]);
    }
  }
  this.setState({filteredNumbers: new_array})
  this.setState({chosen: event.target.value}, () => {
    console.log(this.state.chosen)
  })
  this.setState({placeholder: new_array})
  console.log(new_array)

  this.setState({rating: "", checked: false, checked2: false, checked3: false, checked4: false, button1: false, button2: false, distanceZeroToTwo: false, distanceTwoToFour: false, distanceFourToSix: false, distanceSixToTen: false, distanceTenPlus: false, category: ""}, () => {
    this.renderItem(FinalList);
  })

  }
  time = (time_one, time_two, time_three) => {
  var t1 = 0;
  var t2 = 0;
  var t3 = 0;
  time_one = time_one.replace(/\s/g, '');
  time_two = time_two.replace(/\s/g, '');
  time_three = time_three.replace(/\s/g, '');
  if (time_one.includes("AM")) {
    if (time_one.includes("12")) {
    t1 = 24;
    }
    else {
    t1 = parseInt(time_one.slice(0, time_one.indexOf("AM")));
    }
  }
  else if(time_one.includes("PM")) {
    if (time_one.includes("12")) {
      t1 = 12;
      }
      else {
      t1 = parseInt(time_one.slice(0, time_one.indexOf("PM"))) + 12;
      }
  }
  if (time_two.includes("AM")) {
    if (time_two.includes("12")) {
    t2 = 24;
    }
    else {
    t2 = parseInt(time_two.slice(0, time_two.indexOf("AM")));
    }
  }
  else if(time_two.includes("PM")) {
    if (time_two.includes("12")) {
      t2 = 12;
      }
      else {
      t2 = parseInt(time_two.slice(0, time_two.indexOf("PM"))) + 12;
      }
  }
  if (time_three.includes("AM")) {
    if (time_three.includes("12")) {
    t3 = 24;
    }
    else {
    t3 = parseInt(time_three.slice(0, time_three.indexOf("AM")));
    }
    
  }
  else if(time_three.includes("PM")) {
    if (time_three.includes("12")) {
      t3 = 12;
      }
      else {
      t3 = parseInt(time_three.slice(0, time_three.indexOf("PM"))) + 12;
      }
  }
  if ((t1 <= t3) && (t3 <= t2)) {
    return true;
  }
  else {
    return false;
  }
}

TimePress = () => {
  var time = document.getElementById("outlined-basic").value
  let new_array = []
    if (this.state.chosen == "")  {
    for (var i = 0; i < FinalList.length; i++) { 
      if (this.time(FinalList[i].StartTime, FinalList[i].EndTime, time)) {
        new_array.push(FinalList[i]);
      }
    }
  }
  else {
    for (var i = 0; i < this.state.placeholder.length; i++) { 
      if (this.time(this.state.placeholder[i].StartTime, this.state.placeholder[i].EndTime, time)) {
        new_array.push(this.state.placeholder[i]);
      }
    }
  }
    this.setState({filteredNumbers: new_array})
    this.setState({time: time})
    console.log(new_array)
}

 filterButton = (passed) => {
  if (passed == "Delivery") {
    if (this.state.button2 == true) {
      this.setState({button2: false}, () => {
        console.log(this.state.button2)
      })
    }
    this.setState({button1: true}, () => {
      console.log(this.state.button1)
    })
  }
  else if (passed == "Takeout"){
    if (this.state.button1 == true) {
      this.setState({button1: false}, () => {
        console.log(this.state.button1)
      })
    }
    this.setState({button2: true}, () => {
      console.log(this.state.button2)
    })
  }
  let new_array = []
    if (this.state.chosen == "")  {
    for (var i = 0; i < FinalList.length; i++) { 
      if (FinalList[i].DeliveryOrTakeout == passed || FinalList[i].DeliveryOrTakeout == "Takeout/Delivery") {
        new_array.push(FinalList[i]);
      }
    }
  }
  else {
    for (var i = 0; i < this.state.placeholder.length; i++) { 
      if (this.state.placeholder[i].DeliveryOrTakeout == passed || this.state.placeholder[i].DeliveryOrTakeout == "Takeout/Delivery") {
        new_array.push(this.state.placeholder[i]);
      }
    }
  }
    this.setState({filteredNumbers: new_array})
    console.log(new_array)
 }
  render() {
    
    return (
      <div>

<div class = "sticky">
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.chosen ?? ""}
          label="Choose option"
          defaultValue = "none"
          backgroundColor = "#ffffff"
          onChange = {this.handleChange.bind(this)}
        >
          <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
          <MenuItem value={"Restaurants"}>Restaurants</MenuItem>
          <MenuItem value={"Shopping"}>Shopping</MenuItem>
          <MenuItem value={"Hotels"}>Hotels</MenuItem>
          <MenuItem value={"Famous Places"}>Famous Places</MenuItem>
        </Select>
      </FormControl>        
         <FormGroup>
   <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.checked}
   onChange={() => this.handleChange_2(1)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="$" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.checked2}
   onChange={() => this.handleChange_2(2)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="$$" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.checked3}
   onChange={() => this.handleChange_2(3)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="$$$" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.checked4}
   onChange={() => this.handleChange_2(4)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="$$$$" />
 </FormGroup>
 <FormGroup>
   <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.distanceZeroToTwo}
   onChange={() => this.handleChange_3(1)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="0-2 miles" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.distanceTwoToFour}
   onChange={() => this.handleChange_3(2)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="2-4 miles" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.distanceFourToSix}
   onChange={() => this.handleChange_3(3)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="4-6 miles" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.distanceSixToTen}
   onChange={() => this.handleChange_3(4)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="6-10 miles" />
 <FormControlLabel control={<Checkbox
           label = "50"
   checked={this.state.distanceTenPlus}
   onChange={() => this.handleChange_3(5)}
   inputProps={{ 'aria-label': 'controlled' }}
   
 />} label="10+ miles" />
 </FormGroup>
 <Rating
        name="simple-controlled"
        value = {this.state.rating}
        onChange={(event, newValue) => {
          this.setState({rating: newValue}, () => {
            this.ratingCheck(newValue)
          }) 
        }}
  />
  {this.state.chosen == "Restaurants" && (<Typography style = {{flexDirection: "row", alignItems: "center"}}>
              <ThemeProvider theme = {theme}>
              {this.state.category == "Japanese" && (
                <Button variant = "contained" color = "seven" onClick = {() => {
                  this.CategoryCheck("Japanese")
                }}>
                  <p style = {{color: "white"}}>Japanese</p>
                </Button>
              )}
              {this.state.category != "Japanese" && (
                <Button variant = "contained" color = "one" onClick = {() => {
                  this.CategoryCheck("Japanese")
                }}>
                  <p style = {{color: "white"}}>Japanese</p>
                </Button>
              )}
              {this.state.category == "Mexican" && (
                <Button variant = "contained" color = "seven" onClick = {() => {
                  this.CategoryCheck("Mexican")
                }}>
                  <p style = {{color: "white"}}>Mexican</p>
                </Button>
              )}
              {this.state.category != "Mexican" && (
                <Button variant = "contained" color = "two" onClick = {() => {
                  this.CategoryCheck("Mexican")
                }}>
                  <p style = {{color: "white"}}>Mexican</p>
                </Button>
              )}
              {this.state.category == "Italian" && (
                <Button variant = "contained" color = "seven" onClick = {() => {
                  this.CategoryCheck("Italian")
                }}>
                  <p style = {{color: "white"}}>Italian</p>
                </Button>
              )}
              {this.state.category != "Italian" && (
                <Button variant = "contained" color = "three" onClick = {() => {
                  this.CategoryCheck("Italian")
                }}>
                  <p style = {{color: "white"}}>Italian</p>
                </Button>
              )}
              {this.state.category == "Steak-House" && (
                <Button variant = "contained" color = "seven" onClick = {() => {
                  this.CategoryCheck("Steak-House")
                }}>
                  <p style = {{color: "white"}}>Steak-House</p>
                </Button>
              )}
              {this.state.category != "Steak-House" && (
                <Button variant = "contained" color = "four" onClick = {() => {
                  this.CategoryCheck("Steak-House")
                }}>
                  <p style = {{color: "white"}}>Steak-House</p>
                </Button>
              )}
             {this.state.category == "Pizza" && (
                <Button variant = "contained" color = "seven" onClick = {() => {
                  this.CategoryCheck("Pizza")
                }}>
                  <p style = {{color: "white"}}>Pizza</p>
                </Button>
              )}
              {this.state.category != "Pizza" && (
                <Button variant = "contained" color = "five" onClick = {() => {
                  this.CategoryCheck("Pizza")
                }}>
                  <p style = {{color: "white"}}>Pizza</p>
                </Button>
              )}
              {this.state.category == "Chinese" && (
                <Button variant = "contained" color = "seven" onClick = {() => {
                  this.CategoryCheck("Chinese")
                }}>
                  <p style = {{color: "white"}}>Chinese</p>
                </Button>
              )}
              {this.state.category != "Chinese" && (
                <Button variant = "contained" color = "six" onClick = {() => {
                  this.CategoryCheck("Chinese")
                }}>
                  <p style = {{color: "white"}}>Chinese</p>
                </Button>
              )}
              </ThemeProvider>
  </Typography>)}
  <Typography style = {{flexDirection : "row"}}>
    <p>Time: </p>
  <TextField id="outlined-basic" label="Time" variant="outlined"/>
  <Button variant="contained" style = {{backgroundColor: "#fa90a3"}} 
             onClick={() => {
              this.TimePress();
            }}
             >
               Enter
             </Button>

  </Typography>
  <Typography >
             <Button variant="contained" style = {{backgroundColor: "#fa90a3"}} 
             onClick={() => {
              this.onClick();
            }}
             >
               Reset
             </Button>
              
            </Typography>
    </div>
  <div style={{display: "flex", flexDirection: "column", width: "59%"}}>
{(this.state.chosen == "Restaurants") && (
  <div style = {{flexDirection: "row"}}>
    {this.state.button1 == false && (
      <Button variant="contained" style = {{width: "48%", marginRight: "1%", marginLeft: "1%", backgroundColor: "#fa90a3"}} onClick = {() => {
        this.filterButton("Delivery")
      }}
      >
        Delivery/Both
      </Button>
    )}
    {this.state.button1 == true && (
      <Button variant="contained" style = {{width: "48%", marginRight: "1%", marginLeft: "1%", backgroundColor: "#a4fa90"}} onClick = {() => {
        this.filterButton("Delivery")
      }}
      >
        Delivery/Both
      </Button>
    )}
    {this.state.button2 == false && (
    <Button variant="contained" style = {{width: "48%", backgroundColor: "#fa90a3"}} onClick = {() => {
      this.filterButton("Takeout")
    }}>
      Takeout/Both
    </Button>
    )}
    {this.state.button2 == true && (
    <Button variant="contained" style = {{width: "48%", backgroundColor: "#a4fa90"}} onClick = {() => {
      this.filterButton("Takeout")
    }}>
      Takeout/Both
    </Button>
    )}
  </div>
)}
{(this.state.checked == false && this.state.checked2 == false && this.state.checked3 == false && this.state.checked4 == false && this.state.filteredNumbers.length == 0 && this.state.chosen == "" && this.state.distanceZeroToTwo == false && this.state.distanceTwoToFour == false && this.state.distanceFourToSix == false && this.state.distanceSixToTen == false && this.state.distanceTenPlus == false) && (
  this.renderItem(FinalList)
)}
{(this.state.checked == false && this.state.checked2 == false && this.state.checked3 == false && this.state.checked4 == false && this.state.filteredNumbers.length == 0 && this.state.chosen != "" && this.state.distanceZeroToTwo == false && this.state.distanceTwoToFour == false && this.state.distanceFourToSix == false && this.state.distanceSixToTen == false && this.state.distanceTenPlus == false) && (
  this.renderItem(this.state.placeholder)
)}
{((this.state.checked != false || this.state.checked2 != false || this.state.checked3 != false || this.state.checked4 != false || this.state.chosen != "" || this.state.rating != "" || this.state.time != "" || this.state.distanceZeroToTwo != false || this.state.distanceTwoToFour != false || this.state.distanceFourToSix != false || this.state.distanceSixToTen != false || this.state.distanceTenPlus != false) && this.state.filteredNumbers.length != 0) && (
  this.renderItem(this.state.filteredNumbers)
)}
</div>
</div> 
      
    );
  }
}

export default App;
