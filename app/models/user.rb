class User < ApplicationRecord
  has_many :post, dependent: :destroy 
  has_many :comment

  has_secure_password

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  validates :DOB, presence: true
  
end
