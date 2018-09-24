class HistoryController < ApplicationController
  def show
    @moods = Mood.select(:mood, :date).where(uid: params[:uid])
  end
end
