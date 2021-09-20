function appendText(){

    var text = document.getElementById('usertext').value;

        if ( document.getElementById('usertext').value ){

            var div = document.createElement('div');
            div.className = 'divex';

            var li = document.createElement('li');
            li.setAttribute('id', 'list');  
            div.appendChild(li);

            var texty = document.createTextNode(text);
            var bigdiv = document.getElementById('addedText');

            var editbutton = document.createElement('BUTTON');
            editbutton.setAttribute('id', 'button_click');
            var buttontext = document.createTextNode('Edit');
            editbutton.appendChild(buttontext); 

            bigdiv.appendChild(li).appendChild(texty);
            bigdiv.appendChild(li).appendChild(editbutton);

            editbutton.onclick = makeAreaEditable;
            var makeAreaEditable = function(){

                        var textareaEdit = document.createElement('textarea');
                        textareaEdit.onclick = myFunction;
                        textareaEdit.customProperty = li.value;

                        function myFunction(e){
                            var objLi = e.currentTarget;
                            objLi.value = objLi.customProperty;
                            document.getElementByID("button_click").value = "ok";
                        };
                    };

            document.getElementById('usertext').value = "";   
    }        
};