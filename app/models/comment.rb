class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  has_many :subcomments, class_name: "Comment", foreign_key: "parent_id"
  belongs_to :parent, class_name: "Comment", optional: true

  validates :comment_text, length: { minimum: 1 }

  
end
