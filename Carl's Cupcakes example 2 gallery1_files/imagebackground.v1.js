define("imagebackgroundv1",["jquery"],function(a){var b={loadModule:function(e,c){var d=this;if(a("input[id$=hdnSupesizedConfig]").size()>0){var f=a("input[id$=hdnSupesizedConfig]").val();a.supersized(a.parseJSON(f))}}};return b});