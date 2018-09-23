class CreateMoods < ActiveRecord::Migration[5.2]
  def change
    create_table :moods do |t|
      t.string :uid
      t.date :date
      t.integer :mood, limit: 1
      t.timestamps
    end
  end
end
