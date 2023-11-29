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
  var code = value_left + '+' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['subtract_block'] = function(block, generator) {
  var value_left = generator.valueToCode(block, 'left', python.Order.ATOMIC);
  var value_right = generator.valueToCode(block, 'right', python.Order.ATOMIC);
  var code = value_left + '-' + value_right;
  return [code, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['if_block'] = function(block, generator) {
  var value_condition = generator.valueToCode(block, 'condition', python.Order.ATOMIC);
  var statements_statement = generator.statementToCode(block, 'statement');
  var code = 'if ' + value_condition + ':\n' + statements_statement;
  return code;
};