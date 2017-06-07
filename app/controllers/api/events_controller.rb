module Api
	class EventsController < ApplicationController
		def index
			render json: Event.all
		end

		def create
		end

		def search
			query = params[:query]
			events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
														"#{query}, #{query}, #{query}")
			render json: events
		end
	end
end
