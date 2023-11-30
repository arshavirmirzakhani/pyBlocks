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