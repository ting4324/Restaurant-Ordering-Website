function getBotResponse(input){
    if (input == "Thank you" || input == "Thanks" || input == "Goodbye" || input == "Bye"){
        return "Hope that helps!"
    }


    if (input == "how to order" || input == "how to order?" || input == "1"){
        return "Make sure that you have an account, proceed to our menu page and start your order!";
    }else if (input == "payment method" || input == "2"){
        return "We provide credit card payment and COD for online orders.";
    }else if (input == "cancel order" || input == "3"){
        return "Unfortunately, you can't cancel your order one payment is done.";
    }else if (input == "delivery fees" || input == "4"){
        return "Delivery are free until 30 Nov 2022 due to celebration of our grand opening.";
    }else if (input == "delivery time" || input == "5"){
        return "Delivery time takes arond 30mins, may vary due to traffic or weather.";
    }else if (input == "dine-in" || input == "6"){
        return "Our store is located at Setapak, TARUMT, menu are same as online.";
    }else{
        let firstMessage = "What can I help you?";
        let line1Message = "You can ask me these questions:";
        let line2Message = "1.How to order? ";
        let line3Message = "2.Payment Method";
        let line4Message = "3.Cancel Order";
        let line5Message = "4.Delivery Fees";
        let line6Message = "5.Delivery Time";
        let line7Message = "6.Dine-in";

        return firstMessage + '<br>' + line1Message + '<br>' + line2Message + '<br>' + line3Message + '<br>' + line4Message + '<br>' +line5Message +'<br>' + line6Message + '<br>' +line7Message + '</span></p>';
    }
}