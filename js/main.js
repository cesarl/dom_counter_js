$("document").ready(function(){
    DomCounter.launch($(".domCounter"), function(){console.log("callback!!!")});
    DomCounter.launch($(".domCounter2"), function(){console.log("callback!!!")});
});