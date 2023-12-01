python.pythonGenerator.forBlock['print_block'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'value', python.Order.ATOMIC);
  var code = 'print(' + value_value +')\n';
  return code;
};

python.pythonGenerator.forBlock['string_block'] = function(block, generator) {
  var text_input = block.getFieldValue('input');
  var code = "\"" + text_input + "\"";
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['add_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' + ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['subtract_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' - ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['if_block'] = function(block, generator) {
  var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, 'statement');
  var code = 'if ' + value_condition + ':\n' + statements_statement;
  return code;
};

python.pythonGenerator.forBlock['number_block'] = function(block, generator) {
  var number_input = block.getFieldValue('input');
  var code = number_input;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['equal_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' == ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['if_else_block'] = function(block, generator) {
  var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, 'statement');
  var statements_else = generator.statementToCode(block, 'else');
  var code = 'if ' + value_condition + ':\n' + statements_statement + "\n" + "else : \n" + statements_else;
  return code;
};

python.pythonGenerator.forBlock['multiply_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' * ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['division_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' / ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['not_equal_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' != ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['while_block'] = function(block, generator) {
  var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, 'statement');
  var code = 'while ' + value_condition + ':\n' + statements_statement
  return code;
};

python.pythonGenerator.forBlock['greater_than_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' > ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['less_than_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' < ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['greater_than_equal_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' >= ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['less_than_equal_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + ' <= ' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['input_block'] = function(block, generator) {
  var text_input = block.getFieldValue('input');
  var code = 'input(\"' + text_input +'\")\n';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['true_block'] = function(block, generator) {
  var code = 'True';
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['false_block'] = function(block, generator) {
  var code = 'False';
  return [code, python.Order.ATOMIC];
};