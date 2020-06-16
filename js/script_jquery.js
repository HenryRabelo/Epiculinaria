$(document).ready(function(){
	
	var conteudo = document.getElementById('item-list');
	var card = new Array();
	var i = parseInt('0');
	var vetor = new Array();

	$(document).on('click','#food-cart',function(){

        //conteudo.innerHTML= vetor[i-1];
        if (i == 0) {
        	conteudo.innerHTML="<h4> Ainda não temos uma receita no carrinho! </h4>";
        } else {

        	var cartao = "";
        	var j = parseInt('0');

        	for(j = 0; j < i; j++) {

        		cartao = cartao + ('<tr><td> \
        			<div id="item" class="card mb-3 h-100"> \
        				<div id="item-title" class="card-header"> <p>'+vetor[j]+'</p> </div> \
        				<img id="item-img" src="assets/img/produtos/'+vetor[j]+'.jpeg" class="card-img-top" alt="..." /> \
        				<div class="card-footer"> \
        					<button type="button" class="btn btn-info"> Ver Receita </button> \
        					<button type="button" class="btn btn-info"> Remover </button> \
        				</div> \
        			</div> \
        		</td></tr>');

    		}

    		conteudo.innerHTML = cartao;

    	}

	});
    
	$(document).keypress(function(e){
	//	var t = e.which;
		if(e.which == 13)
			$('#Search').click();
	});

	$(document).on('click','#Search',function(e){
		var busca = document.getElementById('search-input').value;
    	switch(busca){
		case "macarrao":
			vetor[i]="Macarrao";
			i++;
			//alert("tem");
		break;

		case "batata":
			vetor[i]="Batata";
			i++;
			//alert("tem");
		break;

		case "pudim":
    		vetor[i]="Pudim";
			i++;
			//alert("tem");
		break;

		case "pizza":
    		vetor[i]="Pizza";
			i++;
			//alert("tem");
		break;

		default:
			//alert("Nenhum produto com este nome");
		break;

		}

    	//alert("Inseriu");

	});
	$('#table-search').hide();
	var vetor_aux=['macarrao','pizza','batata','pudim'];
	$(document).keypress(function(e){
		//alert(e.which);
	var search =document.getElementById('search-input').value;
	var word_aux=String.fromCharCode(e.keyCode);
	var check = parseInt('0');
	var aux_search=search + word_aux;
	//alert(aux_search);
	if(search!=''){
		$('#table-search').show();
		/*var table=getElementById("table-conteudo");"btn btn-light"
		table.innerHTML="<p>t(document).keypress(function(e)este</p>";*/
		var nome;
		var j=parseInt('0');
		for(j=0;j<4;j++){
			if(aux_search==vetor_aux[j]){
				if(j==0){
					nome="Macarrão";	
				}
				if(j==1){
					nome="Pizza";	
				}
				if(j==2){
					nome="Batata";	
				}
				if(j==3){
					nome="Pudim";	
				}
			c= ("<tr><td><img class='imagem-produto' src=assets/img/produtos/"+vetor_aux[j]+".jpeg></td><td id='product-name'><h4>"+nome+"</h4></td><td><button id='add-produto' class='btn btn-light'>+</button></td></tr>");
			$('#table-conteudo').html(c);
			check++;
			}
		}
		if(check==0){
			$('#table-conteudo').html("<h4 class='name-product'>Nehum produto com esse nome</h4>");

		}
	}

	});
	$(document).on('click','#add-produto',function(){
		$('#Search').click();
	});
	$(document).keydown(function(e){
		if(e.which==8){
			if(document.getElementById('search-input').value==''){
				$('#table-search').hide();
			}
		}
	});
});
