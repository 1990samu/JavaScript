class Car
{
     switchEngineOn(){
        console.log("Switching on the Engine")
    }

     switchEngineOff(){
        console.log("Switching off the Engine")
    }
}

class Toyota extends Car
{
     model(model){
        console.log("The mode of the Car is " + model);
    }
}

var toyota = new Toyota();
toyota.model("Fortuner");
toyota.switchEngineOff();