# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


((Date.today - 60)..Date.today).each do |date|
  Mood.create!(uid: "testsecretuid", mood: rand(4) + 1, date: date)
end
