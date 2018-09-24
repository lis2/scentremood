class HistoryController < ApplicationController
  def show
    @moods = Mood.where(uid: params[:uid]).where('date >= ?', 1.month.ago)
  end
end
