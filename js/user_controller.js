(function() {
 	angular.module('users', ['FBAngular'])
  	.controller('UserController', [
   	'$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', '$element', 'Fullscreen', '$mdToast', '$animate',
  	UserController
]);

/**
* Main Controller for the Angular Material Starter App
* @param $scope
* @param $mdSidenav
* @param avatarsService
* @constructor
*/
function UserController($mdSidenav, $mdBottomSheet, $log, $q, $scope, $element, Fullscreen, $mdToast, $animate) {
	$scope.toastPosition = {
		bottom: true,
		top: false,
		left: true,
		right: false
	};
	$scope.toggleSidenav = function(ev) {
		$mdSidenav('right').toggle();
	};
	$scope.getToastPosition = function() {
		return Object.keys($scope.toastPosition)
		.filter(function(pos) {
		return $scope.toastPosition[pos];
		})
		.join(' ');
	};
  	
  	$scope.showActionToast = function() {
			var toast = $mdToast.simple()
				.content(help_array[0])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast1 = $mdToast.simple()
				.content(help_array[1])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast2 = $mdToast.simple()
				.content(help_array[2])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast3 = $mdToast.simple()
				.content(help_array[3])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast4 = $mdToast.simple()
				.content(help_array[4])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast5 = $mdToast.simple()
				.content(help_array[5])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast6 = $mdToast.simple()
				.content(help_array[6])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast7 = $mdToast.simple()
				.content(help_array[7])
				.action(help_array[9])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			var toast8 = $mdToast.simple()
				.content(help_array[8])
				.action(help_array[10])
				.hideDelay(15000)
				.highlightAction(false)
				.position($scope.getToastPosition());

			$mdToast.show(toast).then(function() {
				$mdToast.show(toast1).then(function() {
					$mdToast.show(toast2).then(function() {
						$mdToast.show(toast3).then(function() {
							$mdToast.show(toast4).then(function() {
								$mdToast.show(toast5).then(function() {
									$mdToast.show(toast6).then(function() {
										$mdToast.show(toast7).then(function() {
											$mdToast.show(toast8).then(function() {

											});
										});
									});
								});
							});
						});
					});
				});
			});
		};
		
	var self = this;
	self.selected = null;
	self.users = [];
	self.toggleList = toggleUsersList;

	$scope.showValue = false; /** It hides the 'Result' tab */
	$scope.showVariables = false; /** I hides the 'Variables' tab */
	$scope.isActive = true;
	$scope.isActive1 = true;

  	$scope.goFullscreen = function() {
		/** Full screen */
		if (Fullscreen.isEnabled())
		Fullscreen.cancel();
		else
		Fullscreen.all();
		/** Set Full screen to a specific element (bad practice) */
		/** Full screen.enable( document.getElementById('img') ) */
  	};
  	$scope.resetExp = function() {
		$mdToast.cancel();
		resetExp($scope);
	}
	$scope.toggle = function() {
		$scope.showValue = !$scope.showValue;
		$scope.isActive = !$scope.isActive;
	};
	/**menu tab 'Variable' toggle*/
	$scope.toggle1 = function() {
		$scope.showVariables = !$scope.showVariables;
		$scope.isActive1 = !$scope.isActive1;
	};
	/**Cross Section toggle*/
  	$scope.showCrossSection = function() {
		showCrossSectionFn($scope);
	}
	/**Function for select range of Current*/
  	$scope.select_range_of_current = function() {
		select_range_of_currentFn($scope);
	}
	/**Function for select current form constant current source*/
  	$scope.change_mA = function() {
		change_mAFn($scope);
	}
	/**Function for change the oven range*/
  	$scope.change_rangeOf_oven = function() {
		change_rangeOf_ovenFn($scope);
	}
	/**Function for change the Temperature */
  	$scope.changeTemperature = function() {
		changeTemperature_Fn($scope);
	}
	/**Function for change Range of voltmeter */
  	$scope.changeRangeof_voltmeter = function() {
		changeRangeof_voltmeter_Fn($scope);
	}
	
	/**Function Set Button */
  	$scope.set_Btn = function() {
		set_Btn_Fn($scope);
	}
	/**Function Set Button */
  	$scope.select_Material = function() {
		select_Material_Fn($scope);
	}
	/**Function Set Button */
  	$scope.run_btn = function() {
		run_btn_Fn($scope);
	}
	/**Function Set Button */
  	$scope.wait_btn = function() {
		wait_btn_Fn($scope);
	}
	/**Function Set Button */
  	$scope.measure_btn = function() {
		measure_btn_Fn($scope);
	}
	/**Function Set Button */
  	$scope.showResult = function() {
		showResultFn($scope);
	}
	/**Function Set Button */
  	$scope.resetExperiment = function() {
		resetExperiment_fn($scope);
	}
	
	
	/** Suspension wire dropdown change event */
	$scope.changeSuspension = function() {
		changeSuspensionFn($scope); /** Function defined in experiment.js file */
	}
	/** Identical mass position dropdown change event */
	$scope.changeMassPosition = function() {
		changeMassPositionFn($scope); /** Function defined in experiment.js file */
	}
	/** Change identical mass slider event */
	$scope.changeIdenticalMass = function() {
		changeIdenticalMassFn($scope); /** Function defined in experiment.js file */
	}
	/** Change disc mass slider event */
	$scope.changeDiscMass = function() {
		changeDiscMassFn($scope); /** Function defined in experiment.js file */
	}
	/** Change disc radius slider event */
	$scope.changeDiscRadius = function() {
		changeDiscRadiusFn($scope); /** Function defined in experiment.js file */
	}
	/** Change suspension wire length slider event */
	$scope.changeWireLength = function() {
		changeWireLengthFn($scope); /** Function defined in experiment.js file */
	}
	/** Change suspension wire radius slider event */
	$scope.changeWireRadius = function() {
		changeWireRadiusFn($scope); /** Function defined in experiment.js file */
	}
	/** Check event of checkbox show stopwatch */
	$scope.showStopwatch = function() {
		showStopwatchFn($scope); /** Function defined in experiment.js file */
	}
	/** Check event of checkbox show time period */
	$scope.showTimePeriod = function() {
		showTimePeriodFn($scope); /** Function defined in experiment.js file */
	}
	/** Click event of button Stop */
	$scope.stopBtn = function() {
		stopBtnFn($scope); /** Function defined in experiment.js file */
	}
   	/** 
    * First hide the bottom sheet IF visible, then
    * hide or Show the 'left' sideNav area
    */
	function toggleUsersList() {
		$mdSidenav('right').toggle();
	}  
}
})();