$(document).ready(function(){
	$('#cart').hide();
	
	var conteudo = document.getElementById('item-list');
	var show=parseInt('0');
	$(document).on('click','#food-cart',function(){
       if(show != 0){
        $('#cart').show();
        //conteudo.innerHTML= vetor[i-1];
        if(i==0){
        	conteudo.innerHTML="<h4> Ainda não temos uma receita ao carrinho! </h4>";
        } else {

        var aux="<tr><td> Seu carrinho: </td></tr>";
        var j= parseInt('0');
        
        for(j=0;j<i;j++){
        	aux= aux + ("<tr><td><img class='imagem-produto' src=assets/img/produtos/"+vetor[j]+".jpeg></td><td><p>"+vetor[j]+"</p></td></tr>");
        }
        conteudo.innerHTML=aux;

    }
        show--;
	}

    else{
    	 $('#cart').hide();
    	 show++;
    }
       });
    
	$(document).keypress(function(e){
	//	var t = e.which;
		if(e.which==13)
			$('#Search').click();
		});

	$(document).on('click','.close', function(){
		$('#cart').hide();
	});

	var card= new Array();
	var i=parseInt('0');
	var vetor = new Array();

	$(document).on('click','#Search',function(e){
		var busca =document.getElementById('search-input').value;
    switch(busca){
	case "macarrao":
	vetor[i]="Macarrao";
	alert("Inseriu");
	i++;
	//alert("tem");
	break;

	case "batata":
	vetor[i]="Batata";
	alert("Inseriu");
	i++;
	//alert("tem");
	break;

	case "pudim":
    vetor[i]="Pudim";
    alert("Inseriu");
	i++;
	//alert("tem");
	break;

	case "pizza":
    vetor[i]="Pizza";
    alert("Inseriu");
	i++;
	//alert("tem");
	break;

	default:
	//alert("Nenhum produto com este nome");
	
}


	});


});
