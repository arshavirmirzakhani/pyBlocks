/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'media', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true, 
	grid : {
		spacing : 20, 
		length : 1, 
		colour : '#888', 
		snap : false
	}
};

var workspace = Blockly.inject("editor", options);

var workspaceBlocks = document.getElementById("workspaceBlocks"); 

Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

const supportedEvents = new Set([
	Blockly.Events.BLOCK_CHANGE,
	Blockly.Events.BLOCK_CREATE,
	Blockly.Events.BLOCK_DELETE,
	Blockly.Events.BLOCK_MOVE,
  ]);
  
function updateCode(event) {
	if (workspace.isDragging()) return;
	if (!supportedEvents.has(event.type)) return;
  
	const code = python.pythonGenerator.workspaceToCode(workspace);
	document.getElementById('output').innerHTML = code;
}
  
workspace.addChangeListener(updateCode);