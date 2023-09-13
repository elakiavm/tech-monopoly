

$(document).ready(function(){
	  
	// unique key_types: go, command, rest, nothing, find

	fillInfo();

	update_welath_board();

	function fillInfo(){

		// colog('boxes : ' + boxes.length);

		box_length = boxes.length
		// box_length = 12;

		// hide all buttons first
		for(var aa_index = 0; aa_index < ALL_AVAILABLE_USERS_COUNT; aa_index++){
			$('#user_'+(aa_index)+'_button').hide();

			// hide wealth info
			$('#user_'+(aa_index)+'_wealth_info').hide();
		}

		// show button 
		for(var tu_index = 0; tu_index < TOTAL_USERS_COUNT; tu_index++){
			$('#user_'+(tu_index)+'_button').show();

			// fill button color
			// colog('trap2 : '+('#user_'+(tu_index)+'_button'));
			$('#user_'+(tu_index)+'_button').css("background-color", USER_COLORS['user_'+(tu_index)]);

			// show wealth info
			$('#user_'+(tu_index)+'_wealth_info').show();
		}

		for(var index = 0 ; index <  box_length; index ++){

			var current_box_object = box_objects[boxes[index]];

			// colog(current_box_object);

			if(current_box_object['key_type'] == 'go'){
				// colog(current_box_object['name'] + ' is ' + 'Go');

			} else if(current_box_object['key_type'] == 'command' || current_box_object['key_type'] == 'kollywood'){
				// colog(current_box_object['name'] + ' is ' + 'command');

				$("#"+boxes[index]+" .name").html(current_box_object['name']);
				$("#"+boxes[index]+" .price").html('Price $'+current_box_object['price']);

			} else if(current_box_object['key_type'] == 'rest'){
				// colog(current_box_object['name'] + ' is ' + 'rest');

				$("#"+boxes[index]+" .name").html(current_box_object['name']);
				$("#"+boxes[index]+" .price").html('');

			} else if(current_box_object['key_type'] == 'nothing'){ // nothing
				// colog(current_box_object['name'] + ' is ' + 'nothing');

				$("#"+boxes[index]+" .name").html(current_box_object['name']);
				$("#"+boxes[index]+" .price").html('');
			} else if(current_box_object['key_type'] == 'fine'){ // fine
				// colog(current_box_object['name'] + ' is ' + 'fine');

				$("#"+boxes[index]+" .name").html(current_box_object['name']);
				$("#"+boxes[index]+" .price").html('Price $'+current_box_object['price']);
			}
		}

		// fill info board
		imageUrl = "https://accountabletech.org/wp-content/uploads/Feature-28.png";
		$('.info_board .banner').css('background-image', 'url(' + imageUrl + ')');
	}

	// colog(boxes);

	fillUserNameInButtons();

	function fillUserNameInButtons(){

		for(var c_index = 0; c_index < TOTAL_USERS_COUNT; c_index++){
			$('#user_'+(c_index)+'_button').html(all_users[c_index]);
		}
	}

	var current_user_index = 0;

	$("#user_0_button").click(function(){
		$(".current_player").text(all_users[0]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_0']);
		move_coin(0);
		current_user_index = 0;
	});

	$("#user_1_button").click(function(){
		$(".current_player").text(all_users[1]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_1']);
		move_coin(1);
		current_user_index = 1;
	});

	$("#user_2_button").click(function(){
		$(".current_player").text(all_users[2]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_2']);
		move_coin(2);
		current_user_index = 2;
	});

	$("#user_3_button").click(function(){
		$(".current_player").text(all_users[3]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_3']);
		move_coin(3);
		current_user_index = 3;
	});

	$("#user_4_button").click(function(){
		$(".current_player").text(all_users[4]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_4']);
		move_coin(4);
		current_user_index = 4;
	});

	$("#user_5_button").click(function(){
		$(".current_player").text(all_users[5]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_5']);
		move_coin(5);
		current_user_index = 5;
	});

	$("#user_6_button").click(function(){
		$(".current_player").text(all_users[6]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_6']);
		move_coin(6);
		current_user_index = 6;
	});

	$("#user_7_button").click(function(){
		$(".current_player").text(all_users[7]+" is playing !");
		$(".current_player").css("color", USER_COLORS['user_7']);
		move_coin(7);
		current_user_index = 7;
	});

	$("#buy_button").click(function(){

		// colog('buy button clicked');

		// colog('current user : ' + current_user_index);

		buy_current_property(current_box_in_process, current_user_index);
	});

	$("#pay_button").click(function(){

		//colog('current user : ' + current_user_index);

		//colog('pay button clicked');

		var current_box_object = box_objects[boxes[currentBoxIndex_users[(current_user_index)]]];
		var name     = current_box_object['name'];
		var title    = current_box_object['key_type'];
		var keyType  = current_box_object['key_type'];
		var price    = current_box_object['price'];
		var rent     = current_box_object['rent'];
		var imageUrl = current_box_object['image_url'];

		if(keyType == 'fine'){

			payFine(price, current_user_index);
			colog("fine");
			// if(name == "K: Watch Movie"){
				
				
			// }
			

		}
		else{
			//colog("Not fine ");
			pay_rent_to_current_property(current_box_in_process, current_user_index);
		}

		update_info_card(current_box_object, name, title, price, rent, imageUrl);

	});


	var users_coins_div = [];

	var current_box_in_process = "";

	fillUserCoinsOnTable();

	function fillUserCoinsOnTable(){

		// append these coins in the Go Box (box_index = 0)
		var go_box = boxes[0]; // go box

		for(var c_index = 0; c_index < TOTAL_USERS_COUNT; c_index++){
			// $('#user_'+(c_index)+'_button').html(all_users[c_index]);

			// colog('trap 11 : ' + users_coins_div);
			// <div id="user_0_coin" class="user_0_coin user_coin">Username</div>
			users_coins_div[c_index] = '<div id="user_'+(c_index)+'_coin" class="user_'+(c_index)+'_coin user_coin">'+(all_users[c_index])+'</div>';

			$("#" + go_box).append(users_coins_div[c_index]);
		}

		// show button 
		for(var tu_index = 0; tu_index < TOTAL_USERS_COUNT; tu_index++){
			$('#user_'+(tu_index)+'_button').show();

			// fill coin color
			// colog('trap3 : '+('.user_'+(tu_index)+'_coin'));
			$('#user_'+(tu_index)+'_coin').css("background-color", USER_COLORS['user_'+(tu_index)]);
		}
		
	}
	
	var currentBoxIndex_users = [];

	for(var c_index = 0; c_index < TOTAL_USERS_COUNT; c_index++){
		currentBoxIndex_users.push(0);
	}

	function move_coin(user_index){

		// colog('moving coin');

		$("#"+boxes[currentBoxIndex_users[(user_index)]]+" .user_"+user_index+"_coin").remove();

		currentBoxIndex_users[(user_index)] += 1;
		if(currentBoxIndex_users[(user_index)] >= MAX_BOX_COUNT){
			currentBoxIndex_users[(user_index)] = 0;

			// give bonus to the user who is passing through
			give_bonus_to_player(ROUND_BONUS, user_index);
		}

		var selected_box = boxes[currentBoxIndex_users[(user_index)]]+"";
		// colog(selected_box);
		$("#"+selected_box).append(users_coins_div[(user_index)]);

		// update coin color
		$('#user_'+(user_index)+'_coin').css("background-color", USER_COLORS['user_'+(user_index)]);

		// update info card
		var current_box_object = box_objects[boxes[currentBoxIndex_users[(user_index)]]];
		var name     = current_box_object['name'];
		var title    = current_box_object['key_type'];
		var keyType  = current_box_object['key_type'];
		var price    = current_box_object['price'];
		var rent     = current_box_object['rent'];
		var imageUrl = current_box_object['image_url'];

		/*
		 colog('keyType : '+keyType);
		 if(keyType == 'fine'){

		 	if(name == "K: Watch Movie"){
		 		payFine(price, user_index);
		 	}
		 }
		*/

		update_info_card(current_box_object, name, title, price, rent, imageUrl);	

		// set current box in process
		current_box_in_process = selected_box;
	}

	function update_info_card(current_box_object, name, title, description, rent, imageUrl){
		$("#info_name").html(name);
		$("#info_title").html(title);

		if(title == 'go'){

			// do nothing
			description = '&nbsp;';
			rent = '&nbsp;';

		} else if(title == 'command' || title == 'kollywood'){ //command/kollywood

			description = 'Price : $' + description;
			rent = 'Rent : $' +rent;

		} else if(title == 'rest'){ // rest

			// do nothing
			description = '&nbsp;';
			rent = '&nbsp;';

		} else if(title == 'nothing'){ // nothing

			// do nothing
			description = '&nbsp;';
			rent = '&nbsp;';

		} else if(title == 'fine'){ // fine

			description = 'Pay $' + description;
			rent = '&nbsp;';
		}

		$("#info_description").html(description);
		$("#info_rent").html(rent);

		// colog(imageUrl);

		$('.info_board .banner').css('background-image', 'url(' + imageUrl + ')');

		// if the property is purchased, show it
		if('purchased_by' in current_box_object){
			var purchased_user = all_users[current_box_object['purchased_by']];
			$('div#info_board div#menu').html('<div style="float:left;" id="user_coin_on_info" class="user_coin">'+purchased_user+'</div>');

			// update user color
			var purchased_user_color = USER_COLORS["user_"+(current_box_object['purchased_by'])];
			$('#user_coin_on_info').css("background-color", purchased_user_color);


		} else {
			$('div#info_board div#menu').html('');
		}
	}

	function buy_current_property(selected_box, buying_user_index){

		// check whether it is eligible to buy
		var key_type = box_objects[selected_box]['key_type'];

		if(key_type == 'command' || key_type == 'kollywood'){

			// whether someone bought the property alredy
			if('purchased_by' in box_objects[selected_box]){

				var local_msg = 'It is alredy purchased. You can not purchase again ';
				colog(local_msg);

				show_alert(local_msg);

				return;
			}


			box_objects[selected_box]['purchased_by'] = (buying_user_index);

			// colog(box_objects[selected_box]);
			// colog('['+box_objects[selected_box]['name'] + ']' + ' bought by '+ all_users[(buying_user_index)]);

			var current_property_price = box_objects[selected_box]['price'];

			// reduce the wealth by box-propoerty amount and add them to properties
			user_wealth['user_'+buying_user_index]          -= current_property_price;
			user_property_wealth['user_'+buying_user_index] += current_property_price;

			// colog(user_wealth);

			update_welath_board();

			// update recent purchase
			var recent_purchase_message = all_users[(buying_user_index)] + ' purchased ' + box_objects[selected_box]['name'];
			show_alert(recent_purchase_message);

		} else {
			colog('['+box_objects[selected_box]['name'] + ']' + ' is not buyable');
		}
	}

	function pay_rent_to_current_property(selected_box, renting_user_index){

		// check whether is is already purchased or not

		// check whether it is eligible to buy
		var key_type = box_objects[selected_box]['key_type'];
		var current_property_price = box_objects[selected_box]['price'];

		if(key_type == 'command' || key_type == 'kollywood'){

			// whether someone bought the property alredy
			if('purchased_by' in box_objects[selected_box]){

				var property_owner_index = box_objects[selected_box]['purchased_by'];

				// colog(box_objects[selected_box]);
				// colog('['+box_objects[selected_box]['name'] + ']' + ' bought by '+ all_users[(renting_user_index)]);

				
				var current_property_rental_price = box_objects[selected_box]['rent'];

				// increase property ownwers wealth by rental price
				user_wealth['user_'+property_owner_index]        += current_property_rental_price;

				// decrease renter's wealth by rental price
				user_wealth['user_'+renting_user_index] -= current_property_rental_price;

				// colog(user_wealth);

				update_welath_board();

				// update recent purchase
				var recent_purchase_message = all_users[(renting_user_index)] + ' paid rent of $'+current_property_rental_price+' to ' + all_users[(property_owner_index)];
			
				show_alert(recent_purchase_message);

				return
			} 

			var local_msg = 'It is not purchased. You can purchase if you want ';
			// colog(local_msg);

			show_alert(local_msg);

		} else {

			if(key_type == 'fine'){
				payFine(current_property_price, renting_user_index);

				return
			}

			colog('['+box_objects[selected_box]['name'] + ']' + ' is not rentable');
		}

	}

	// key: user_n_wealth_info
	function update_welath_board(){

		
	
		for (var i = 0;i<all_users.length; i++){
			var local_message = '';

			var current_user_wealth = user_wealth['user_'+(i)];
			var current_user_property_wealth = user_property_wealth['user_'+(i)];

			var current_user_total_wealth = current_user_wealth + current_user_property_wealth;

			local_message += all_users[i]+' : '+current_user_wealth;
			local_message += ', asset : '+ current_user_property_wealth;
			local_message += ', total : '+ current_user_total_wealth;

			// update total in array
			user_total_wealth['user_'+i] = current_user_total_wealth;

			$('#user_'+(i)+'_wealth_info').html(local_message);
		}

			// sorted_total_wealth = sort_dict(user_total_wealth);
			// colog(sorted_total_wealth)
			// sorted_key_list = get_dict_keys(sorted_total_wealth);
	}
		// colog(user_total_wealth);



		

		// TODO: this is buggy, fix it
		/*
		for (var i = 0;i<sorted_key_list.length; i++){
			var local_message = '';

			var current_user_wealth = user_wealth['user_'+(i)];
			var current_user_property_wealth = user_property_wealth['user_'+(i)];

			var current_user_total_wealth = current_user_wealth + current_user_property_wealth;

			// local_message += all_users[i]+' : '+current_user_wealth;
			local_message += sorted_key_list[i]+' : '+current_user_wealth;
			local_message += ', asset : '+ current_user_property_wealth;
			local_message += ', total : '+ current_user_total_wealth;

			// update total in array
			user_total_wealth['user_'+i] = current_user_total_wealth;

			$('#user_'+(i)+'_wealth_info').html(local_message);
		}*/

	function give_bonus_to_player(bonus_amount, user_index){
		user_wealth['user_'+user_index]  += bonus_amount;

		var local_message = 'Bank giving bonus to '+all_users[user_index];
		show_alert(local_message);

		update_welath_board();
	}

	function payFine(price, user_index){
		var local_message = all_users[user_index] + ' is paying fine of '+ price;
		user_wealth['user_'+user_index]  -= price;
		show_alert(local_message);
		update_welath_board();
	}

	function show_alert(local_msg){
		$('#recent_action_info').html(local_msg);
		$('#recent_action_info').show("slow").delay(2000).hide("slow");
		// update info_card with message 
	}

});