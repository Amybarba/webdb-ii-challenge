
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { 
        vin: '1HGCM82633A004352', 
        make: 'Tesla', 
        model: 'model S' , 
        mileage: '12000', 
         transmission: '1-speed fixed gear 9.73:1',
         title: 'clean' 
        },
        { 
          vin: '1SEXY45910S123456', 
          make: 'Tesla', 
          model: 'model X' , 
          mileage: '5000', 
           transmission: 'Single Spead Transaxle Gearboxes 9.34:1',
           title: 'clean' 
          },
          { 
            vin: '1VOLT75468R235279', 
            make: 'Tesla', 
            model: 'model S' , 
            mileage: '12000', 
             transmission: '1-speed fixed gear 9.73:1',
             title: 'clean' 
            },
            { 
              vin: '1TRUK20201C336393', 
              make: 'Tesla', 
              model: 'Cybertruck' , 
              mileage: '2020', 
               title: 'clean' 
              },
              { 
                vin: '1ELEC36393F123369', 
                make: 'Tesla', 
                model: 'model F' , 
                mileage: '200', 
                 transmission: 'Single Speed  9.99:1',
                 title: 'clean' 
                }
      ]);
    });
};
