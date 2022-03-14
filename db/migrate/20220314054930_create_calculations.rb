class CreateCalculations < ActiveRecord::Migration[6.0]
  def change
    create_table :calculations do |t|
      t.integer     :weight  , null: false
      t.integer     :calorie , null: false
      t.integer     :protein
      t.integer     :fat
      t.integer     :carbo
      t.integer     :bodyfatpercentage
      t.integer     :leanbodymass
      t.references  :user
      t.timestamps
    end
  end
end
