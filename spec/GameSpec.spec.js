describe("Calculator", function() {
  beforeEach(function(){
    var fixture = '<div id="container">'+
    '<div id="calculator">'+
      '<div id="result">'+
        '<div id="history">'+
          '<p id="history-value"></p>'+
        '</div>'+
        '<div id="output">'+
          '<p id="output-value"></p>'+
        '</div>'+
      '</div>'+
      '<div id="keyboard">'+
        '<button class="operator" id="clear">C</button>'+
        '<button class="operator" id="backspace">CE</button>'+
        '<button class="operator" id="%">%</button>'+
        '<button class="operator" id="/">&#247;</button>'+
        '<button class="number" id="7">7</button>'+
        '<button class="number" id="8">8</button>'+
        '<button class="number" id="9">9</button>'+
        '<button class="operator" id="*">&times;</button>'+
        '<button class="number" id="4">4</button>'+
        '<button class="number" id="5">5</button>'+
        '<button class="number" id="6">6</button>'+
        '<button class="operator" id="-">-</button>'+
        '<button class="number" id="1">1</button>'+
        '<button class="number" id="2">2</button>'+
        '<button class="number" id="3">3</button>'+
        '<button class="operator" id="+">+</button>'+
        '<button class="empty" id="empty"></button>'+
        '<button class="number" id="0">0</button>'+
        '<button class="empty" id="empty"></button>'+
        '<button class="operator" id="=">=</button>'+
      '</div>'+
    '</div>'+
  '</div>';
  document.body.insertAdjacentHTML(
    'afterbegin',fixture);
  })
  afterEach(function(){
    document.body.removeChild(document.getElementById('container'));
  })
  it("should return history value", function() {
    document.getElementById("history-value").innerText = "5+";
    expect(getHistory()).toEqual("5+");
  });
  it("should print history value", function() {
    printHistory("5+");
    expect(document.getElementById("history-value").innerText).toEqual("5+");
  });

  it("should return output value", function() {
    document.getElementById("output-value").innerText = "10";
    expect(getOutput()).toEqual("10");
  });

  it("should print output value", function() {
    printOutput("10");
    expect(document.getElementById("output-value").innerText).toEqual("10");
  });

  it("should format number correctly", function() {
    expect(getFormattedNumber("1000")).toEqual("1,000");
  });

  it("should reverse formatted number correctly", function() {
    expect(reverseNumberFormat("1,000")).toEqual(1000);
  });
  it("should add two numbers correctly", function() {
    printHistory("5+");
    printOutput("5");
    document.getElementById("+").click();
    printOutput("10");
    document.getElementById("=").click();
    expect(document.getElementById("output-value").innerText).toEqual("15");
  });

});
  