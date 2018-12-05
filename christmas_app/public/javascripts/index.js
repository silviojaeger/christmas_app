function turnOnOff(on){
    if(on){
        fetch('./on');
    }else{
        fetch('./off');
    }
}
