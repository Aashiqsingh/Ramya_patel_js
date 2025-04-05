function getCity(){

    var city = document.getElementsByClassName("city")
    console.log(city);

    var cityName = ""

    if(city[0].selected == true){
        cityName = "Ahmedabad"
    }
    else if(city[1].selected == true){
        cityName = "Surat"
    }
    else if(city[2].selected == true){
        cityName = "Rajkot"
    }else if(city[3].selected == true){
        cityName = "Baroda"
    }
    

    console.log(cityName);
    

}