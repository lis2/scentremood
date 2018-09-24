class HistoryController < ApplicationController
  def show
    @moods = Mood.select(:mood, :date).where(uid: params[:uid])
    @pie_moods = @moods.inject({}) do |target, element|
      target[element.mood.to_s] = target[element.mood.to_s].to_i + 1
      target
    end
  end
end
