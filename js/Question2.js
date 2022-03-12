class Question2 {
    constructor() {
      this.input2 = createInput("").attribute("placeholder", "Enter your answer");
      this.button =  createButton("Submit");
      this.question = createElement('h1');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
    }

   


    setElementsStyle(){
      this.input2.class("customInput");
      this.button.class("customButton");
    }
    setElementPosition(){
      this.input2.position(150,260);
      this.button.position(150,300);
    }
    display(){
    
        this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
        this.question.position(150, 80);
        this.option1.html("1: Everyone " );
        this.option1.position(150, 120);
        this.option2.html("2: Envelope" );
        this.option2.position(150, 140);
        this.option3.html("3: Estimate " );
        this.option3.position(150, 160);
        this.option4.html("4: Example" );
        this.option4.position(150, 180);
        this.setElementsStyle();
        this.setElementPosition();
    }
}