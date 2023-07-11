/*  Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
traffic light is red print the vehicles must stop.  */


let trafficSignalLight = "red"


if(trafficSignalLight == "red")
{
    console.log("stop your vehicle");
}
else if(trafficSignalLight == "yellow")
{
    console.log("slow your vehicle");
}
else if(trafficSignalLight == "green")
{
    console.log("Go");
}
else
{
    console.log("Invalid traffic light");
}

