class AddIndexToMood < ActiveRecord::Migration[5.2]
  def change
    add_index :moods, :uid, name: :index_uid_on_moods
  end
end
