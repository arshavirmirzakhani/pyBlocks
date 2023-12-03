Blockly.Blocks['string_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Hello World!"), "input");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['add_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['subtract_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("-");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_block'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("print");
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");   
 this.setHelpUrl("");
  }
};  


Blockly.Blocks['if_block'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("statement")
        .setCheck(null)
        .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['number_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "input");
    this.setOutput(true, "Number");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['equal_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("==");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_else_block'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("statement")
        .setCheck(null)
        .appendField("then");
    this.appendStatementInput("else")
        .setCheck(null)
        .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['multiply_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("*");
    this.appendValueInput("right")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['division_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['not_equal_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("!=");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_else_block'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("statement")
        .setCheck(null)
        .appendField("then");
    this.appendStatementInput("else")
        .setCheck(null)
        .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['multiply_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("*");
    this.appendValueInput("right")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['division_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['while_block'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("while");
    this.appendStatementInput("statement")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['greater_than_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(">");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['less_than_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("<");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['greater_than_equal_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(">=");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['less_than_equal_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("<=");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['input_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("input")
        .appendField(new Blockly.FieldTextInput("prompt"), "input");
    this.setOutput(true, "String");
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['true_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("True");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['false_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("False");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['modulo_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.appendValueInput("right")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['power_block'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("^");
    this.appendValueInput("right")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['range_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("range");
    this.appendValueInput("start")
        .setCheck(null)
        .appendField("begin");
    this.appendValueInput("end")
        .setCheck(null)
        .appendField("end");
    this.appendValueInput("step")
        .setCheck(null)
        .appendField("step");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['for_block'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("for")
        .appendField(new Blockly.FieldVariable("index"), "variable")
        .appendField("in");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list")
        .appendField(new Blockly.FieldTextInput("1,2,3"), "input");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_append_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("append");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("list")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_index_get_block'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("get index")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "index")
        .appendField("of");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_index_set_block'] = {
  init: function() {
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("set index")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "index")
        .appendField("of");
    this.appendDummyInput()
        .appendField("to")
        .appendField(new Blockly.FieldTextInput("1,2,3"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_remove_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("remove");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("from");
    this.appendValueInput("list")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};