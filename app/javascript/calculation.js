$(function() {

  var $calculation_weight = $('#calculation_weight');
  var $leanBodyMass = $('#calculation_leanBodyMass');
  var $calorie = $('#calorie');

  $calculation_weight.on('input', function(event) {
    var calculation_weight = $calculation_weight.val();
    var calculation_weight = Number(calculation_weight);
    var $calculation_bodyfatpercentage = $('#calculation_bodyfatpercentage');

    var calculation_bodyfatpercentage = $calculation_bodyfatpercentage.val();
      var calculation_bodyfatpercentage = Number(calculation_bodyfatpercentage);
      var division_bodyfatpercentage = calculation_bodyfatpercentage/100
      var difference_bodyfatpercentage = 1-division_bodyfatpercentage
      var leanBodyMass = calculation_weight * difference_bodyfatpercentage
      var mathLeanBodyMass = Math.round(leanBodyMass)
      var calorie = leanBodyMass * 40
      var mathCalorie = Math.round(calorie)
      $('#calculation_leanBodyMass').val(mathLeanBodyMass);
      $leanBodyMass.text(mathLeanBodyMass);
      $('#calculation_calorie').val(mathCalorie);
      $calorie.text(mathCalorie);

      var $protein = $('#protein');
      var protein = leanBodyMass * 3
      var mathProtein = Math.round(protein)
      $('#calculation_protein').val(mathProtein);
      $protein.text(mathProtein);

      var $fat = $('#fat');
      var fat = (calorie * 0.1) / 9
      var mathFat = Math.round(fat)
      $('#calculation_fat').val(mathFat);
      $fat.text(mathFat);

      var $carbo = $('#carbo');
      var carbo = (calorie - protein - fat) / 4
      var mathCarbo = Math.round(carbo)
      $('#calculation_carbo').val(mathCarbo);
      $carbo.text(mathCarbo);
      
    $calculation_bodyfatpercentage.on('input', function(event) {
      var calculation_bodyfatpercentage = $calculation_bodyfatpercentage.val();
      var calculation_bodyfatpercentage = Number(calculation_bodyfatpercentage);
      var division_bodyfatpercentage = calculation_bodyfatpercentage/100
      var difference_bodyfatpercentage = 1-division_bodyfatpercentage
      var leanBodyMass = calculation_weight * difference_bodyfatpercentage
      var mathLeanBodyMass = Math.round(leanBodyMass)
      var calorie = leanBodyMass*40
      var mathCalorie = Math.round(calorie)
      $('#calculation_leanBodyMass').val(mathLeanBodyMass);
      $leanBodyMass.text(mathLeanBodyMass);
      $('#calculation_calorie').val(mathCalorie);
      $calorie.text(mathCalorie);

      var $protein = $('#protein');
      var protein = leanBodyMass * 3
      var mathProtein = Math.round(protein)
      $('#calculation_protein').val(mathProtein);
      $protein.text(mathProtein);

      var $fat = $('#fat');
      var fat = (calorie * 0.1) / 9
      var mathFat = Math.round(fat)
      $('#calculation_fat').val(mathFat);
      $fat.text(mathFat);

      var $carbo = $('#carbo');
      var carbo = (calorie - protein - fat) / 4
      var mathCarbo = Math.round(carbo)
      $('#calculation_carbo').val(mathCarbo);
      $carbo.text(mathCarbo);
    })
  })
});