class User < ApplicationRecord
  has_many :post, dependent: :destroy 
  has_many :comments
  has_many :likes 

  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  validates :DOB, presence: true
  
end
