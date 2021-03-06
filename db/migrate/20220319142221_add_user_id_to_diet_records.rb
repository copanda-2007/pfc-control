class AddUserIdToDietRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :dietrecords do |t|
      t.text :food, null: false
      t.integer    :calorie, null: false
      t.integer    :protein
      t.integer    :fat
      t.integer    :carbo
      t.text       :text
      t.string     :image
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
