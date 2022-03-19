$(function() {

  const $calculation_weight = $('#calculation_weight');
  const $leanBodyMass = $('#calculation_leanBodyMass');
  const $calorie = $('#calorie');

  $calculation_weight.on('input', function(event) {
    var calculation_weight = $calculation_weight.val();
    var calculation_weight = Number(calculation_weight);
    const $calculation_bodyfatpercentage = $('#calculation_bodyfatpercentage');

    var calculation_bodyfatpercentage = $calculation_bodyfatpercentage.val();
      var calculation_bodyfatpercentage = Number(calculation_bodyfatpercentage);
      const division_bodyfatpercentage = calculation_bodyfatpercentage/100
      const difference_bodyfatpercentage = 1-division_bodyfatpercentage
      const leanBodyMass = calculation_weight * difference_bodyfatpercentage
      const mathLeanBodyMass = Math.round(leanBodyMass)
      const calorie = leanBodyMass * 40
      const mathCalorie = Math.round(calorie)
      $('#calculation_leanBodyMass').val(mathLeanBodyMass);
      $leanBodyMass.text(mathLeanBodyMass);
      $('#calculation_calorie').val(mathCalorie);
      $calorie.text(mathCalorie);

      const $protein = $('#protein');
      const protein = leanBodyMass * 3
      const mathProtein = Math.round(protein)
      $('#calculation_protein').val(mathProtein);
      $protein.text(mathProtein);

      const $fat = $('#fat');
      const fat = (calorie * 0.1) / 9
      const mathFat = Math.round(fat)
      $('#calculation_fat').val(mathFat);
      $fat.text(mathFat);

      const $carbo = $('#carbo');
      const carbo = (calorie - protein - fat) / 4
      const mathCarbo = Math.round(carbo)
      $('#calculation_carbo').val(mathCarbo);
      $carbo.text(mathCarbo);
      
    $calculation_bodyfatpercentage.on('input', function(event) {
      var calculation_bodyfatpercentage = $calculation_bodyfatpercentage.val();
      var calculation_bodyfatpercentage = Number(calculation_bodyfatpercentage);
      const division_bodyfatpercentage = calculation_bodyfatpercentage/100
      const difference_bodyfatpercentage = 1-division_bodyfatpercentage
      const leanBodyMass = calculation_weight * difference_bodyfatpercentage
      const mathLeanBodyMass = Math.round(leanBodyMass)
      const calorie = leanBodyMass*40
      const mathCalorie = Math.round(calorie)
      $('#calculation_leanBodyMass').val(mathLeanBodyMass);
      $leanBodyMass.text(mathLeanBodyMass);
      $('#calculation_calorie').val(mathCalorie);
      $calorie.text(mathCalorie);

      const $protein = $('#protein');
      const protein = leanBodyMass * 3
      const mathProtein = Math.round(protein)
      $('#calculation_protein').val(mathProtein);
      $protein.text(mathProtein);

      const $fat = $('#fat');
      const fat = (calorie * 0.1) / 9
      const mathFat = Math.round(fat)
      $('#calculation_fat').val(mathFat);
      $fat.text(mathFat);

      const $carbo = $('#carbo');
      const carbo = (calorie - protein - fat) / 4
      const mathCarbo = Math.round(carbo)
      $('#calculation_carbo').val(mathCarbo);
      $carbo.text(mathCarbo);
    })
  })
});
