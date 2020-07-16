class Post < ApplicationRecord
  belongs_to :user
  has_many :comment, dependent: :destroy

  validates :post_text, length: { minimum: 1 }
end
