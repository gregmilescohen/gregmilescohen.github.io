<?php
	session_start();
	
	$_SESSION['nameField'] = $_REQUEST['nameField'] ;
	$_SESSION['emailField'] = $_REQUEST['emailField'] ;
	$_SESSION['stateProvince'] = $_REQUEST['stateProvince'] ;
	$_SESSION['zipField'] = $_REQUEST['zipField'] ;
	$energySol = $_REQUEST['energySol'] ;
	//empty energySol session
	$_SESSION['energySol'] = '';
	//loop over all checkboxes and add them together
	for ($i = 0; $i < count($energySol); $i++) {
		//if only 1 checkbox
		if ( count( $energySol ) == 1 ) {
			$_SESSION['energySol'] = $energySol[$i];
		//if you have more than 1 and you're at the last one	
		} else if ( count( $energySol ) > 1 && $i == count( $energySol ) - 1 ) {
			$_SESSION['energySol'] .= $energySol[$i];
		//if you have more than 1 and you're not at the last one
		} else if ( count( $energySol ) > 1 ) {
			$_SESSION['energySol'] .= $energySol[$i] . ', ';
		}
	}
	$_SESSION['costRange'] = $_REQUEST['costRange'] ;
	$_SESSION['commentsField'] = $_REQUEST['commentsField'] ;
	
	$landing_page = "Location: ".$_REQUEST['end_display'] ;
	//redirect to landing page
	header($landing_page);
?>