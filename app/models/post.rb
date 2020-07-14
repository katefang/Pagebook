class Post < ApplicationRecord
  belongs_to :user
  has_many :comment, dependent: :destroy

  validates :post, length: { minimum: 1 }
end
