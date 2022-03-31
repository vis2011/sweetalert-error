class updateForm {
    constructor() {
        //title
        this.text = createElement("h2");
        //school name
        this.input = createElement("h2");
        //registeration number
        this.input1 = createElement("h2");
        //location
        this.input2 = createElement("h2");
        //mail id
        this.input3 = createElement("h2");
        //phone number
        this.input4 = createElement("h2");
        //number of students
        this.input5= createElement("h2");
        //total vaccination needed
        this.input6 = createElement("h2");
        this.nextButton = createButton("Log out");

    this.Text1 = createElement("h2");
    this.Text2 = createElement("h2");
    this.Text3 = createElement("h1");
    this.Text4 = createElement("h2");
    this.Text5 = createElement("h2");
    this.Text6 = createElement("h2");
    this.tVaText = createElement("h2");
    }

    setelementPositions() {
        //position
        this.text.position(width / 2 - 150, height / 2 - -470);
        this.input.position(width / 2 - 680, height / 2 - -520);
        this.input1.position(width / 2 - 680, height / 2 - -670);
        this.input2.position(width / 2 - 680, height / 2 - -820);
        this.input3.position(width / 1.3 - 180, height / 2 - -670);
        this.input4.position(width / 1.3 - 180, height / 2 - -520);
        this.input5.position(width / 1.3 - 180, height / 2 - -820);
        this.input6.position(width / 2.1 - 220, height / 2 - -670);
        this.nextButton.position(width / 2 - 100, height / 1 - -630);

        this.Text1.position(width / 2 - 660, height / 2 - -480);
        this.Text2.position(width / 2 - 660, height / 2 - -630);
        this.Text3.position(width / 2 - 660, height / 2 - -780);
        this.Text4.position(width / 1.3 - 160, height / 2 - -630);
        this.Text5.position(width / 1.3 - 160, height / 2 - -480);
        this.Text6.position(width / 1.3 - 160, height / 2 - -780);
        this.tVaText.position(width / 2.1 - 200, height / 2 - -630);
    }

    setElementsStyle() {
        
        //class
        this.text.class("greeting1");
        this.input.class("customInput1");
        this.input1.class("customInput1");
        this.input2.class("customInput1");
        this.input3.class("customInput1");
        this.input4.class("customInput1");
        this.input5.class("customInput1");
        this.input6.class("customInput1");
        this.nextButton.class("customButton");

        this.Text1.class("greeting1");
        this.Text2.class("greeting2");
        this.Text3.class("greeting2");
        this.Text4.class("greeting2");
        this.Text5.class("greeting2");
        this.Text6.class("greeting2");
        this.tVaText.class("greeting2");
    }


    handleMousePressed() {
      
        //text in element
        var ti =`details of school`;
        this.text.html(ti);
 
        this.input.html( schoolND);
        this.input1.html(registerND);
        this.input2.html(locationD);
        this.input3.html(mailId );
        this.input4.html(phoneND );
        this.input5.html(NOSD);
        this.input6.html(tvnD);

        var mess2 = `School registartion number`;
        this.Text2.html(mess2);
        var mess3 = `Address of the school`;
        this.Text3.html(mess3);
        var mess4 = `School E-Mail ID`;
        this.Text4.html(mess4);
        var mess5 = `School Phone number`;
        this.Text5.html(mess5);
        var mess6 = `No. of students in school`;
        this.Text6.html(mess6);
        var mess1 = `School name`;
        this.Text1.html(mess1);
        var mess7 = `Total vaccination needed`;
        this.tVaText.html(mess7);
}
hide(){
    this.text.hide();
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    this.input5.hide();
    this.input6.hide();
    this.nextButton.hide();
    this.Text1.hide();
    this.Text2.hide();
    this.Text3.hide();
    this.Text4.hide();
    this.Text5.hide();
    this.Text6.hide();
    this.tVaText.hide();
}

    display() {
      this.nextButton.mousePressed(() =>{
            window.location.reload();
        })
        
        this.setelementPositions();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}
