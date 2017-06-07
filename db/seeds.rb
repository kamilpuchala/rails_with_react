15.times do |i|
	Event.create(name: "Event #{i}",
							description: "Descrritpion event #{i}",
							event_date: Date.today + rand(i+3).months,
							place: "It's random place #{i}")
end
