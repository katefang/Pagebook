class RemoveColumnFromLikes < ActiveRecord::Migration[6.0]
  def change
    remove_column :likes, :like 
  end
end
